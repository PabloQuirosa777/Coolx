import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { UserDeleteModal } from "../../components/modal/UserDeleteModal";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "./edituser.scss";


export const EditUser = ({ userModificate, setIsLogged, user }) => {

  const [editUser, setEditUser] = useState();

  const [modalUserDelete, setModalUserDelete] = useState(false);

  const [sendInfo, setSendInfo] = useState();

  const navigate = useNavigate();

  const { user_id } = useParams();

  // si hay un usuario logeado se coge la información del localStorage
  // sino hay que loguearse
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

  // Al hacerlo llamaremos al back para recibir toda la información de ese usuario para editarla.
  useEffect(() => {
    if (userModificate) {
      setEditUser(userModificate);
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

  const handleDeleteModal = () => {
    setSendInfo(userModificate);
    setModalUserDelete(true);
  };

  // esta constante recoger la nueva información editada de usuario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  // Este axios que modifica la base de datos del usuario con la nueva información
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/users/editUser/${user_id}`, {
        register: { ...editUser },
      })

      .then(() => {
        navigate("/adminusers");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  // en este return mostramos el formulario
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
                  <h1>Edición de usuario</h1>
                </div>
              </div>

              <div className="iconEditUser">
                <img
                  className="iconEditUser-circle"
                  src="/assets/icons/user.svg"
                />
                <p>Editar datos</p>
                <img
                  className="iconEditUser-arrow"
                  src="/assets/icons/arrow_right.svg"
                />
              </div>

              <div className="iconDeleteUser mt-3">
                <img
                  className="iconDeleteUser-circle"
                  src="/assets/icons/delete.svg"
                />
                <Button className="delete-btn p-0">
                  <p className="delet-red" onClick={handleDeleteModal}>
                    Eliminar usuario
                  </p>
                </Button>
                <img
                  className="iconDeleteUser-arrow"
                  src="/assets/icons/arrow_right.svg"
                />
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

      {/* EL MODAL SE ENCUENTRA EN LA CARPETA COMPONENTS/MODAL */}
      
      <UserDeleteModal
        onHide={() => setModalUserDelete(false)}
        show={modalUserDelete}
        sendInfo={sendInfo}
      />
    </>
  );
};
