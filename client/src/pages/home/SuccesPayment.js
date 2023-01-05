import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./succes.scss";
import { useNavigate } from "react-router-dom";

export const SuccesPayment = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Container fluid className="bg-succes">
        <Row className="pt-5">
          <Col className="succes-container">
            <div className="succes-emoticono">
              <img src="./assets/active_on.svg" />
            </div>

            <h1>Tu pago se ha realizado con éxito</h1>
            <h4>
              Puedes ver, copiar y descargar todos los datos necesarios del proyecto.
            </h4>
            <Button className="button-succes" onClick={() => navigate("/")}>
              Ir al proyecto
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
