import React from "react";
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./navbar.scss";

export const NavBarMain = ({ setIsLogged, setUser, user }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (user.user_type === 0) {
      navigate(`/user`);
    } else if (user.user_type === 1) {
      navigate("/admin");
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("infocoolx");
    navigate("/");
    setIsLogged(false);
    setUser(null);
  };

  return (
    <>
      <Navbar collapseOnSelect fixed="top" className="nav-color" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-logo" as={Link} to="/">
            <img src="/assets/branding/logo_white.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* barra versión mobile */}
            <Nav className="ms-auto barraMobile">
              {user && (
                <>
                  {user.user_type === 0 ? (
                    <Nav.Link className="sasa" href="/user">
                      {user.user_name} {user.surname}
                    </Nav.Link>
                  ) : (
                    <Nav.Link className="sasa" href="/admin">
                      {user.user_name} {user.surname}
                    </Nav.Link>
                  )}
                </>
              )}

              {!user && (
                <Nav.Link className="sasa" href="/login">
                  Iniciar sesión
                </Nav.Link>
              )}

              {user && (
                <Nav.Link
                  className="sasa"
                  href={`/editusernavbar/${user.user_id}`}
                >
                  Editar
                </Nav.Link>
              )}

              {user && (
                <Nav.Link className="sasa">
                  <Button onClick={handleLogout}>
                    <p>Logout</p>
                  </Button>
                </Nav.Link>
              )}
            </Nav>

            {/* NAVBAR PRINCIPAL */}
            <Nav className="ms-auto barraBig">
              {!user ? (
                <div>
                  <Button
                    className="boton-sesion me-3"
                    onClick={() => navigate(`/login`)}
                  >
                    Iniciar sesión
                  </Button>
                </div>
              ) : (
                <>
                  {user && (
                    <Row>
                      <Col md={2} className="d-flex align-items-center">
                        <img src="/assets/icons/bell.svg" />
                      </Col>

                      <Col md={7} className="pt-1">
                        <Row>
                          <Col md={12} className="user-name ">
                            <p>
                              {user.user_name} {user.surname}
                            </p>
                          </Col>
                        </Row>
                        <Row className="btns">
                          <Col md={8} className="d-flex justify-content-end">
                            <Button
                              onClick={() =>
                                navigate(`/editusernavbar/${user.user_id}`)
                              }
                            >
                              <p>Editar</p>
                            </Button>
                          </Col>
                          <Col md={4} className="d-flex justify-content-end">
                            <Button onClick={handleLogout}>
                              <p>Logout</p>
                            </Button>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={3} className="d-flex align-items-center p-0">
                        <div className="avatar-user me-2">
                          <Button
                            className="avatar-btn"
                            onClick={handleNavigate}
                          >
                            <h3>{user.user_name[0]}</h3>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  )}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
