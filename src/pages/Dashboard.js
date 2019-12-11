import React from "react";
import { Row, Col, Card } from "react-bootstrap";


export default function Dashboard(props) {
  return (
    <>
      <div className="dashboard_header">
        <div className="container">
          <div className="row">
            <div>
              <img
                className="dashboard_avatar"
                src="https://www.pngtube.com/myfile/detail/14-145903_batman-icon-batman-avatar-icon.png"
              />
            </div>
            <div className="dashboard_userinfo">
              <h3>username</h3>
              <p>
                <i class="fas fa-envelope"></i>&nbsp;&nbsp;{props.currentUser}
              </p>
              <p>
                <i class="fas fa-phone"></i>&nbsp;&nbsp;telephone
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard_action">
        <div className="container">
          <Row className="dashboard_nav">
            <Col sm className="dashboard_nav_col">
              <Card style={{ width: "13rem", height: "5rem" }}>
                <a
                  data-toggle="tab"
                  href="#my_orders"
                  aria-expanded="true"
                  className="dashboard_h5"
                >
                  <img src="https://i.pinimg.com/originals/eb/ec/de/ebecde8e5e45a8be4c07624a6f2558e8.png" />
                  <br></br>My Orders
                </a>
              </Card>
            </Col>
            <Col sm className="dashboard_nav_col">
              <Card style={{ width: "13rem", height: "5rem" }}>
                <a
                  data-toggle="tab"
                  href="#my_orders"
                  aria-expanded="true"
                  className="dashboard_h5"
                >
                  <img src="data:image/png;base64,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" />
                  <br></br>Order History
                </a>
              </Card>
            </Col>
            <Col sm className="dashboard_nav_col">
              <Card style={{ width: "13rem", height: "5rem" }}>
                <a
                  data-toggle="tab"
                  href="#my_orders"
                  aria-expanded="true"
                  className="dashboard_h5"
                >
                  <img src="https://freepngimg.com/download/map/62873-map-computer-location-icon-icons-free-transparent-image-hd.png" />
                  <br></br>Edit Address
                </a>
              </Card>
            </Col>
            <Col sm className="dashboard_nav_col">
              <Card style={{ width: "13rem", height: "5rem" }}>
                <a
                  data-toggle="tab"
                  href="#my_orders"
                  aria-expanded="true"
                  className="dashboard_h5"
                >
                  <img src="data:image/png;base64,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" />
                  <br></br>Edit Profile
                </a>
              </Card>
            </Col>
          </Row>
          <div className="row">
            <div class="tab_content">

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
