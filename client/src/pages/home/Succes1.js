import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./succes.scss";
import { useNavigate } from "react-router-dom";

export const Succes1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container fluid className="bg-succes">
        <Row className="pt-5">
          <Col className="succes-container">
            <div className="succes-emoticono">
              <img src="./assets/active_on.svg" />
            </div>
            <h1>Tu cuenta ha sido creada con éxito</h1>
            <h4>Te hemos enviado un email de confirmación.</h4>
            <Button className="button-succes" onClick={() => navigate("/login")}>
              Ir a mi cuenta
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
