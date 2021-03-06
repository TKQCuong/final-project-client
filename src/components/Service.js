import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Alert } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";

export default function Service() {
  let history = useHistory()
  return (
    <div className="services-section" id="services_scroll">
      <div className="service_background"></div>
      <div className="service_overlay"></div>
      <div className="service_content" id="service_content">
        <h1>our laundry services</h1>
        <Container>
          <Row>
            <Col sm className="wow bounceInUp" data-wow-duration="2s" data-wow-delay="5s">
              <div style={{ width: "21rem" }} className="single-card-service">
                <h3>Wash & Fold</h3>
                <p>
                  From your favorite jeans to your baby’s blankie, our
                  experienced laundry specialists will care for your clothes as
                  if they were their own.
                </p>
              </div>
            </Col>
            <span className="line"></span>
            <Col sm>
              <div style={{ width: "21rem" }} className="single-card-service">
                <h3>Dry Cleaning</h3>
                <p>
                  Dry cleaning requires a slightly longer turnaround than our
                  next day door-to-door laundry service. Consequently, dry
                  cleaning will be returned 48 to 72 hours after pickup.
                </p>
              </div>
            </Col>
            <span className="line"></span>
            <Col sm>
              <div style={{ width: "21rem" }} className="single-card-service">
                <h3>Commercial Laundry</h3>
                <p>
                  Interested in learning more about Wash Fairies’s competitive
                  commercial laundry pricing? Email hello@laundry.com or
                  call (098) 432 65 69.
                </p>
              </div>
            </Col>
          </Row>
          <button className="service_button" onClick={() => history.push("/services")}>Learn more about services</button>
        </Container>
      </div>
    </div>
  );
}
