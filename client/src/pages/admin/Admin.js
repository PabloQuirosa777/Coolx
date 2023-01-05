import React, { useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./admin.scss";
import jwtDecode from "jwt-decode";

export const Admin = ({ setIsLogged, user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("infocoolx");

    if (token) {
      setIsLogged(true);

      const { type } = jwtDecode(token).user;

      if (type !== 1) {
        navigate("/");
      }
    } else {
      alert("Debes iniciar sección como administrador");
    }
  }, [user]);

  return (
    <>
      <div className="wrapper">
        <Container className="getdown">
          <Row>
            <Col md={12} className="admin-name">
              <p>
                Admin: {user && user.user_name} {user && user.surname}
              </p>
            </Col>
          </Row>

          <Row className="small-mobile">
            <Col
              xs={6}
              lg={4}
              className="d-flex flex-column align-items-center"
            >
              <Button
                className="admin-tools"
                onClick={() => navigate("/projectform")}
              >
                <div className="blue-circle">
                  <img
                    src="/assets/icons/add_project.svg"
                    alt="Add project icon"
                  />
                </div>
                <h4>Añadir proyecto</h4>
                <div className="tool-text">
                  <p>
                    Localiza tu proyecto forestal o elige los proyectos que
                    necesitan un desarrollador de nuestra plataforma.
                  </p>
                </div>
              </Button>
            </Col>

            <Col
              xs={6}
              lg={4}
              className="d-flex flex-column align-items-center"
            >
              <Button
                className="admin-tools"
                onClick={() => navigate(`/adminusers`)}
              >
                <div className="blue-circle">
                  <img src="/assets/icons/all_users.svg" alt="All users icon" />
                </div>
                <h4>Administrar usuarios</h4>
                <div className="tool-text">
                  <p>
                    Procesamos dichos datos para que puedas utilizarlos de forma
                    rápida y sencilla para generar créditos de carbono.
                  </p>
                </div>
              </Button>
            </Col>

            <Col
              xs={6}
              lg={4}
              className="d-flex flex-column align-items-center"
            >
              <Button
                className="admin-tools"
                onClick={() => navigate("/adminprojectstate")}
              >
                <div className="blue-circle">
                  <img src="/assets/icons/co2.svg" alt="Add project icon" />
                </div>
                <h4>Modificar estado de proyecto</h4>
                <div className="tool-text">
                  <p>
                    Tus créditos serán verificados por los mejores estándares y
                    monitoreados constantemente, facilitando así su venta.
                  </p>
                </div>
              </Button>
            </Col>

            <Col
              xs={6}
              lg={4}
              className="d-flex flex-column align-items-center"
            >
              <Button
                className="admin-tools"
                onClick={() => navigate("/admintree")}
              >
                <div className="blue-circle">
                  <img
                    src="/assets/icons/tree_solid_white.svg"
                    alt="Add project icon"
                  />
                </div>
                <h4>Administrar árboles</h4>
                <div className="tool-text">
                  <p className="tool-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    dolorum ipsam, maiores officiis quibusdam aut!.
                  </p>
                </div>
              </Button>
            </Col>

            <Col
              xs={6}
              lg={4}
              className="d-flex flex-column align-items-center"
            >
              <Button
                className="admin-tools"
                onClick={() => navigate("/")}
                disabled
              >
                <div className="blue-circle">
                  <img src="/assets/icons/a.svg" alt="Add project icon" />
                </div>
                <h4>Otra herramienta</h4>
                <div className="tool-text">
                  <p className="tool-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Recusandae ducimus sit aut enim eaque laboriosam.
                  </p>
                </div>
              </Button>
            </Col>

            <Col
              xs={6}
              lg={4}
              className="d-flex flex-column align-items-center"
            >
              <Button
                className="admin-tools"
                onClick={() => navigate("/")}
                disabled
              >
                <div className="blue-circle">
                  <img src="/assets/icons/a.svg" alt="Add project icon" />
                </div>
                <h4>Otra herramienta</h4>
                <div className="tool-text">
                  <p className="tool-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt soluta officia a quod repellendus rerum!.
                  </p>
                </div>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
