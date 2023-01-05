import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./pagoseguro.scss"

export const PagoSeguro = () => {
  return (
    <>
        <Container>
            <Row>
                <Col md={12} lg={12} className="d-flex secure-payment">
                    <img src='/assets/icons/circle_check.svg'/>
                    <p>Pago Seguro Garantizado</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}
