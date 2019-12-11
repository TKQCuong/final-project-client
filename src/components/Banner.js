import React from "react";
import { Carousel } from "react-bootstrap";

export default function Banner(props) {

  function gotoServiceCheck() {
    props.history.push("/servicecheck");
  }

  return (
    <div className="banner" id="home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-image"
            src="https://assets.alignable.com/services/pictures/medium/746215/1528935697_blob"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Laundry and Dry Cleaning Services</h3>
            <p>
              Schedule a pickup from our website. From 8 AM to 10 PM, 7 days a
              week
            </p>
            <button onClick={() => gotoServiceCheck()}>Schedule a pickup</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-image"
            src="http://westpointcleaners.com/wp-content/uploads/2017/08/wash_fold_laundry.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Laundry and Dry Cleaning Services</h3>
            <p>
              Schedule a pickup from our website. From 8 AM to 10 PM, 7 days a
              week
            </p>
            <button onClick={() => gotoServiceCheck()}>Schedule a pickup</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-image"
            src="https://www.thespruce.com/thmb/nSZe48ZLhpPSmbS3F_wo_4af3oY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1143030873-7aeff84833c7450a839b92cfb92bdd54.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Laundry and Dry Cleaning Services</h3>
            <p>
              Schedule a pickup from our website. From 8 AM to 10 PM, 7 days a
              week
            </p>
            <button onClick={() => gotoServiceCheck()}>Schedule a pickup</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
