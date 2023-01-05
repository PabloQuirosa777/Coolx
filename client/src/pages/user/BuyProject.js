import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";        
import { useNavigate } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import axios from 'axios'
import "./buyproject.scss"

// aqui mostramos todos los proyectos que se pueden comprar por parte del usuario

export const BuyProject = ({setBuyProject}) => {

// la constante navigate recoge la función que nos permite ir a otras paginas

  const navigate = useNavigate();

// allproject sera la variable donde recogamos toda la información de los proyectos

  const [allProjects, setAllProjects] = useState();


// Nos redirecciona a la pantalla de pago con tarjeta. Y seteamos el BuyProject

  const handleBuy = (project) => {
    setBuyProject(project);
    navigate(`/stripe/${project.project_id}`);
  }

// este useEffect trae todos los proyectos del back de los administradores


  useEffect(() => {
    axios
      .post("http://localhost:4000/project/onlyAdmin")

      .then((res) => {
        setAllProjects(res.data);
      })

      .catch((err)=>{
        console.log(err);
      })

  },[]);

  // en este return se muestra los proyectos de los administradores

  return (
    <div className="wrapper">
      <div className="getdown">
        <Container fluid>
          <Row>
            <Col className="adm-proj-state-header">
              <Button onClick={() => navigate(-1)}>
                <img src="./assets/icons/arrow_left.svg" />
              </Button>
              <h1>Proyectos disponibles</h1>
            </Col>
          </Row>

          <Row className='table-buy-project mt-2'>
            <Table striped responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th className='id-table-buyproject'>Id</th>
                  <th>Nombre</th>
                  <th>Lugar</th>
                  <th>Comprar proyecto</th>
                </tr>
              </thead>

              <tbody className="list-text">
                {allProjects &&
                  allProjects.map((project, index) => (
                    <tr key={project.project_id}>
                      <td>{index + 1}</td>
                      <td className='id-table-buyproject'>{project.project_id}</td>
                      <td>{project.project_name}</td>
                      <td>{project.location}</td>
                      <td>
                        <Button className='buy-project-list'
                        onClick={()=>handleBuy(project)}
                        >
                         <p>Comprar</p> 
                        </Button>
                      </td>
                    </tr>

                  ))}
              </tbody>
            </Table>
          </Row>
        </Container>

      </div>
    </div>
  );
};