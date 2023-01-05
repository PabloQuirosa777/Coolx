import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./admindeletemodal.scss"

export const AdminDeleteModal = ({
  setModalDelete,
  onHide,
  show,
  projectModal,
  resetProjects,
  setResetProjects,
}) => {
  const handleSubmit = (id) => {

    axios
      .delete(`http://localhost:4000/project/deleteProject/${id}`)
      .then((res) => {
        setResetProjects(!resetProjects);
        setModalDelete(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show} animation={false} className="p-3" centered>
      <Modal.Header>
        <Modal.Title>Eliminar un proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          ¿Estás seguro que quieres eliminar el proyecto{" "}
          <b>{projectModal && projectModal.project_name}</b>?
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button className="exit-modal" onClick={onHide}>
          Cancelar
        </Button>
        <Button
          className="delete-project-modal"
          onClick={() => handleSubmit(projectModal.project_id)}
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
