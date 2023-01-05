import React from "react";
import { Col, Row, Container, Button} from "react-bootstrap";
import "./resumencompra.scss"


export const ResumenCompra = () => {



  return (
    <Container className="card-purchase-summary">
        <Row>
            <Col md={12} lg={12} >
                <div className="title-summary">
                  <h4>Resumen de compra</h4>
                </div>
            </Col>
        </Row>
          
          

        <Row className="info-summary">
          <Col lg={3} className="p-0">
            <img src="/assets/icons/money.svg" />
          </Col>

          <Col lg={8} className="p-0 d-flex align-items-end price-summary">
            <div>
              <p>2% de 575.800 €</p>
              <h4> 11.516,00 €</h4>
             
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex estimation">
              <p>Estimación realizada con tecnología satelital </p>
              <img src="/assets/icons/info.svg"/>
              
          </Col>
        </Row>
    
    

        <Row>
          <Col className="section-button">
             <hr/>
              <p>IVA incluido</p>
              <Button className="button-access-data">Acceder a todos los datos</Button>
          </Col>
        </Row>
    
      
    </Container>
  );
};
