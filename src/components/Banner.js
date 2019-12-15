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
            src="https://i.pinimg.com/originals/06/35/cb/0635cbb9278bbe0caa67772da4b4dd6a.jpg"
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
        {/* <Carousel.Item>
          <img
            className="d-block w-100 banner-image"
            src=""
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
            src=""
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
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}
