import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "./login.scss";

export const Login = ({ setUser }) => {
  const [message, setMessage] = useState("");
  const [messageOut, setMessageOut] = useState("");
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [submitButton, setSubmitButton] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLogin({ ...login, [name]: value });
    setMessage("");
    setMessageOut("");

    const { email, password } = login;
    if (email && password) {
      setSubmitButton(true);
    } else {
      setSubmitButton(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login.email === "" || login.password === "") {
      setMessage("Debe completar todos los campos!");
    } else {
      axios
        .post("http://localhost:4000/users/login", login)

        .then((res) => {
          const token = res.data.token;
          window.localStorage.setItem("infocoolx", token);

          const id = jwtDecode(token).user.id;
          loadUser(id);

          const type = jwtDecode(token).user.type;

          // replace:true para evitar volver atrás al estar logueado
          type === 0
            ? navigate("/user", { replace: true })
            : type === 1
            ? navigate(`/admin`, { replace: true })
            : navigate("/error");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            alert("Usuario y/o contraseña incorrecto");
          } else {
            navigate("/error");
          }
          setMessageOut("Contraseña y/o usuario incorrectos");
        });
    }
  };

  const loadUser = (id) => {
    axios
      .get(`http://localhost:4000/users/oneUser/${id}`)
      .then((res) => {
        setUser(res.data.resultUser[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container fluid className="fondo-login">
        <Row className="contAuth-login">
          <Col>
            <div>
              <div className="titulo-Login">
                <p>Bienvenido de vuelta</p>
              </div>
              <div className="subtitulo-login">
                <p>
                  Para iniciar sesión introduce tus credenciales a continuación
                </p>
              </div>
            </div>

            <Form.Group controlId="loginForm-coolx">
              <Form className="formAuth-login">
                <Form.Label className="label-login">
                  Dirección de correo electrónico
                </Form.Label>
                <Form.Control
                  className="in1"
                  autoComplete="off"
                  name="email"
                  type="email"
                  value={login.email}
                  onChange={handleChange}
                />
                <div style={{ color: "darkblue" }}>{message}</div>
                <div style={{ color: "darkblue" }}>{messageOut}</div>
                <br />

                <Form.Label className="label-login">Contraseña</Form.Label>
                <Form.Control
                  className="in2"
                  autoComplete="off"
                  name="password"
                  type="password"
                  value={login.password}
                  onChange={handleChange}
                />

                <div style={{ color: "darkblue" }}>{message}</div>

                <div className="nada-juntos">
                  <Button
                    className="nada-nada"
                    onClick={() => navigate(`/forgotpassword`)}
                  >
                    <p aling="right">¿Has olvidado tu contraseña?</p>
                  </Button>
                </div>
              </Form>

              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Recordar contraseña"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                </div>
              ))}

              <div>
                {!submitButton ? (
                  <div className="boton-login bl-disabled text-center">
                    Iniciar sesión
                  </div>
                ) : (
                  <Button
                    className="boton-login show-bl"
                    onClick={handleSubmit}
                  >
                    Iniciar sesión
                  </Button>
                )}
              </div>
              <div className="nada-juntos">
                <p>¿No tienes cuenta?</p>
                <Button
                  className="nada-nada"
                  onClick={() => navigate("/contact")}
                >
                  Contáctanos
                </Button>
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
};
