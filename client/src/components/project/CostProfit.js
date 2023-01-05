import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import "./costProfit.scss";
import { useNavigate } from "react-router-dom";

export const CostProfit = ({ projectInfo }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12} className="cardCost">
          <Row>
            <div className="tituloCost">
              <p>Coste del proyecto y Ganancias estimadas</p>
              <img src="/assets/icons/info.svg" />
            </div>
          </Row>

          {projectInfo && (
            <>
              <Row className="coste">
                <Col xs={12} lg={3} className="p-0">
                  <img src="/assets/icons/pine_tree.svg" />
                </Col>

                <Col xs={12} lg={9} className="p-0 d-flex align-items-end">
                  <div className="d-flex flex-column justify-content-center">
                    <p>Coste del proyecto</p>
                    <h4>{projectInfo[0].project_cost} €</h4>
                  </div>
                </Col>
              </Row>

              <Row className="ganancias">
                <Col xs={12} lg={3} className="p-0">
                  <img src="/assets/icons/money.svg" />
                </Col>

                <Col xs={12} lg={9} className="p-0 d-flex align-items-end">
                  <div>
                    <p>Ganancias Consultoría</p>
                    <h4>{projectInfo[0].profit} €</h4>
                  </div>
                </Col>
              </Row>
            </>
          )}

          <Row>
            <Col className="p-0">
              {projectInfo &&
                (projectInfo[0].status === 0 ? (
                  <Button
                    className="more-info more-data"
                    onClick={() => {
                      navigate(`/stripe/${projectInfo[0].project_id}`);
                    }}
                  >
                    Acceder a todos los datos
                  </Button>
                ) : projectInfo[0].status === 1 ? (
                  <Button disabled className="more-info loading-data">
                    Cargando datos...
                  </Button>
                ) : (
                  <Button href="#moreInfo" className="more-info more-data">
                    Ver más datos
                  </Button>
                ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
