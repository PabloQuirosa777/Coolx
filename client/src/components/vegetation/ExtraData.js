import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./extraData.scss";

export const ExtraData = () => {
  return (
    <Container fluid className="py-5">
      <div className="extra-title">
        <p>Documentación Autocompletada por Coolx</p>
      </div>

      {/* TARJETA 1 */}
      <Row className="tarjetas-extra">
        <Col xs={12} sm={6} lg={4} xl={3} className="extra-card-container">
          <div className="extra-card">
            <Row className="p-0">
              <Col>
                <h4>Documentos históricos del proyecto</h4>
              </Col>
            </Row>

            <Row className="dividir-extra p-0 m-0">
              <Col lg={4} className="pr-1 text-end">
                <img src="/assets/icons/light_blue_trees.svg" />
              </Col>
              <Col lg={8} className="p-0 d-flex align-items-end">
                <div>
                  <h6>Archivo Word</h6>
                  <h1>140.0 Kb</h1>
                </div>
              </Col>
            </Row>

            <Row className="p-0">
              <Col className="sat-text-extra">
                <p>Estimación con tecnología satelital</p>
                <img src="/assets/icons/more_info.svg" />
              </Col>
            </Row>

            <Row className="p-0">
              <Col className="boton-extra">
                <button className="buton-1">
                  <img
                    src="/assets/icons/download_white.svg"
                    alt="download icon"
                  />
                  Descargar
                </button>
              </Col>
            </Row>
          </div>
        </Col>

        {/* TARJETA 2 */}
        <Col xs={12} sm={6} lg={4} xl={3} className="extra-card-container">
          <div className="extra-card">
            <Row className="p-0">
              <Col>
                <h4>Documento de cálculo de CO2 absorbido</h4>
              </Col>
            </Row>

            <Row className="dividir-extra p-0 m-0">
              <Col lg={4} className="pr-1 text-end">
                <img src="/assets/icons/light_blue_foot.svg" />
              </Col>
              <Col lg={8} className="p-0 d-flex align-items-end">
                <div>
                  <h6>Archivo Excel</h6>
                  <h1>325.3 Kb</h1>
                </div>
              </Col>
            </Row>

            <Row className="p-0">
              <Col className="sat-text-extra">
                <p>Estimación con tecnología satelital</p>
                <img src="/assets/icons/more_info.svg" />
              </Col>
            </Row>

            <Row className="p-0">
              <Col className="boton-extra">
                <button className="buton-1">
                  <img
                    src="/assets/icons/download_white.svg"
                    alt="download icon"
                  />
                  Descargar
                </button>
              </Col>
            </Row>
          </div>
        </Col>

        {/* TARJETA 3 */}
        <Col xs={12} sm={6} lg={4} xl={3} className="extra-card-container">
          <div className="extra-card">
            <Row className="p-0">
              <Col>
                <h4>Plan financiero del proyecto</h4>
              </Col>
            </Row>

            <Row className="dividir-extra p-0 m-0">
              <Col lg={4} className="pr-1 text-end">
                <img src="/assets/icons/light_blue_euro.svg" />
              </Col>
              <Col lg={8} className="p-0 d-flex align-items-end">
                <div>
                  <h6>Archivo PDF</h6>
                  <h1>724.6 Kb</h1>
                </div>
              </Col>
            </Row>

            <Row className="p-0">
              <Col className="sat-text-extra">
                <p>Estimación con tecnología satelital</p>
                <img src="/assets/icons/more_info.svg" />
              </Col>
            </Row>

            <Row className="p-0">
              <Col className="boton-extra">
                <button className="buton-1">
                  <img
                    src="/assets/icons/download_white.svg"
                    alt="download icon"
                  />
                  Descargar
                </button>
              </Col>
            </Row>
          </div>
        </Col>

        {/* TARJETA 4 */}
        <Col xs={12} sm={6} lg={4} xl={3} className="extra-card-container">
          <div className="extra-card">
            <Row className="p-0">
              <Col>
                <h4>Síntesis de todos los documentos</h4>
              </Col>
            </Row>

            <Row className="dividir-extra p-0 m-0">
              <Col lg={4} className="pr-1 text-end">
                <img src="/assets/icons/light_blue_trees.svg" />
              </Col>
              <Col lg={8} className="p-0 d-flex align-items-end">
                <div>
                  <h6>Archivo Word</h6>
                  <h1>14.6 Mb</h1>
                </div>
              </Col>
            </Row>

            <Row className="p-0">
              <Col className="sat-text-extra">
                <p>Estimación con tecnología satelital</p>
                <img src="/assets/icons/more_info.svg" />
              </Col>
            </Row>

            <Row className="p-0">
              <Col className="boton-extra">
                <button className="buton-1">
                  <img
                    src="/assets/icons/download_white.svg"
                    alt="download icon"
                  />
                  Descargar
                </button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
