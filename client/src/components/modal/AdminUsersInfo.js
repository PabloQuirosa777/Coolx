import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import "./adminuserinfo.scss";

export const AdminUsersInfo = ({ onHide, show, userInfo }) => {
  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {userInfo ? userInfo.company : "Rellenar este campo"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {userInfo && (
            <Row>
              <Col xs={12} md={8}>
                <p>Empresa: {userInfo.company} </p>
                <p>Posición en la empresa: {userInfo.position}</p>
                <p>Telefono de contacto: {userInfo.phone}</p>
                <p>Email: {userInfo.email}</p>
                <p>País: {userInfo.country}</p>
                <p>Moneda del país: {userInfo.currency}</p>
                <p>Fecha de registro: 04-04-2022 </p>
                <p>Fecha de la ultima modificación: 25-04-2022 </p>
                <p>Fecha de última conexión: 03-05-2022 </p>
              </Col>
            </Row>
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-modal" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
