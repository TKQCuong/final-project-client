/* eslint-disable default-case */
import React, { useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

export default function Service() {
  const [price, setPrice] = useState(1);

  function getPrice() {
    switch (price) {
      case 1:
        return <h1>Wash & Fold</h1>;
      case 2:
        return <h1>Wash & Iron</h1>;
      case 3:
        return <h1>Wash Iron & Special</h1>;
      case 4:
        return <h1>Dry Cleaning</h1>;
    }
  }

  return (
    <>
      <div className="small_banner_schedule">
        <h1>SERVICE DETAILS</h1>
      </div>
      <div className="service_type_price">
        <Container>
          <Row>
            <Col onClick={() => setPrice(1)}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col onClick={() => setPrice(2)}></Col>
            <Col onClick={() => setPrice(3)}></Col>
            <Col onClick={() => setPrice(4)}></Col>
          </Row>
        </Container>
      </div>
      <div>{getPrice()}</div>
    </>
  );
}
