import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./adminusers.scss";
import Table from "react-bootstrap/Table";
import { AdminUsersInfo } from "../../components/modal/AdminUsersInfo";
import jwtDecode from "jwt-decode";

export const AdminUsers = ({ user, setUserModificate }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [tablaBusqueda, setTablaBusqueda] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [userInfo, setUserInfo] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("infocoolx");
    if (token) {
      

      const { id, type } = jwtDecode(token).user;

      if (type === 1) {
        axios
          .get(`http://localhost:4000/admin/${user?.user_id}/allUsers`)

          .then((res) => {
            setAllUsers(res.data);
            setTablaBusqueda(res.data);
          })

          .catch((err) => {
            console.log(err);
          });
      } else {
        navigate("/");
      }
    } else {
      alert("Debes iniciar sesión como administrador");
    }
  }, []);

  const handleModal = (usuario) => {
    setUserInfo(usuario);
    setOpenModal(true);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let filtrado = tablaBusqueda.filter((elemento) => {
      if (
        elemento.company
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setAllUsers(filtrado);
  };

  return (
    <>
      <div className="wrapper">
        <div className="getdown">
          <Container fluid>
            <Row>
              <Col className="adm-proj-state-header">
                <Button onClick={() => navigate("/admin")}>
                  <img src="./assets/icons/arrow_left.svg" />
                </Button>
                <h1>Todas nuestras empresas</h1>
              </Col>
            </Row>

            <Row>
              <Col className="barra-busq-user">
                <input
                  className="form-control inputBuscar "
                  type="text"
                  placeholder="Buscar usuario"
                  value={busqueda}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="m-0">
              <Table striped responsive="sm" className="table-allusers">
                <thead>
                  <tr>
                    <th className="list-item-table">#</th>
                    <th>Empresa</th>
                    <th className="name-user-table">Nombre</th>
                    <th className="nif-user-table">NIF</th>
                    <th className="country-user-table">País</th>
                    <th>Teléfono</th>
                    <th className="email-user-table">Email</th>
                    <th>Info</th>
                    <th>Editar</th>
                  </tr>
                </thead>

                <tbody>
                  {allUsers &&
                    allUsers.map((usuario, index) => (
                      <tr key={usuario.user_id}>
                        <td className="list-item-table">{index + 1}</td>
                        <td>{usuario.company}</td>
                        <td className="name-user-table">{usuario.user_name}</td>
                        <td className="nif-user-table">{usuario.nif}</td>
                        <td className="country-user-table">
                          {usuario.country}
                        </td>
                        <td>{usuario.phone}</td>
                        <td className="email-user-table">{usuario.email}</td>
                        <td>
                          <Button
                            className="info-users"
                            onClick={() => {
                              handleModal(usuario);
                            }}
                          >
                            <p>Más info</p>
                          </Button>
                        </td>
                        <td>
                          <Button
                            className="edit-users"
                            onClick={() => {
                              setUserModificate(usuario);
                              navigate(`/getEditUser/${usuario.user_id}`);
                            }}
                          >
                            <p>Editar usuario</p>
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Row>
            <Row>
              <Col>
                <p>
                  *Si tiene algun tipo de anomalia en el registro de sus datos
                  por favor, pongase en contacto con nosotros. Le atenderemos de
                  buena gana básicamente porque somos increibles.
                </p>
              </Col>
            </Row>
          </Container>

          <AdminUsersInfo
            onHide={() => setOpenModal(false)}
            show={openModal}
            userInfo={userInfo}
          />
        </div>
      </div>
    </>
  );
};
