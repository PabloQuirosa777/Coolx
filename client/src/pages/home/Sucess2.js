import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./succes.scss";

export const Succes2 = () => {
  const navigate = useNavigate();

  const { project_id } = useParams();

  return (
    <>
      <Container fluid className="bg-succes">
        <Row className="pt-5">
          <Col className="succes-container">
            <div className="succes-emoticono">
              <img src="/assets/active_on.svg" />
            </div>

            <h1>Tu proyecto se ha registrado con éxito</h1>
            <h4>
              Para observar el estado de tu proyecto y obtener todos los datos,
              registrate.
            </h4>
            <Button
              className="button-succes"
              onClick={() => navigate(`/project/${project_id}`)}
            >
              Acceder al proyecto
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
