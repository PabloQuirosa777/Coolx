import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./co2.scss";

export const Co2 = ({ projectInfo }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} className="infoCo2">
          <Row>
            <div className="tituloCo2">
              <p>Información complementaria</p>
            </div>
          </Row>

          <Row className="coste2">
            <Col lg={3} className="p-0">
              <img src="/assets/icons/Footprint.svg" />
            </Col>

            <Col lg={9} className="p-0 d-flex align-items-end">
              <div className="d-flex flex-column justify-content-center">
                <p>C02 a absober</p>
                <h4>128.240 tn</h4>
              </div>
            </Col>
          </Row>

          <div className="smallTextCo2">
            <p>Estimación realizada con tecnología satelital</p>
            <img src="/assets/icons/info.svg" />
          </div>
          <hr />

          <div className="infoPaisCo2">
            <p>
              País:<b> {projectInfo && projectInfo[0].location}</b>
            </p>
            <p>
              Propuesto Verificador:<b> Verra</b>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
