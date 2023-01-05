import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BuyModal } from "../../components/modal/BuyModal";
import "./footer.scss";

export const Footer = ({ user }) => {
  const [modalBuy, setModalBuy] = useState(false);
  const [footerBtn, setFooterBtn] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const sessionToken = findToken();

    if (sessionToken !== null) {
      let pathname = window.location.pathname;
      // console.log("path: ", pathname);
      if (user?.user_type === 0) {
        if (pathname === "/") {
          setFooterBtn("Panel");
        } else {
          setFooterBtn("Agregar");
        }
      } else if (user?.user_type === 1) {
        if (pathname === "/admintree") {
          setFooterBtn("Nuevo");
        } else if (
          pathname === "/adminprojectstate" ||
          pathname === "/treeform"
        ) {
          setFooterBtn("Admin");
        } else {
          setFooterBtn("Estados");
        }
      }
    } else {
      setFooterBtn("Login");
    }
  });

  const findToken = () => {
    try {
      let sessionToken = localStorage.getItem("infocoolx");
      return sessionToken;
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheck = () => {
    if (footerBtn === "Agregar") {
      setModalBuy(true);
    } else if (footerBtn === "Panel") {
      navigate("/user");
    } else if (footerBtn === "Nuevo") {
      navigate("/treeform");
    } else if (footerBtn === "Admin") {
      navigate("/admin");
    } else if (footerBtn === "Estados") {
      navigate("/adminprojectstate");
    } else if (footerBtn === "Login") {
      navigate("/login");
    }
  };

  return (
    <>
      <Container fluid>
        {/* FOOTER TABLET Y PORTATIL */}
        <Row className="footer ">
          <Col>
            <div className="wrapper3">
              <Row>
                <Col sm={12} md={5} lg={4} className="footer_logo">
                  <img src="/assets/branding/logo_white.svg" />
                  <p>Enviromental Services</p>
                </Col>

                <Col
                  sm={12}
                  md={5}
                  lg={4}
                  className="footer_contacto text-center"
                >
                  <h4>Contacta con nosotros</h4>

                  <div className="mail">
                    <img src="/assets/icons/mail.svg" />
                    <p>coolx.earth@gmail.com</p>
                  </div>

                  <div className="mail">
                    <img src="/assets/icons/call.svg" />
                    <p>+ 34 3478543874</p>
                  </div>
                </Col>

                <Col sm={12} md={2} lg={4} className="footer_rrss">
                  <div>
                    <a
                      href="https://www.instagram.com/coolx.earth/"
                      target="_blank"
                      alt="Instagram icon"
                    >
                      <img src="/assets/social/instagram.svg" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/coolx/"
                      target="_blank"
                      alt="LinkedIn icon"
                    >
                      <img src="/assets/social/linkedIn.svg" />
                    </a>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="legal">
                  <p>© COPYRIGHT 2022 COOLX </p>
                  <p>|</p>
                  <p>TERMS AND CONDITIONS</p>
                  <p>|</p>
                  <p>PRIVACYPOLICY</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* FOOTER MOBILE */}
        <Row className="footer-mobile">
          <Col className="pw-0">
            <Row className="f-mobile-bar">
              <Col xs={3} className="p-0 text-center">
                <Button type="button" onClick={() => navigate(-1)}>
                  <img src="/assets/icons/undo.svg" alt="undo icon" />
                </Button>
              </Col>
              <Col xs={2} className="pl-0 pr-3 text-end">
                <a
                  href="https://www.instagram.com/coolx.earth/"
                  target="_blank"
                >
                  <img
                    src="/assets/social/instagram.svg"
                    alt="Instagram icon"
                  />
                </a>
              </Col>
              <Col xs={3} className="p-0 text-center">
                <a
                  href="https://www.linkedin.com/company/coolx/"
                  target="_blank"
                >
                  <img src="/assets/social/linkedIn.svg" alt="LinkedIn icon" />
                </a>
              </Col>
              <Col
                xs={4}
                className="p-0 text-center d-flex justify-content-center"
              >
                <Button className="w-100" onClick={handleCheck}>
                  {footerBtn}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <BuyModal onHide={() => setModalBuy(false)} show={modalBuy} />
    </>
  );
};
