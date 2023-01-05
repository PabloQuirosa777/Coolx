import React, { useState } from "react";
import "./register.scss";
import { Col, Row, Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";

export const Register = () => {
  const [message, setMessage] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [checkPass, setCheckPass] = useState({
    pass: "",
  });

  const [messageEmail, setMessageEmail] = useState("");

  const [newUser, setNewUser] = useState({
    user_name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    company: "",
    nif: "",
  });

  const [submitButton, setSubmitButton] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage("");
    setNewUser({ ...newUser, [name]: value });
    setMessagePassword("");

    if (validator.isEmail(newUser.email)) {
      setMessageEmail("");
    } else {
      setMessageEmail("");
    }
    // Se verifica si el correo está escrito correctamente
    const { user_name, surname, email, phone, password, company, nif } =
      newUser;
    if (
      user_name &&
      surname &&
      email &&
      phone &&
      password &&
      company &&
      nif &&
      validator.isEmail(email)
    ) {
      setSubmitButton(true);
    } else {
      setSubmitButton(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      newUser.name === "" ||
      newUser.surname === "" ||
      newUser.email === "" ||
      newUser.phone === "" ||
      newUser.password === "" ||
      newUser.company === "" ||
      newUser.nif === ""
    ) {
      setMessage("Debe completar todos los campos!");
    }

    if (newUser.password !== checkPass.pass) {
      setMessagePassword("Las contraseñas deben ser iguales");
    } else {
      axios
        .post("http://localhost:4000/users/registrocoolx", newUser)
        .then((res) => {
          sendMail(newUser);
          console.log(res);
          setNewUser({
            user_name: "",
            surname: "",
            email: "",
            phone: "",
            password: "",
            company: "",
            nif: "",
          });
          navigate("/succes1");
        })
        .catch((err) => {
          if (err.response.data.error.errno === 1062) {
            alert("Email or N.I.F already exist");
          } else {
            navigate("/error");
          }
        });
    }
  };

  const sendMail = (user) => {
    axios
      .post("http://localhost:4000/users/mailregistrocoolx", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleChangePass = (e) => {
    const { name, value } = e.target;
    setCheckPass({ ...checkPass, [name]: value });
  };

  return (
    <div className="register-bg">
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <div className="form-bg d-flex justify-content-center">
            <Col md={6} className="col-form">
              <div className="text-center">
                <h1>Registro</h1>
                <h4 className="message-form">
                  Por favor, completa el formulario
                </h4>
              </div>

              <Form.Group controlId="contactForm-coolx">
                <Form className="d-flex flex-column">
                  <Row>
                    <Col md={6} lg={6}>
                      <Form.Label className="labels-form">Nombre</Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="text"
                        name="user_name"
                        autoComplete="off"
                        value={newUser.user_name}
                        onChange={handleChange}
                      />
                      <div style={{ color: "darkblue" }}>{message}</div>
                    </Col>

                    <Col md={6}>
                      <Form.Label className="labels-form mb-2">
                        Apellido
                      </Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="text"
                        name="surname"
                        autoComplete="off"
                        value={newUser.surname}
                        onChange={handleChange}
                      />
                      <div style={{ color: "darkblue" }}>{message}</div>
                    </Col>

                    <Col md={6}>
                      <div style={{ color: "darkblue" }}>{message}</div>
                      <Form.Label className="labels-form mb-2">
                        Nombre de la empresa
                      </Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="text"
                        name="company"
                        autoComplete="off"
                        value={newUser.company}
                        onChange={handleChange}
                      />
                      <div style={{ color: "darkblue" }}>{message}</div>
                    </Col>

                    <Col md={6}>
                      <Form.Label className="labels-form mb-2">
                        N.I.F
                      </Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="text"
                        name="nif"
                        autoComplete="off"
                        value={newUser.nif}
                        onChange={handleChange}
                      />
                      <div style={{ color: "darkblue" }}>{message}</div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Label className="labels-form mb-2">
                        Email
                      </Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="email"
                        name="email"
                        autoComplete="off"
                        value={newUser.email}
                        onChange={handleChange}
                      />
                      <div style={{ color: "darkblue" }}>{messageEmail}</div>
                      <div style={{ color: "darkblue" }}>{message}</div>
                    </Col>

                    <Col md={6}>
                      <Form.Label className="labels-form mb-2">
                        Teléfono
                      </Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="text"
                        name="phone"
                        autoComplete="off"
                        value={newUser.phone}
                        onChange={handleChange}
                      />
                      <div style={{ color: "darkblue" }}>{message}</div>
                    </Col>

                    <Col md={6}>
                      <Form.Label className="labels-form mb-2">
                        Contraseña
                      </Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="password"
                        name="password"
                        autoComplete="off"
                        value={newUser.password}
                        onChange={handleChange}
                      />
                      <div style={{ color: "darkblue" }}>{message}</div>
                      <div style={{ color: "darkblue" }}>{messagePassword}</div>
                    </Col>

                    <Col md={6}>
                      <Form.Label className="labels-form mb-2">
                        Repite la contraseña
                      </Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="password"
                        name="pass"
                        autoComplete="off"
                        value={checkPass.pass}
                        onChange={handleChangePass}
                      />
                    </Col>
                  </Row>

                  <div>
                    {!submitButton ? (
                      <div className="button-form bf-disabled text-center">
                        Enviar
                      </div>
                    ) : (
                      <Button
                        className="button-form show-bf"
                        onClick={handleSubmit}
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
