import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./vegetation.scss";

export const Vegetation = ({ projectPayed }) => {

  return (
    <Container fluid>
      <div className="veg-title">
        <p>Análisis Vegetación</p>
      </div>

      {/* TARJETA 1 */}
      <Row className="tarjetas-vegetacion">
        {projectPayed && (
          <>
            <Col xs={12} sm={6} lg={4} xl={3} className="veg-card-container">
              <div className="veg-card">
                <Row className="p-0">
                  <Col>
                    <h4>Altura Promedio de la Vegetación</h4>
                  </Col>
                </Row>

                <Row className="dividir-vegetacion p-0 m-0">
                  <Col lg={4} className="pr-1 text-end">
                    <img src="/assets/icons/light_blue_trees.svg" />
                  </Col>
                  <Col lg={8} className="p-0 d-flex align-items-end">
                    <div>
                      <h6>Corresponde a árboles</h6>
                      <h1>{projectPayed[0].avg_height} m</h1>
                    </div>
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="sat-text">
                    <p>Estimación con tecnología satelital</p>
                    <img src="/assets/icons/more_info.svg" />
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="botones-vegetacion">
                    <button className="buton-1">Ver más</button>
                    <button className="buton-2">
                      <img src="/assets/icons/copy.svg" />
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* TARJETA 2 */}
            <Col xs={12} sm={6} lg={4} xl={3} className="veg-card-container">
              <div className="veg-card">
                <Row className="p-0">
                  <Col>
                    <h4>Índices de calidad de los suelos</h4>
                  </Col>
                </Row>

                <Row className="dividir-vegetacion p-0 m-0">
                  <Col lg={4} className="pr-1 text-end">
                    <img src="/assets/icons/light_blue_area.svg" />
                  </Col>
                  <Col lg={8} className="p-0 d-flex align-items-end">
                    <div>
                      <h6>Corresponde a suelos</h6>
                      <h1>{projectPayed[0].soil_quality}</h1>
                    </div>
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="sat-text">
                    <p>Estimación con tecnología satelital</p>
                    <img src="/assets/icons/more_info.svg" />
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="botones-vegetacion">
                    <button className="buton-1">Ver más</button>
                    <button className="buton-2">
                      <img src="/assets/icons/copy.svg" />
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* TARJETA 3 */}
            <Col xs={12} sm={6} lg={4} xl={3} className="veg-card-container">
              <div className="veg-card">
                <Row className="p-0">
                  <Col>
                    <h4>Índice de Densidad Estructural</h4>
                  </Col>
                </Row>

                <Row className="dividir-vegetacion p-0 m-0">
                  <Col lg={4} className="pr-1 text-end">
                    <img src="/assets/icons/light_blue_area.svg" />
                  </Col>
                  <Col lg={8} className="p-0 d-flex align-items-end">
                    <div>
                      <h6>Corresponde a densidad</h6>
                      <h1>{projectPayed[0].structural_density}</h1>
                    </div>
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="sat-text">
                    <p>Estimación con tecnología satelital</p>
                    <img src="/assets/icons/more_info.svg" />
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="botones-vegetacion">
                    <button className="buton-1">Ver más</button>
                    <button className="buton-2">
                      <img src="/assets/icons/copy.svg" />
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* TARJETA 4 */}
            <Col xs={12} sm={6} lg={4} xl={3} className="veg-card-container">
              <div className="veg-card">
                <Row className="p-0">
                  <Col>
                    <h4>Número de Pies Cuantificados</h4>
                  </Col>
                </Row>

                <Row className="dividir-vegetacion p-0 m-0">
                  <Col lg={4} className="pr-1 text-end">
                    <img src="/assets/icons/light_blue_trees.svg" />
                  </Col>
                  <Col lg={8} className="p-0 d-flex align-items-end">
                    <div>
                      <h6>Altura árbol mayor a 0.5m</h6>
                      <h1>{projectPayed[0].trees_quantity}</h1>
                    </div>
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="sat-text">
                    <p>Estimación con tecnología satelital</p>
                    <img src="/assets/icons/more_info.svg" />
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="botones-vegetacion">
                    <button className="buton-1">Ver más</button>
                    <button className="buton-2">
                      <img src="/assets/icons/copy.svg" />
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* TARJETA 5 */}
            <Col xs={12} sm={6} lg={4} xl={3} className="veg-card-container">
              <div className="veg-card">
                <Row className="p-0">
                  <Col>
                    <h4>Índice de Clorofila Verde (GCI)</h4>
                  </Col>
                </Row>

                <Row className="dividir-vegetacion p-0 m-0">
                  <Col lg={4} className="pr-1 text-end">
                    <img src="/assets/icons/light_blue_plant.svg" />
                  </Col>
                  <Col lg={8} className="p-0 d-flex align-items-end">
                    <div>
                      <h6>Coeficiente entre 0 - 10</h6>
                      <h1>{projectPayed[0].green_chlorophyll}</h1>
                    </div>
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="sat-text">
                    <p>Estimación con tecnología satelital</p>
                    <img src="/assets/icons/more_info.svg" />
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="botones-vegetacion">
                    <button className="buton-1">Ver más</button>
                    <button className="buton-2">
                      <img src="/assets/icons/copy.svg" />
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* TARJETA 6 */}
            <Col xs={12} sm={6} lg={4} xl={3} className="veg-card-container">
              <div className="veg-card">
                <Row className="p-0">
                  <Col>
                    <h4>Índice de Calcinación Normalizado (NBR)</h4>
                  </Col>
                </Row>

                <Row className="dividir-vegetacion p-0 m-0">
                  <Col lg={4} className="pr-1 text-end">
                    <img src="/assets/icons/light_blue_heart.svg" />
                  </Col>
                  <Col lg={8} className="p-0 d-flex align-items-end">
                    <div>
                      <h6>Coeficiente entre -1 - +1</h6>
                      <h1>{projectPayed[0].standard_calcination}</h1>
                    </div>
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="sat-text">
                    <p>Estimación con tecnología satelital</p>
                    <img src="/assets/icons/more_info.svg" />
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="botones-vegetacion">
                    <button className="buton-1">Ver más</button>
                    <button className="buton-2">
                      <img src="/assets/icons/copy.svg" />
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* TARJETA 7 */}
            <Col xs={12} sm={6} lg={4} xl={3} className="veg-card-container">
              <div className="veg-card">
                <Row className="p-0">
                  <Col>
                    <h4>Pendiente Promedio del Terreno</h4>
                  </Col>
                </Row>

                <Row className="dividir-vegetacion p-0 m-0">
                  <Col lg={4} className="pr-1 text-end">
                    <img src="/assets/icons/light_blue_slope.svg" />
                  </Col>
                  <Col lg={8} className="p-0 d-flex align-items-end">
                    <div>
                      <h6>Zonas con vegetación</h6>
                      <h1>{projectPayed[0].avg_land_slope}%</h1>
                    </div>
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="sat-text">
                    <p>Estimación con tecnología satelital</p>
                    <img src="/assets/icons/more_info.svg" />
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="botones-vegetacion">
                    <button className="buton-1">Ver más</button>
                    <button className="buton-2">
                      <img src="/assets/icons/copy.svg" />
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* TARJETA 8 */}
            <Col xs={12} sm={6} lg={4} xl={3} className="veg-card-container">
              <div className="veg-card">
                <Row className="p-0">
                  <Col>
                    <h4>Índice de Vegetación Resistente a la Atm.</h4>
                  </Col>
                </Row>

                <Row className="dividir-vegetacion p-0 m-0">
                  <Col lg={4} className="pr-1 text-end">
                    <img src="/assets/icons/light_blue_trees.svg" />
                  </Col>
                  <Col lg={8} className="p-0 d-flex align-items-end">
                    <div>
                      <h6>Coeficiente entre -1 - +1</h6>
                      <h1>{projectPayed[0].atm_vegetation_resistant}</h1>
                    </div>
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="sat-text">
                    <p>Estimación con tecnología satelital</p>
                    <img src="/assets/icons/more_info.svg" />
                  </Col>
                </Row>

                <Row className="p-0">
                  <Col className="botones-vegetacion">
                    <button className="buton-1">Ver más</button>
                    <button className="buton-2">
                      <img src="/assets/icons/copy.svg" />
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};
