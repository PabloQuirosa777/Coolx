import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./succes.scss";


export const Succes3 = () => {

  const navigate = useNavigate();


  return (
    <div>
      <Container fluid className="bg-succes">
        <Row className="pt-5">
          <Col className="succes-container">
            <div className="succes-emoticono">
              <img src="./assets/active_on.svg" />
            </div>

            <h1>Tu correo se ha enviado con éxito</h1>
            <h4>Pronto nos pondremos en contacto contigo.</h4>
            <Button className="button-succes" onClick={() => navigate("/")}>
              Ir al home
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
