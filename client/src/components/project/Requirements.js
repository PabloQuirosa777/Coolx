import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./requirements.scss";

export const Requirements = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} className="required">
          <div className="tituloVerific text-center">
            <p>Requisitos verificados por Coolx</p>
          </div>

          <div className="iconsRequired">
            <div className="adicional">
              <div className="icon">
                <img src="/assets/icons/circle_tree.svg" />
              </div>

              <div className="check">
                <p>Adicional</p>
                <img src="/assets/icons/check_mark.svg" />
              </div>
            </div>

            <div className="permanencia">
              <div className="icon">
                <img src="/assets/icons/permanency.svg" />
              </div>

              <div className="check">
                <p>Permanencia</p>
                <img src="/assets/icons/check_mark.svg" />
              </div>
            </div>

            <div className="verificable">
              <div className="icon">
                <img src="/assets/icons/verify.svg" />
              </div>

              <div className="check">
                <p>Verificable</p>
                <img src="/assets/icons/check_mark.svg" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
