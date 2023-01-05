import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Table } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./admintree.scss";
import { TreeDeleteModal } from "../../components/modal/TreeDeleteModal";
import { TreeEditModal } from "../../components/modal/TreeEditModal";

export const AdminTree = ({ setIsLogged }) => {
  const [allTrees, setAllTrees] = useState([]);
  const [editTree, setEditTree] = useState(false);
  const [resetAllTrees, setResetAllTrees] = useState(false);
  const [treeModal, setTreeModal] = useState();
  const [modalDeleteTree, setModalDeleteTree] = useState(false);
  const [modalEditTree, setModalEdiTree] = useState(false);
  const [tablaBusqueda, setTablaBusqueda] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("infocoolx");

    if (token) {
      setIsLogged(true);

      const { id, type } = jwtDecode(token).user;

      if (type === 1) {
        axios
          .get(`http://localhost:4000/admin/${id}/allTrees`)
          .then((res) => {
            setAllTrees(res.data);
            setTablaBusqueda(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        navigate("/");
      }
    } else {
      alert("Debes iniciar sección como administrador");
    }
  }, [resetAllTrees]);

  const handleEditTree = (tree) => {
    setEditTree(tree);
    setModalEdiTree(true);
  };

  const handleDeleteTree = (tree) => {
    setTreeModal(tree);
    setModalDeleteTree(true);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrarTree(e.target.value);
  };

  const filtrarTree = (terminoBusqueda) => {
    let resBusqueda = tablaBusqueda.filter((elemento) => {
      if (
        elemento.tree_name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setAllTrees(resBusqueda);
  };

  return (
    <>
      <div className="wrapper">
        <Container fluid>
          <Row>
            <Col className="admin-tree-title">
              <div className="admin-title">
                <Button onClick={() => navigate("/admin")}>
                  <img src="/assets/icons/arrow_left.svg" />
                </Button>
                <h1>Listado de arboles</h1>
              </div>

              <Button
                onClick={() => navigate("/treeform")}
                className="boton-register-tree"
              >
                <p>Registrar nuevo árbol</p>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="barra-busq-tree">
              <input
                className="form-control inputBuscar "
                type="text"
                placeholder="Buscar árbol"
                value={busqueda}
                onChange={handleChange}
              />
            </Col>
          </Row>

        <Row className='table-all-trees m-0 mt-3'>
        
          <div className="table-tree-container p-0">
            
            <Table striped responsive="sm">
             

              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th className="latin-tree-name">Nombre en latín</th>
                  <th>Borrar</th>
                  <th>Editar</th>
                </tr>
              </thead>
           
           
              <tbody>
                {allTrees &&
                  allTrees.map((tree, index) => (
                    <tr key={tree.tree_id}>
                      <td>{index + 1}</td>
                      <td>{tree.tree_name}</td>
                      <td className="latin-tree-name">{tree.latin_name}</td>

                      <td>
                        <Button
                          onClick={() => handleDeleteTree(tree)}
                          className="boton-delete-tree"
                        >
                          <p>Eliminar</p>
                        </Button>
                      </td>
                      <td>
                        <Button
                          onClick={() => handleEditTree(tree)}
                          className="boton-edit-tree"
                        >
                          <p>Editar</p>
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
             
            </Table>
          </div>

          </Row>

          {/* LOS MODALES SE ENCUENTRAN EN LA CARPETA COMPONENTS/MODAL */}

          <TreeDeleteModal
            onHide={() => setModalDeleteTree(false)}
            setModalDeleteTree={setModalDeleteTree}
            showModal={modalDeleteTree}
            treeModal={treeModal}
            setResetAllTrees={setResetAllTrees}
            resetAllTrees={resetAllTrees}
          />

          <TreeEditModal
            onHide={() => setModalEdiTree(false)}
            setModalEdiTree={setModalEdiTree}
            showModal={modalEditTree}
            modalEditTree={modalEditTree}
            setResetAllTrees={setResetAllTrees}
            resetAllTrees={resetAllTrees}
            editTree={editTree}
            setEditTree={setEditTree}
          />
        </Container>
      </div>
    </>
  );
};
