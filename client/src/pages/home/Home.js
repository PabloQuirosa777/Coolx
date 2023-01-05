import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./home.scss";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="navTop">
      {/* PRIMER BLOQUE */}
      <Row>
        <Col md={12} lg={12} sm={12} className="fondo-home">
          <div className="textoHome wrapper">
            <p>
              Optimizamos el registro y la evaluación de tus proyectos
              forestales
            </p>

            <button onClick={() => navigate("/contact")}>Contáctanos</button>

            <a href="#regProject">
              <div className="leerMas">
                <p>Leer más</p>
                <img src="/assets/icons/arrow.svg" alt="arrow_down" />
              </div>
            </a>
          </div>
        </Col>
      </Row>

      {/* SEGUNDO BLOQUE */}
      <Row className="fondoRegProject">
        <div className="p-0 separador"></div>
        <div className="fondoBlur1 wrapper">
          <Col className="infoRegProject" id="regProject">
            <div className="wrapperRegProject">
              <Row>
                <Col md={6} xs={12} className="topInfoRegProject">
                  <img src="/assets/icons/info_top.svg" />
                </Col>

                <Col md={6} xs={12} className="topInfoRegProject text-white">
                  <p>
                    Mediante teledetección y big data, disminuimos el tiempo
                    necesario para que tu consultoría medioambiental genere
                    créditos de carbono
                  </p>
                </Col>
              </Row>

              <Row className="forMobile">
                <Col md={6} xs={12} className="bottomInfoRegProject text-white">
                  <p>
                    Esta tecnología nos permite hacer estimaciones más precisas
                    y constantes, generando confianza en cada crédito de carbono
                  </p>
                </Col>

                <Col md={6} xs={12} className="bottomInfoRegProject text-white">
                  <img src="/assets/icons/info_bottom.svg" />
                </Col>
              </Row>
            </div>
          </Col>
        </div>
      </Row>

      {/* TERCER BLOQUE */}
      <Row className="iconsProceso wrapper m-auto">
        <Col sm={12} className="bloqueProcesoHome">
          <h1>¿Cómo será el proceso?</h1>
        </Col>

        <Col xs={12} md={4}>
          <Row className="addProject px-5">
            <Col xs={3} className="d-flex justify-content-center">
              <img src="/assets/icons/add_project_color.svg" />
            </Col>

            <Col xs={9} className="text-container">
              <h4>Añade los proyectos</h4>
              <p>
                Localiza tu proyecto forestal o elige los proyectos que
                necesitan un desarrollador de nuestra plataforma
              </p>
            </Col>
          </Row>
        </Col>

        <Col md={4}>
          <Row className="satelite px-5">
            <Col xs={3} className="d-flex justify-content-center">
              <img src="/assets/icons/satelite.svg" />
            </Col>

            <Col xs={9} className="text-container">
              <h4>Obtenemos datos relevantes</h4>
              <p>
                Procesamos dichos datos para que puedas utilizarlos de forma
                rápida y sencilla para generar créditos de carbono
              </p>
            </Col>
          </Row>
        </Col>

        <Col md={4}>
          <Row className="carbono px-5">
            <Col xs={3} className="d-flex justify-content-center">
              <img src="/assets/icons/co2_color.svg" />
            </Col>

            <Col xs={9} className="text-container">
              <h4>Consigue créditos de carbono</h4>
              <p>
                Tus créditos serán verificados por los mejores estándares y
                monitoreados constantemente, facilitando así su venta
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* CUARTO BLOQUE */}
      <Row className="bloqueGarantizarHome">
        <div className="fondoBlur2">
          <div className="wrapper-low">
            <Col sm={12} className="tituloBloqGarant">
              <h1>Garantizamos</h1>
            </Col>

            <Row className="iconsGarantizar p-0 mx-2">
              <Col md={4}>
                <Row className="vision px-5">
                  <Col xs={3} className="d-flex justify-content-center">
                    <img src="/assets/icons/visibility_white.svg" />
                  </Col>

                  <Col xs={9} className="text-container2">
                    <h4>Viabilidad de tu proyecto</h4>
                    <p>
                      Mediante Bigdata e IA conseguiremos saber si tu proyecto
                      será exitoso
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col md={4}>
                <Row className="sencillex px-5">
                  <Col xs={3} className="d-flex justify-content-center">
                    <img src="/assets/icons/easy_white.svg" />
                  </Col>

                  <Col xs={9} className="text-container2">
                    <h4>Sencillez</h4>
                    <p>
                      Garantizamos la máxima facilidad en la tediosa tarea de
                      presentación de documentos
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col md={4}>
                <Row className="medidas px-5">
                  <Col xs={3} className="d-flex justify-content-center">
                    <img src="/assets/icons/measurement_white.svg" />
                  </Col>

                  <Col xs={9} className="text-container2">
                    <h4>Métodos de medición digitales</h4>
                    <p>
                      Mediante tecnología satelital realizaremos un seguimiento
                      de tu proyecto con exactitud y rapidez
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col sm={12} className="buttonBloqGarant">
                <Button
                  className="botonBloqGarant"
                  onClick={() => navigate("/contact")}
                >
                  ¿Hablamos?
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Row>

      {/* QUINTO BLOQUE */}
      <div className="wrapper-low">
        <Row className="bloqueColabs">
          <Col sm={12}>
            <h4>Respaldados y colaborando con</h4>
          </Col>

          <Col xs={6} sm={4} md={2} className="py-4">
            <img src="/assets/colabs/verra.svg" />
          </Col>
          <Col xs={6} sm={4} md={2} className="py-4">
            <img src="/assets/colabs/gold_standard.svg" />
          </Col>
          <Col xs={6} sm={4} md={2} className="py-4">
            <img src="/assets/colabs/aenor.svg" />
          </Col>
          <Col xs={6} sm={4} md={2} className="py-4">
            <img src="/assets/colabs/miteco.svg" />
          </Col>
          <Col xs={6} sm={4} md={2} className="py-4">
            <img src="/assets/colabs/demium.svg" />
          </Col>
          <Col xs={6} sm={4} md={2} className="py-4">
            <img src="/assets/colabs/university.svg" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
