import React, { useEffect, useState } from "react";
import { ProjectInfo } from "../../components/project/ProjectInfo";
import { Col, Container, Row } from "react-bootstrap";
import { CostProfit } from "../../components/project/CostProfit";
import "./projectMain.scss";
import { Co2 } from "../../components/project/Co2";
import { Requirements } from "../../components/project/Requirements";
import { BlockedInfo } from "../../components/project/BlockedInfo";
import { ProjectCompleted } from "./ProjectCompleted";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const Project = () => {

  // en projectInfo guardaremos toda la información del proyecto deseado

  const [projectInfo, setProjectInfo] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  // este useEffect te trae toda la información del proyecto seleccionado

  useEffect(() => {
    axios
      .get(`http://localhost:4000/project/${id}`)
      .then((res) => {
        setProjectInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // en este return se muestra la información en la pagina

  return (
    <>
      <div className="wrapper">
        <div className="wrapperProject">
          <Container fluid>
            <Row className="mb-3">
              <Col xs={12} className="projectCard">
                <div className="title-project">
                  <a onClick={() => navigate(-1)}>
                    <img src="/assets/icons/arrow_left.svg" />
                  </a>
                  <p>Proyecto {projectInfo && projectInfo[0].project_name}</p>
                </div>
              </Col>

              <Col lg={8} className="pt-2">
                <ProjectInfo projectInfo={projectInfo} />
              </Col>

              <Col lg={4} className="pt-2">
                <Row>
                  <Col xs={12} md={4} lg={12}>
                    <CostProfit projectInfo={projectInfo} />
                  </Col>
                  <Col xs={12} md={4} lg={12}>
                    <Requirements />
                  </Col>
                  <Col xs={12} md={4} lg={12}>
                    <Co2 projectInfo={projectInfo} />
                  </Col>
                </Row>
              </Col>
            </Row>

            {projectInfo &&
              (projectInfo[0].status === 0 || projectInfo[0].status === 1 ? (
                <Row>
                  <Col md={12}>
                    <BlockedInfo projectInfo={projectInfo} />
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col md={12}>
                    <ProjectCompleted />
                  </Col>
                </Row>
              ))}
          </Container>
        </div>
      </div>
    </>
  );
};
