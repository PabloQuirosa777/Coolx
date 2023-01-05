import React, { useState } from "react";
import "../../pages/auth/register.scss";
import axios from "axios";
import {
  Col,
  Row,
  Button,
  Form,
  FloatingLabel,
  Container,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import "./contact.scss";

export const ContactForm = () => {
  const [message, setMessage] = useState("");

  const [user, setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    userMessage: "",
  });
  // Crea un nuevo objeto con los datos del formulario contacto

  const [submitButton, setSubmitButton] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setMessage("");

    const { userName, email, phone, userMessage } = user;
    if (userName && email && phone && userMessage) {
      setSubmitButton(true);
    } else {
      setSubmitButton(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    //Si el formulario está incompleto...
    if (
      user.name === "" ||
      user.email === "" ||
      user.phone === "" ||
      user.userMessage === ""
    ) {
      setMessage("Los campos deben estar completos");

    } //Sino, se hace la llamada al server para enviar el correo
    else {
      axios
        .post("http://localhost:4000/contact", user)
        .then((res) => {
          navigate("/succes3");
          setUser({ userName: "", email: "", phone: "", userMessage: "" });
          //Se envia el correo correctamente
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="contact-bg">
      <Container fluid>
        <Row className="d-flex justify-content-center ">
          <div className="contact-form-bg d-flex justify-content-center">
            <Col md={2} className="col-contact">
              <div className="text-center">
                <h1>Bienvenido</h1>
                <h4 className="message-contact">
                  Contactaremos contigo lo antes posible
                </h4>
              </div>

              <Form.Group controlId="contactForm">
                <Form className="d-flex flex-column">
                  <Form.Label className="labels-form">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="userName"
                    autoComplete="off"
                    value={user.userName}
                    onChange={handleChange}
                  />
                  <div style={{ color: "darkblue" }}>{message}</div>

                  <Form.Label className="labels-form mt-3 mb-2">
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleChange}
                  />

                  <Form.Label className="labels-contact mt-3 mb-2">
                    Teléfono
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleChange}
                  />

                  <div style={{ color: "darkblue" }}>{message}</div>

                  <Form.Label className="labels-contact mt-3 mb-2">
                    Mensaje
                  </Form.Label>
                  <FloatingLabel controlId="mensaje" label="">
                    <Form.Control
                      className="textarea-contact"
                      as="textarea"
                      placeholder="mensaje"
                      name="userMessage"
                      value={user.userMessage}
                      onChange={handleChange}
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>

                  <div>
                    {!submitButton ? (
                      <div className="button-contact-form b-disabled text-center">
                        Enviar
                      </div>
                    ) : (
                      <Button
                        className="button-contact-form show-b"
                        onClick={handleSend}
                      >
                        Enviar
                      </Button>
                    )}
                  </div>
                </Form>
              </Form.Group>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};
