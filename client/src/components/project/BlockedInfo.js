import axios from "axios";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./blocked.scss";

export const BlockedInfo = ({ projectInfo }) => {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Row>
        <Col md={12} className="blockedInfo">
          <div className="blur">
            <section className="descripcionBlocked">
              <h4>Descripción</h4>
              <hr />
              <p>
                El Proyecto de Reforestación Santa Elena busca la reforestación
                de los bosques situados en 6 resguardos indígenas del Pueblo
                Sikuani ubicados en el Municipio de Santa Elena. Los resguardos
                suman una superficie total de 1.517 ha.
              </p>
              <p>
                Las actividades principales del proyecto incluyen el
                fortalecimiento institucional y de la educación, reforestación
                participativa, monitoreo y control de la deforestación y
                degradación, protección y conservación de la biodiversidad,
                producción, autoabastecimiento y comercialización de diversos
                cultivos y aprovechamiento silvopastoril, entre otras.
              </p>

              <p>
                Como resultado de las diferentes actividades que se llevarán a
                cabo será posible reducir todo el área deforestada en años
                anteriores, lo que se estima una absorción total de 128.240
                tCO2e durante el periodo de monitoreo.
              </p>
            </section>
          </div>

          <div className="unblock">
            {projectInfo &&
              (projectInfo[0].status === 0 ? (
                <Button
                  className="buttonBlock buy-data"
                  onClick={() =>navigate(`/stripe/${projectInfo[0].project_id}`)
                }
                >
                  
                  Desbloquear todos los datos
                </Button>
              ) : projectInfo[0].status === 1 ? (
                <Button disabled className="buttonBlock load-data">
                  Cargando datos...
                </Button>
              ) : (
                <p>Error en la base de datos</p>
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
