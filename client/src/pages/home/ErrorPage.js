import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./errorpage.scss";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="bg-error">
      <Row className="pt-5">
        <Col className="error-container ">
          <div className="emoticono">
            <img src="./assets/inactive.svg" />
          </div>

          <h1>Se generó un error</h1>
          <h4>Por favor intentalo de nuevo.</h4>
          <Button className="button-error" onClick={() => navigate(-1)}>
            Volver
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
