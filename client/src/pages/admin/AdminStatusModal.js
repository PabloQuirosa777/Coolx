import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./adminstatusmodal.scss"

export const AdminStatusModal = ({
  onHide,
  show,
  projectModal,
  setModalState,
  resetProjects,
  setResetProjects,
}) => {
  const [newState, setNewState] = useState({
    status: "",
  });

  // const handleChange = (e) => {
  //   setNewState({ status: e.target.value });
  //   // console.log(newState);
  // };

  const handleSubmit = (id) => {
    axios
      .put(`http://localhost:4000/project/editStatusProject/${id}`, newState)
      .then((res) => {
        console.log(res);
        setModalState(false);
        setResetProjects(!resetProjects);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show} animation={false} centered>
      <Modal.Header>
        <Modal.Title>Cambiar estado del proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Proyecto: {projectModal && projectModal.project_name}</h5>
        <br />
        <h5>
          Estado actual:
          {projectModal && (
            <b>
              {projectModal.status === 0
                ? "Registrado"
                : projectModal.status === 1
                ? "Calculando"
                : "Completado"}
            </b>
          )}
        </h5>
        <Form.Select
          size="sm"
          defaultValue={projectModal && projectModal.status}
          onChange={(e) => setNewState({ status: e.target.value })}
        >
          <option value="0">Registrado</option>
          <option value="1">Calculando</option>
          <option value="2">Completado</option>
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button className="exit-statusproject-modal" onClick={onHide}>
          Cerrar
        </Button>
        <Button
          className="save-statusproject-modal"
          onClick={() => handleSubmit(projectModal.project_id)}
        >
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
