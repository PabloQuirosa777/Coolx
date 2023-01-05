import axios from 'axios';
import React from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./treeeditmodal.scss"


export const TreeEditModal = ({
    onHide,
    showModal, 
    editTree, 
    setEditTree, 
    resetAllTrees, 
    setResetAllTrees,
    setModalEdiTree }) => {

  const navigate = useNavigate();
  
  
  const handleChange = (e) => {
      const {name, value} = e.target;
      setEditTree({...editTree, [name] : value})
  }
  
  const handleSubmit = () => {
      axios
        .put(`http://localhost:4000/tree/editTree/${editTree.tree_id}`, editTree)

        .then(({res}) => {
          setEditTree({...res})
          setModalEdiTree(false)
          setResetAllTrees(!resetAllTrees)
          navigate("/admintree")
          
        })

        .catch((err) => {
          console.log(err);
        })
}

  return (
    <> 
        <Modal show={showModal}  animation={false} className="p-4" centered>
          <Modal.Header closeButton>
          <Modal.Title>Edición de datos del árbol</Modal.Title>
          </Modal.Header>

            <Modal.Body>
                <Form.Group >
                  <Form className="tree-edit-modal d-flex flex-column">
                  <Form.Label className="labels">
                    Nombre de árbol
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="tree_name"
                    value={editTree.tree_name}
                    onChange={handleChange}
                  />


                  <Form.Label className="labels mt-3 mb-2">
                   Nombre en Latín
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="latin_name"
                    value= {editTree.latin_name}
                    onChange={handleChange}
                  />


                  <Form.Label className="labels mt-3 mb-2">
                    Altura media
                    </Form.Label>
                  <Form.Control
                    type="text"
                    name="avg_height_tree"
                    value={editTree.avg_height_tree}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels mt-3 mb-2">
                    Área de copa media
                    </Form.Label>
                  <Form.Control
                    type="text"
                    name="avg_crown_area"
                    value={editTree.avg_crown_area}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels mt-3 mb-2">
                    Biomasa promedio
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="avg_biomass"
                    value={editTree.avg_biomass}
                    onChange={handleChange}
                  />

                
                  <Form.Label className="labels mt-3 mb-2">
                    Edad media
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="avg_age"
                    value={editTree.avg_age}
                    onChange={handleChange}
                  />
                  </Form>
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button className='exit-edit-tree' onClick={onHide}>Cancelar</Button>
                <Button className='save-edit-tree' onClick={handleSubmit}>Guardar cambios</Button>
            </Modal.Footer>

        </Modal>
    </>
  )
}
