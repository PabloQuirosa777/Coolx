import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./status.scss";

export const StatusProject = ({ projectInfo }) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <div className="cardStatus p-0">
            <Col xs={4}>
              {projectInfo && projectInfo[0].status === 0 ? (
                <div className="status-on cardRegistrado">
                  <img src="/assets/icons/status1_white.svg" />
                  <p>Registrado</p>
                </div>
              ) : (
                <div className="status-off cardRegistrado">
                  <img src="/assets/icons/status1_grey.svg" />
                  <p>Registrado</p>
                </div>
              )}
            </Col>

            <Col xs={4}>
              {projectInfo && projectInfo[0].status === 1 ? (
                <div className="status-on cardCalculando">
                  <img src="/assets/icons/status2_white.svg" />
                  <p>Calculando</p>
                </div>
              ) : (
                <div className="status-off cardCalculando">
                  <img src="/assets/icons/status2_grey.svg" />
                  <p>Calculando</p>
                </div>
              )}
            </Col>

            <Col xs={4}>
              {projectInfo && projectInfo[0].status === 2 ? (
                <div className="status-on cardCompletado">
                  <img src="/assets/icons/status3_white.svg" />
                  <p>Completado</p>
                </div>
              ) : (
                <div className="status-off cardCompletado">
                  <img src="/assets/icons/status3_grey.svg" />
                  <p>Completado</p>
                </div>
              )}
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};
