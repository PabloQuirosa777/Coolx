import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Footer } from "../../pages/home/Footer";
// Estilos de edituser.scss

export const EditUserNavbar = ({ user, resetUser, setResetUser }) => {
  const [editUser, setEditUser] = useState();
  // Edición del usuario logeado

  const navigate = useNavigate();

  const { user_id } = useParams();

  useEffect(() => {
    if (user) {
      setEditUser(user);
    } else {
      axios
        .get(`http://localhost:4000/users/oneUser/${user_id}`)
        .then((res) => {
          setEditUser(res.data.resultUser[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/users/editUser/${user_id}`, {
        register: { ...editUser },
      })

      .then(() => {
        setResetUser(!resetUser);
        if (user.user_type === 0) {
          navigate(`/user`);
        } else if (user.user_type === 1) {
          navigate("/admin");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="wrapper">
        <Container fluid className="contEditUser">
          <Row>
            <Col md={12} className="tituloEditUser">
              <div className="d-flex align-items-center">
                <Button onClick={() => navigate(-1)}>
                  <img src="/assets/icons/arrow_left.svg" />
                </Button>
                <div>
                  <h1>Editar datos</h1>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <div className="d-flex justify-content-center">
              <Col md={6} lg={4} className="contPpalEditUser">
                {editUser && (
                  <Form.Group>
                    <Form className="editUserForm d-flex flex-column">
                      <Row>
                        <Col md={6}>
                          <Form.Label className="label-edit">Nombre</Form.Label>
                          <Form.Control
                            className="mb-3"
                            type="text"
                            name="user_name"
                            autoComplete="off"
                            value={editUser.user_name}
                            onChange={handleChange}
                          />

                          <Form.Label className="label-edit mb-2">
                            Apellidos
                          </Form.Label>
                          <Form.Control
                            className="mb-3"
                            type="text"
                            name="surname"
                            autoComplete="off"
                            value={editUser.surname}
                            onChange={handleChange}
                          />

                          <Form.Label className="label-edit mb-2">
                            Empresa
                          </Form.Label>
                          <Form.Control
                            className="mb-3"
                            type="text"
                            name="company"
                            autoComplete="off"
                            value={editUser.company}
                            onChange={handleChange}
                          />

                          <Form.Label className="label-edit mb-2">
                            NIF/ CIF
                          </Form.Label>
                          <Form.Control
                            className="mb-3"
                            type="text"
                            name="nif"
                            autoComplete="off"
                            value={editUser.nif}
                            onChange={handleChange}
                          />
                        </Col>

                        <Col md={6}>
                          <Form.Label className="label-edit mb-2">
                            Puesto de trabajo
                          </Form.Label>
                          <Form.Control
                            className="mb-3"
                            type="text"
                            name="position"
                            autoComplete="off"
                            value={editUser.position}
                            onChange={handleChange}
                          />

                          <Form.Label className="label-edit mb-2">
                            Teléfono
                          </Form.Label>
                          <Form.Control
                            className="mb-3"
                            type="text"
                            name="phone"
                            autoComplete="off"
                            value={editUser.phone}
                            onChange={handleChange}
                          />

                          <Form.Label className="label-edit mb-2">
                            País
                          </Form.Label>
                          <Form.Control
                            className="mb-3"
                            type="text"
                            name="country"
                            autoComplete="off"
                            value={editUser.country}
                            onChange={handleChange}
                          />
                          <Form.Label className="label-edit mb-2">
                            Moneda del usuario
                          </Form.Label>
                          <Form.Control
                            className="mb-3"
                            type="text"
                            name="currency"
                            autoComplete="off"
                            value={editUser.currency}
                            onChange={handleChange}
                          />
                        </Col>
                      </Row>
                    </Form>
                  </Form.Group>
                )}
              </Col>
            </div>
          </Row>

          <Row>
            <div>
              <Col className="send-edit-user mb-5">
                <Button className="button-edit" onClick={handleSubmit}>
                  Enviar
                </Button>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
