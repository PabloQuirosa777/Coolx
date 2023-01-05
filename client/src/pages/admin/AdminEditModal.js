import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./admineditmodal.scss"

export const AdminEditModal = ({ 
  setModalEdit,
  onHide,
  show,
  projectModal,
  setProjectModal,
  resetProjects, 
  setResetProjects
}) => {

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setProjectModal({...projectModal, [name] : value})
  }

 
  const handleSubmit = () => {
  
        axios
            .put(`http://localhost:4000/project/editProject/${projectModal.project_id}`, projectModal)

            .then((res) => {
             setProjectModal({...res})
             setModalEdit(false)
             setResetProjects(!resetProjects)
             navigate("/adminprojectstate")
            
            })

            .catch((err) => {
              console.log(err);
            })
  
  }


  return (
    <Modal show={show}  animation={false} centered>
    <Modal.Header closeButton onClick={onHide}>
    <Modal.Title>Edición de proyecto</Modal.Title>
    </Modal.Header>

      <Modal.Body>
          <Form.Group >
            <Form className="edit-project-modal d-flex flex-column">
            <Form.Label className="labels">
              Nombre del proyecto
            </Form.Label>
            <Form.Control
              type="text"
              name="project_name"
              value={projectModal && projectModal.project_name}
              onChange={handleChange}
             
            />

            <Form.Label className="labels">
              Descripción del proyecto
            </Form.Label>
            <Form.Control
              type="text"
              name="project_description"
              value={projectModal && projectModal.project_description}
              onChange={handleChange}
             
            />

            <Form.Label className="labels">
              Localización
            </Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={projectModal && projectModal.location}
              onChange={handleChange}
             
            />

            <Form.Label className="labels">
              Altitud
            </Form.Label>
            <Form.Control
              type="text"
              name="altitude"
              value={projectModal && projectModal.altitude}
              onChange={handleChange}
             
            />

            <Form.Label className="labels">
              Latitud
            </Form.Label>
            <Form.Control
              type="text"
              name="latitude"
              value={projectModal && projectModal.latitude}
              onChange={handleChange}
             
            />
            <Form.Label className="labels">
             Área
            </Form.Label>
            <Form.Control
              type="text"
              name="area"
              value={projectModal && projectModal.area}
              onChange={handleChange}
             
            />

            <Form.Label className="labels">
             Presupuesto
            </Form.Label>
            <Form.Control
              type="text"
              name="profit"
              value={projectModal && projectModal.profit}
              onChange={handleChange}
             
            />
             <Form.Label className="labels">
             Coste del proyecto
            </Form.Label>
            <Form.Control
              type="text"
              name="project_cost"
              value={projectModal && projectModal.project_cost}
              onChange={handleChange}
             
            />
          
            
            </Form>
          </Form.Group>
      </Modal.Body>

      <Modal.Footer>
          <Button className='exit-edit-admin' onClick={onHide}>Cancelar</Button>
          <Button className='save-edit-admin' onClick={handleSubmit}>Guardar cambios</Button>
      </Modal.Footer>

  </Modal>
  )
}
