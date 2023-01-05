import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import "./myprojects.scss";


// En esta pagina se realiza un outlet
export const User = () => {
  // aqui recogemos en que pagina quiere estar el usuario.
  const [radioValue, setRadioValue] = useState("1");

  // la constante navigate recoge la función que nos permite ir a otras paginas
  const navigate = useNavigate();

  // aqui recogemos en donde quiere estar el usuario.
  const radios = [
    {
      name: "Mis proyectos",
      value: "1",
      url: "myprojects",
      img: "my_projects.svg",
    },
    { name: "Informes", value: "2", url: "reports", img: "reports.svg" },
    { name: "Mensajes", value: "3", url: "messages", img: "mail_solid.svg" },
    { name: "Mi cuenta", value: "4", url: "myaccount", img: "my_account.svg" },
  ];

  // aqui se muestra la pagina de user y en la linea 70 la información de 
  // mis proyectos o informes o mensajes o mi cuenta. 
  return (
    <div className="user-bg">
      <div className="wrapper">
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} lg={2} className="left-bar p-0 ">
              <div className="left-bar-content">
                <Row className="w-100">
                  {radios.map((radio, idx) => (
                    <Col
                      xs={6}
                      sm={3}
                      lg={12}
                      className="btn-user-container"
                      key={idx}
                    >
                      <Button
                        id={`radio-${idx}`}
                        type="radio"
                        className={
                          radioValue === radio.value ? "selected" : "unselected"
                        }
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onClick={(e) => {
                          setRadioValue(e.currentTarget.value);
                          navigate(radio.url);
                        }}
                      >
                        <img src={`/assets/icons/${radio.img}`} alt="icon" />
                        {radio.name}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>

            <Col sm={12} lg={10} className="sheet p-0 mb-4">
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
