import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Tarjeta } from "../../components/card/Tarjeta";
import "./user.scss";
import "./myprojects.scss";
import { BuyModal } from "../../components/modal/BuyModal";

// Esta pagina esta dentro de usuario (user.js) y en el todos los projectos
// asignados

export const MyProjects = ({
  projects,
  setBuyProject,
  buyProject,
  setResetUser,
  resetUser,
  images,
}) => {

// este useEffect actualiza la pagina si se compra un proyecto
  useEffect(() => {}, [projects, images]);

// esta constante cierra y abre el modal de compra
  const [modalBuy, setModalBuy] = useState(false);

  useEffect(() => {
    setResetUser(!resetUser);
  }, []);

  // con esta constante abrimos el modal de compra
  const handleCheck = () => {
    setModalBuy(true);
  };

  return (
    <>
      <Container className="h-100">
        <Row className="h-100">
          <Col sm={9} lg={8} className="card-container">
            <div>
              <Tarjeta projects={projects} buyProject={buyProject} setBuyProject={setBuyProject}/>
            </div>
          </Col>

          <Col sm={3} lg={4} className="add-container">
            <Button
              className="add-button m-0"
              type="button"
              onClick={handleCheck}
            >
              <div className="d-flex flex-column justify-content-center">
                <div className="add-circle">
                  <h2>+</h2>
                </div>
                <p>Añadir proyecto</p>
              </div>
            </Button>
          </Col>
        </Row>
      </Container>

      <BuyModal onHide={() => setModalBuy(false)} show={modalBuy} />
    </>
  );
};
