import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import "./adminprojectmodal.scss"

export const AdminProjectModal = ({ onHide, show, projectModal }) => {
  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {projectModal ? projectModal.project_name : "Cargando"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {projectModal && (
            <Row>
              <Col xs={12} md={8}>
                {projectModal.project_description}
              </Col>
              <Col xs={6} md={4}>
                <Row>
                  <p><b>Localización:</b> {projectModal.location}</p>
                </Row>
                <Row>
                  <p><b>Altitud:</b> {projectModal.altitude}</p>
                </Row>
                <Row>
                  <p><b>Latitud:</b> {projectModal.latitude}</p>
                </Row>
                <Row>
                  <p><b>Hectáreas:</b> {projectModal.area}</p>
                </Row>
                <Row>
                  <p><b>Año de plantación:</b> {projectModal.year_planting}</p>
                </Row>
              </Col>
            </Row>
          )}

          {projectModal && (
            <Row>
              <Col xs={6} md={4}>
                <p><b>Ganancia</b>: {projectModal.profit} $</p>
              </Col>
              <Col xs={6} md={4}>
                <p><b>Costos: </b>{projectModal.project_cost} $</p>
              </Col>
              <Col xs={6} md={4}>
                <p>
                  <b>Estado:{" "}</b>
                  {projectModal.status === 0
                    ? "Registrado"
                    : projectModal.status === 1
                    ? "Calculando"
                    : "Completado"}
                </p>
              </Col>
            </Row>
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="exit-info-modal" onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};
