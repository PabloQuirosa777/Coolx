import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "./userdeletemodal.scss"

export const UserDeleteModal = ({ sendInfo, show, onHide }) => {
  const navigate = useNavigate();

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:4000/users/deleteUser/${id}`)

      .then((res) => {
        navigate("/adminusers");


      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show} animation={false} centered>
      <Modal.Header>
        <Modal.Title>Eliminar un usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          ¿Estás seguro que quieres eliminar al usuario{" "}
          <b>{sendInfo && sendInfo.user_name}</b>?
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button className="exit-deleteuser-modal" onClick={onHide}>
          Cancelar
        </Button>
        <Button className="save-deleteuser-modal" onClick={() => deleteUser(sendInfo.user_id)}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
