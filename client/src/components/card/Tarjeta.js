import axios from "axios";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./tarjeta.scss";

export const Tarjeta = ({ projects, setBuyProject }) => {
  const navigate = useNavigate();



  const handleSend = (project) => {
    axios
      .get(`http://localhost:4000/project/${project.project_id}`)
      .then((res) => {
        setBuyProject(project);
        navigate(`/project/${project.project_id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {projects &&
        projects.map((project) => {
          return (
            <Container fluid key={project.project_id}>
              <Row className="project-card-container ">
                <Col lg={6} xl={5} className="card-img">
                  <img
                    src={
                      project.file_name
                        ? `/imagesimages/${project.file_name}`
                        : "/images/bosque1.png"
                    }
                  />
                </Col>

                <Col lg={6} xl={7} className="card-information">
                  <Row>
                    <Col className="p-card-title">
                      <h4>{project.project_name}</h4>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12} className="p-card-text">
                      <img src="/assets/icons/location.svg" />

                      <p>
                        <b>{project.location}</b>
                      </p>
                    </Col>

                    <Col lg={12} className="p-card-text">
                      <img src="/assets/icons/area.svg" />

                      <p>
                        <b>{project.area}</b>, área del terreno
                      </p>
                    </Col>
                  </Row>

                  <Row className="p-card-profit">
                    <Col xs={2} className="p-0 ">
                      <img
                        className="project-pic"
                        src="/assets/icons/money.svg"
                      />
                    </Col>

                    <Col xs={10} className="p-0 d-flex align-items-end">
                      <div>
                        <p>Ganacias consultora</p>
                        <h4>{project.profit} $</h4>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="btn-direction">
                    <Col xs={5} lg={10}>
                      <Button
                        className="p-card-button"
                        onClick={() => handleSend(project)}
                      >
                        Ver más
                      </Button>
                    </Col>
                    <Col xs={7} lg={2} className="d-flex align-items-center">
                      <p className="p-card-status">
                        {projects &&
                          (project.status === 0
                            ? "Registrado"
                            : project.status === 1
                            ? "Calculando"
                            : "Completado")}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          );
        })}
    </>
  );
};
