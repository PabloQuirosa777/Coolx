import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./admincompany.scss";

export const AdminCompany = ({ onHide, show, allUsers, projectModal, resetProjects, setResetProjects, setModalBuyer }) => {

    const handleCompany = (usuario, projectModal) => {


    axios
      .put(
        `http://localhost:4000/project/changeUser/${projectModal.project_id}/${usuario.user_id}`
      )

      .then((res) => {
        setResetProjects(!resetProjects);
        setModalBuyer(false);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {"Empresas"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Empresa</th>
                </tr>
              </thead>

              <tbody>
                {allUsers &&
                  allUsers.map((usuario, index) => (
                    <tr key={usuario.user_id}>
                      <td>{index + 1}</td>
                      <td>{usuario.company}</td>
                      <td>
                        <Button
                          className="assign-company-modal"
                          onClick={() => {
                            handleCompany(usuario, projectModal);
                          }}
                        >
                          Asignar empresa
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="exit-company-modal" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
