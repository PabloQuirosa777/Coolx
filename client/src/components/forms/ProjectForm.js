import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./projectform.scss";
import axios from "axios";

export const ProjectForm = ({ user, resetUser, setResetUser }) => {
  const [projectFiles, setProjectFiles] = useState();
  const [submitButton, setSubmitButton] = useState(false);
  const [havePic, setHavePic] = useState(false);
  const [newProject, setNewProject] = useState({
    projectName: "",
    projectDescription: "",
    location: "",
    altitude: "",
    latitude: "",
    area: "",
    profit: "",
    projectCost: "",
    yearPlanting: "",
  });
  // Crea un nuevo objeto con los datos del nuevo proyecto
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });

    const {
      projectName,
      projectDescription,
      location,
      altitude,
      latitude,
      area,
      profit,
      projectCost,
      yearPlanting,
    } = newProject;

    if (
      projectName &&
      projectDescription &&
      location &&
      altitude &&
      latitude &&
      area &&
      profit &&
      projectCost
    ) {
      setSubmitButton(true);
    } else {
      setSubmitButton(false);

    }
  };

  const handleFiles = (e) => {
    setProjectFiles(e.target.files);

    setHavePic(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = new FormData();
    newFormData.append("newProject", JSON.stringify(newProject));

    if (projectFiles) {
      for (const elem of projectFiles) {
        newFormData.append("file", elem);
      }
    }
    // Se guarda la informacion en la bd
    axios
      .post(
        `http://localhost:4000/project/newProject/${user.user_id}`,
        newFormData
      )
      .then((res) => {
        navigate(`/succes2/${res.data.insertId}`);
        console.log("res.data.insertId ", res.data.insertId);
        setResetUser(!resetUser);
        // Redirige a ese nuevo proyecto
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.error.errno === 1062) {
          alert("El proyecto ya existe");
        } else {
          navigate("/error");
        }

      });
  };

  return (
    <>
      <div className="wrapper">
        <Container fluid className="fondo-create">
          <Row>
            <Col className="espacio-create">
              <div className="d-flex align-items-center">
                <Button onClick={() => navigate(-1)}>
                  <img src="./assets/icons/arrow_left.svg" />
                </Button>

                <div>
                  <h1>Inserte los datos de su nuevo proyecto</h1>
                </div>
              </div>

              <div className="create-icono">
                <img
                  className="create-icono-circle"
                  src="/assets/icons/permanence_solid_circle.svg"
                />
                <p>Introduzca los datos</p>
                <img
                  className="create-icono-arrow"
                  src="/assets/icons/arrow_right.svg"
                />
              </div>
            </Col>
          </Row>

          <Row>
            <div className="d-flex justify-content-center">
              <Col md={5} className="col-create">
                <Form.Group>
                  <Form className="projectForm d-flex flex-column">
                    <Form.Label className="labels">
                      Nombre del proyecto
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Reforestación en Nicaragua"
                      name="projectName"
                      autoComplete="off"
                      value={newProject.projectName}
                      onChange={handleChange}
                    />

                    <Form.Label className="labels mt-3 mb-2">
                      Localización
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Guatemala"
                      name="location"
                      autoComplete="off"
                      value={newProject.location}
                      onChange={handleChange}
                    />

                    <Row>
                      <Col md={6}>
                        <Form.Label className="labels mt-3 mb-2">
                          Altitud
                        </Form.Label>

                        <Form.Control
                          type="text"
                          placeholder="Ej. 36.694071"
                          name="altitude"
                          autoComplete="off"
                          value={newProject.altitude}
                          onChange={handleChange}
                        />
                      </Col>

                      <Col md={6}>
                        <Form.Label className="labels mt-3 mb-2">
                          Latitud
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ej.-4.4457159"
                          name="latitude"
                          autoComplete="off"
                          value={newProject.latitude}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Label className="labels mt-3 mb-2">
                          Área del terreno (Ha)
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="5800"
                          name="area"
                          autoComplete="off"
                          value={newProject.area}
                          onChange={handleChange}
                        />
                      </Col>

                      <Col md={6}>
                        <Form.Label className="labels mt-3 mb-2">
                          Año de plantación
                        </Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Ej. 1987"
                          name="yearPlanting"
                          autoComplete="off"
                          value={newProject.yearPlanting}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Label className="labels mt-3 mb-2">
                          Ganancias del proyecto
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="86.000 euros"
                          name="profit"
                          autoComplete="off"
                          value={newProject.profit}
                          onChange={handleChange}
                        />
                      </Col>

                      <Col md={6}>
                        <Form.Label className="labels mt-3 mb-2">
                          Coste del proyecto
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Ej. 215.000 euros"
                          name="projectCost"
                          autoComplete="off"
                          value={newProject.projectCost}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>

                    <Form.Label className="labels mt-3 mb-2">
                      Descripción del proyecto
                    </Form.Label>
                    <FloatingLabel controlId="projectForm" label="">
                      <Form.Control
                        className="textarea-form"
                        as="textarea"
                        name="projectDescription"
                        value={newProject.projectDescription}
                        onChange={handleChange}
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>

                    <Form.Label className="labels mt-3 mb-2">
                      Imagenes del proyecto
                    </Form.Label>
                    <Form.Control
                      type="file"
                      name="files"
                      multiple
                      onChange={handleFiles}
                    />
                  </Form>
                </Form.Group>
              </Col>
            </div>
          </Row>

          <Row>
            <div>
              <Col className="colocar-create">
                {submitButton && havePic ? (
                  <Button
                    className="button-create show-bp"
                    onClick={handleSubmit}
                  >
                    Crear proyecto
                  </Button>
                ) : (
                  <div className="button-create bp-disabled text-center">
                    Crear proyecto
                  </div>
                )}
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
