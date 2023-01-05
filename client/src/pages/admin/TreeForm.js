import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./treeform.scss";
import jwtDecode from "jwt-decode";

export const TreeForm = ({ setIsLogged }) => {
  const [newTree, setNewTree] = useState({
    tree_name: "",
    latin_name: "",
    avg_height_tree: "",
    avg_crown_area: "",
    avg_biomass: "",
    avg_age: "",
  });
  const [submitButton, setSubmitButton] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("infocoolx");

    if (token) {
      setIsLogged(true);

      const { type } = jwtDecode(token).user;

      if (type !== 1) {
        navigate("/");
      }
    } else {
      alert("Debes iniciar sección como administrador");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTree({ ...newTree, [name]: value });

    const {
      tree_name,
      latin_name,
      avg_height_tree,
      avg_crown_area,
      avg_biomass,
      avg_age,
    } = newTree;
    if (
      tree_name &&
      latin_name &&
      avg_height_tree &&
      avg_crown_area &&
      avg_biomass &&
      avg_age
    ) {
      setSubmitButton(true);
    } else {
      setSubmitButton(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/tree/createTree", newTree)

      .then((res) => {
        console.log(res);
        navigate("/admintree");
      })
      .catch((err) => {
        console.log(err, "ESTE ES EL ERROR AXIOS");
      });
  };

  return (
    <div className="wrapper">
      <Container fluid className="formCreateTree">
        <Row>
          <Col md={12} className="header-create-tree">
            <div className="d-flex align-items-center">
              <Button onClick={() => navigate(-1)}>
                <img src="./assets/icons/arrow_left.svg" />
              </Button>
              <div>
                <h1>Datos del árbol</h1>
              </div>
            </div>

            <div className="create-icono-tree">
              <img
                className="iconTree-circle"
                src="./assets/icons/tree_circle.svg"
              />
              <p>Introduzca los datos</p>
              <img
                className="iconTree-arrow"
                src="./assets/icons/arrow_right.svg"
              />
            </div>
          </Col>
        </Row>

        <Row>
          <div className="d-flex justify-content-center">
            <Col md={5} className="col-tree">
              <Form.Group>
                <Form className="formTree d-flex flex-column">
                  <Form.Label className="label-tree">
                    Nombre del árbol
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. Roble"
                    name="tree_name"
                    autoComplete="off"
                    value={newTree.tree_name}
                    onChange={handleChange}
                  />

                  <Form.Label className="label-tree mt-3 mb-2">
                    Nombre en Latín
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. Quercus"
                    name="latin_name"
                    autoComplete="off"
                    value={newTree.latin_name}
                    onChange={handleChange}
                  />

                  <Form.Label className="label-tree mt-3 mb-2">
                    Altura media
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. 40"
                    name="avg_height_tree"
                    autoComplete="off"
                    value={newTree.avg_height_tree}
                    onChange={handleChange}
                  />

                  <Form.Label className="label-tree mt-3 mb-2">
                    Área de copa media
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. 50"
                    name="avg_crown_area"
                    autoComplete="off"
                    value={newTree.avg_crown_area}
                    onChange={handleChange}
                  />

                  <Form.Label className="label-tree mt-3 mb-2">
                    Biomasa promedio
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. 6.03"
                    name="avg_biomass"
                    autoComplete="off"
                    value={newTree.avg_biomass}
                    onChange={handleChange}
                  />

                  <Form.Label className="label-tree mt-3 mb-2">
                    Edad media
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej.100"
                    name="avg_age"
                    autoComplete="off"
                    value={newTree.avg_age}
                    onChange={handleChange}
                  />
                </Form>
              </Form.Group>
            </Col>
          </div>
        </Row>

        <Row>
          <div>
            <Col className="contenedor-boton-tree  mb-5">
              {!submitButton ? (
                <div className="button-send bt-disabled text-center">
                  Guardar datos
                </div>
              ) : (
                <Button className="button-send show-bt" onClick={handleSubmit}>
                  Guardar datos
                </Button>
              )}
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};
