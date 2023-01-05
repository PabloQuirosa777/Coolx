import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./stripe.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
import { ResumenCompra } from "./ResumenCompra";
import { PagoSeguro } from "./PagoSeguro";


const stripePromise = loadStripe(
  "pk_test_51LnIA1J5n5ohBaXPnr6gxHm2Hu7UeuRDJgkrBYRyKTPtTpYPcSqXeR94KsiMCPjo4vFdlcPi5jllaVS5dAGrdoT6005G5Uk9aw"
);

const CheckoutForm = ({ buyProject, user }) => {
  const [exito, setExito] = useState(false);
  const [exito2, setExito2] = useState(false);
  const [loading, setLoading] = useState(false);


  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [newState, setNewState] = useState({ status: "1" });

  {
    exito &&
      axios
        .put(
          `http://localhost:4000/project/changeUser/${buyProject.project_id}/${user.user_id}`
        )
        .then((res) => {
          setExito2(true);
        })
        .catch((err) => {
          console.log(err);
        });
  }

  {
    exito2 &&
      axios
        .put(
          `http://localhost:4000/project/editStatusProject/${buyProject.project_id}`,
          newState
        )
        .then((res) => {
          navigate("/user");
        })
        .catch((err) => {
          console.log(err);
        });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let coste = parseFloat(buyProject.project_cost * 100);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    setLoading(true);

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post(
          "http://Localhost:4000/stripe/api/checkout",
          {
            id,
            amount: coste,
          }
        );

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
      setExito(true);
    }
  };

  return (
    <Container>
        <Row className="justify-content-center">
            <Col xs={11} sm={11} md={9} lg={7}>
            
            <form onSubmit={handleSubmit} className="card-body">

                <div className='title-card-info'>
                     <h3 className='text-center my-2'>Precio: {buyProject.project_cost}</h3>

                    <div>
                        <img src='/assets/icons/visa_card.svg'/>
                        <img src='/assets/icons/master_card.svg'/>
                        <img src='/assets/icons/american_card.svg'/>
                    </div>
                     
                </div>
               
                <div className="form-group">
                <CardElement className='form-control'/>
                </div>
               
                <h5 className='pt-4'>Nombre del proyecto: {buyProject.project_name}</h5>
                <h5 className='pt-2'>Localización del proyecto: {buyProject.location}</h5>
                <h5 className='pt-2'>Beneficio del proyecto: {buyProject.profit}</h5>
                <button className='buy-projectbutton-card my-2' disabled={!stripe}> 
                {loading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="sr-only"></span>
                  </div>
                ) : (
                  "Comprar"
                )}
              </button>
            </form>
               
            </Col>

            
            <Col md={3} className="cont-summary-payment">
                <Row>
                    <ResumenCompra />
                </Row>
                <Row>
                    <PagoSeguro />
                </Row>
            </Col>

        </Row>
    </Container>
  );
};


export const Stripe = ({ buyProject, user }) => {

  const [buyProjectTemporal, setBuyProjectTemporal] = useState();

  const {project_id} = useParams();

  useEffect(()=> {
      if(buyProject){
        setBuyProjectTemporal(buyProject)
      }
      else{
        axios
        .get(`http://localhost:4000/project/${project_id}`)

        .then((res)=> {
          setBuyProjectTemporal(res.data[0]);
          console.log(res.data);

        })
        .catch((err)=> {
          console.log(err);
        })
      }
  }, [])

  return (
    <div className="stripe-fondo">
       {buyProjectTemporal && <Elements stripe={stripePromise}>
          <h1 className="pt-5 pb-5">
            Nombre del proyecto: {buyProjectTemporal.project_name}
          </h1>
          <CheckoutForm buyProject={buyProjectTemporal} user={user}  />
        </Elements>} 
    </div>

  );

};
