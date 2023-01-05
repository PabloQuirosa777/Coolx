import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./projectInfo.scss";
import { StatusProject } from "./StatusProject";

export const ProjectInfo = ({ projectInfo }) => {
  const [images, setImages] = useState([]);

  const { id } = useParams();

  const descargarPdf = () => {
    // Usa fetch para obtener el pdf
    fetch(`http://localhost:4000/pdf/${id}`).then((response) => {
      response.blob().then((blob) => {
        // Crea un nuevo objeto del pdf
        const fileURL = window.URL.createObjectURL(blob);
        // Define los valores de algunas propiedades (nombre, etc.)
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = `Proyecto_${id}`;
        alink.click();
      });
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/project/images/${id}`)
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="cardProjectInfo">
      <Row>
        <Col md={12}>
          <Carousel className="imgCarousel">
            {images &&
              images.map((imagen) => {
                return (
                  <Carousel.Item key={imagen.image_id}>
                    <img
                      className="d-block w-100"
                      src={
                        imagen.file_name
                          ? `/imagesimages/${imagen.file_name}`
                          : "/images/bosque1.png"
                      }
                    />
                  </Carousel.Item>
                );
              })}
          </Carousel>

          <div className="barraStatus">
            <StatusProject projectInfo={projectInfo} />
          </div>

          <section className="descripcionProjectInfo">
            <div className="download-btn">
              <h4>Descripción</h4>
              <Button onClick={descargarPdf} type="button">
                <img src="/assets/icons/download_white.svg" /> Descargar PDF
              </Button>
            </div>
            <hr />
            <p>{projectInfo && projectInfo[0].project_description}</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
