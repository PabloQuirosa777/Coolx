import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import "./tarjeta.scss";

export const Tarjetamas = ({ projectPayed }) => {

  return (
    <>
      <Container className="bage">
        <Row className="contenedor">
          <Col md={6} className="img">
            <Carousel>


              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/Bosque.jpg"
                  alt="First slide"
                />
              </Carousel.Item>


            </Carousel>
          </Col>

          <Col md={6} className="letras">
            <div>
              <h4>Datos generales</h4>
            </div>

            <div className="division">
              <div>
                <img src="/assets/icons/location.svg" />
              </div>

              <div>
                <p>Peru</p>
              </div>
            </div>

            <div className="division">
              <div>
                <img src="/assets/icons/tree_solid.svg" />
              </div>

              <div>
                <p>Tipo de madera</p>
              </div>
            </div>

            <div className="division">
              <div>
                <img src="/assets/icons/location.svg" />
              </div>

              <div>
                <p>Area del terreno</p>
              </div>
            </div>

            <div className="division">
              <div>
                <img src="/assets/icons/location.svg" />
              </div>

              <div>
                <p>Años desde su plantación</p>
              </div>
            </div>

            <div>
              <button className="butun">Descargar documento</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
