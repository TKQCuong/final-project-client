import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Container,
  Form,
  FormGroup,
  Button
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Dashboard(props) {
  let history = useHistory();
  const [tracking, setTracking] = useState(1);
  const [update, setUpdate] = useState({});

  const updateUser = async () => {
    const resp = await fetch(
      `${process.env.REACT_APP_URL_DATABASE}/dashboard`,
      {
        method: "PUT",
        headers: {
          Authorization: localStorage.getItem("token"),
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ update })
      }
    );
    const data = await resp.json();
    if (data.email) {
      props.setCurrentUser(data);
      alert("Profile updated successfully!");
      history.push("/");
      console.log(data,'edit')
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUser();
  };


  console.log({ update });
  const getTracking = props => {
    // eslint-disable-next-line default-case
    switch (tracking) {
      case 1:
        return (
          <div id="order_history" className="tab-pane fade active in">
            <div className="table-container table-responsive">
              
                  <table className="border table-bordered table table-responsive">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Pickup Day</th>
                      <th>Pickup Time</th>
                      <th>Status</th>
                      <th>Delivery Date</th>
                      <th>Delivery Time</th>
                      <th>Amount</th>
                      <th>Paid</th>
                      <th>Pay</th>
                    </tr>
                  </thead>
                  {props.order && props.order.map(({
                id,
                service_id,
                dateandtime,
              })=> {
                return (
                  <tbody>
                    <tr>
                      <td>#11501</td>
                      <td>{service_id}</td>
                      <td>{id}</td>
                      <td>
                        <div className="status cancelled">Cancel</div>
                      </td>
                      <td>{dateandtime}</td>
                      <td>10:00 AM TO 01:00 PM</td>
                      <td>₹ 0</td>
                      <td>₹ 0</td>
                      <td>Paid</td>
                    </tr>
                  </tbody>)})}
                </table>
            </div>
          </div>
        );
      case 2:
        return (
          <Form onSubmit={e => handleSubmit(e)} className="form-edit-profile">
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={props.currentUser && props.currentUser.email}
                  name='email'
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formHorizontalEmail"
              onChange={e => setUpdate({ ...update, username: e.target.value })}
            >
              <Form.Label column sm={2} style={{paddingLeft:'47px'}}>
                Username
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Username" name='username' />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formHorizontalEmail"
              onChange={e => setUpdate({ ...update, mobile: e.target.value })}
            >
              <Form.Label column sm={2} style={{paddingLeft:'27px'}}>
                Mobile
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Mobile" name='mobile' />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formHorizontalPassword"
              onChange={e => setUpdate({ ...update, password: e.target.value })}
            >
              <Form.Label column sm={2} style={{paddingLeft:'42px'}}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" name='password' />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Update</Button>
              </Col>
            </Form.Group>
          </Form>
        );
    }
  };
  return (
    <>
      <div className="dashboard_header">
        <div className="container">
          <div className="row">
            <div>
              <img
                className="dashboard_avatar"
                src="https://icon-library.net/images/avatar-icon/avatar-icon-5.jpg"
                alt=""
              />
            </div>
            <div className="dashboard_userinfo">
              <h3>{props.currentUser && props.currentUser.username}</h3>
              <p style={{ fontSize: "13px" }}>
                <i class="fas fa-envelope"></i>&nbsp;&nbsp;
                {props.currentUser && props.currentUser.email}
              </p>
              <p style={{ fontSize: "13px" }}>
                <i class="fas fa-phone"></i>&nbsp;&nbsp;
                {props.currentUser && props.currentUser.mobile}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Orders Tab */}
      <div className="dashboard_action">
        <div className="container">
          <Row className="dashboard_nav">
            <Col
              sm
              className="dashboard_nav_col my_order"
              onClick={() => setTracking(1)}
            >
              <Card
                style={{
                  width: "23rem",
                  height: "5rem",
                  backgroundColor: tracking === 1 ? "#eee" : "#fff"
                }}
              >
                <a
                  data-toggle="tab"
                  href="#"
                  aria-expanded="true"
                  className="dashboard_h5"
                >
                  <img
                    src="https://p7.hiclipart.com/preview/785/236/949/shopping-cart-icon-flame-shopping-cart-icon.jpg"
                    alt=""
                    id="icon_my_order"
                  />
                  <br></br>My Orders
                </a>
              </Card>
            </Col>
            <Col
              sm
              className="dashboard_nav_col edit_profile"
              onClick={() => setTracking(2)}
            >
              <Card
                style={{
                  width: "13rem",
                  height: "5rem",
                  backgroundColor: tracking === 2 ? "#eee" : "#fff"
                }}
              >
                <a
                  data-toggle="tab"
                  href="#"
                  aria-expanded="true"
                  className="dashboard_h5"
                >
                  <img
                    src="https://freepngimg.com/download/map/62873-map-computer-location-icon-icons-free-transparent-image-hd.png"
                    alt=""
                  />
                  <br></br>Edit Profile
                </a>
              </Card>
            </Col>
          </Row>
          <div className="row">
            <div class="tab_content"></div>
          </div>
        </div>
      </div>
      <div>{getTracking(props)}</div>
    </>
  );
}
