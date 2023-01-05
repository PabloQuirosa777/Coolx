import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./treedeletemodal.scss"

export const TreeDeleteModal = ({ 
    onHide, 
    setModalDeleteTree, 
    showModal, 
    treeModal, 
    setResetAllTrees, 
    resetAllTrees }) => {

    
    const deleteTree = (id) => {
    
        axios
            .delete(`http://localhost:4000/tree/deleteTree/${id}`)
  
            .then((res) => {
              setResetAllTrees(!resetAllTrees);
              setModalDeleteTree(false);
            })
  
            .catch((err) => {
              console.log(err);
            })      
    }

  return (
    <Modal show={showModal} animation={false} className="p-4" centered>
    <Modal.Header>
      <Modal.Title>Eliminar un árbol</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h5>
        ¿Estás seguro que quieres eliminar este árbol{" "}
        <b>{treeModal && treeModal.tree_name}</b>?
      </h5>
    </Modal.Body>
    <Modal.Footer>
      <Button className="exit-delete-tree" onClick={onHide}>
        Cancelar
      </Button>
      <Button
        className="save-delete-tree"
        onClick={() => deleteTree(treeModal.tree_id)}
      >
        Eliminar
      </Button>
    </Modal.Footer>
  </Modal>
  
  )
}
