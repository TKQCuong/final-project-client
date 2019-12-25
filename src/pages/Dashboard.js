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
  const [cancel, setCancel] = useState({});
  const [data, setData] = useState([]);

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
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUser();
  };

  // RENDER ORDER IN DASHBOARD
  const getOrder = async () => {
    const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/getData`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await resp.json();
    console.log(data, "123");
    setData(data);
  };

  useEffect(() => {
    getOrder();
  }, []);

  const filterCancel = async () => {
    const resp = await fetch(
      `${process.env.REACT_APP_URL_DATABASE}/getCancel`,
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );
    const data = await resp.json();
    setData(data);
  };

  const filterSchedule = async () => {
    const resp = await fetch(
      `${process.env.REACT_APP_URL_DATABASE}/getSchedule`,
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );
    const data = await resp.json();
    setData(data);
  };

  const cancelOrder = async id => {
    const resp = await fetch(
      `${process.env.REACT_APP_URL_DATABASE}/cancelOrder/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: localStorage.getItem("token"),
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ cancel: "Cancel" })
      }
    );
    if (resp.ok) getOrder();
  };

  // if (!props.currentUser) history.push("/login");

  const getTracking = props => {
    // eslint-disable-next-line default-case
    switch (tracking) {
      case 1:
        return (
          <div className="current_order">
            {data.order &&
              data.order.map(el => {
                return (
                  <>
                    {el.status !== "Cancel" ? (
                      <>
                        <h1>
                          <b>Order #&nbsp; {el.id}</b> -{" "}
                          <span style={{ color: "green" }}>{el.status}</span>
                        </h1>
                        <Container>
                          <Row>
                            <Col>Schedule Date:</Col>
                            <Col>
                              <b>{el.dateandtime}</b>
                            </Col>
                          </Row>
                          <Row>
                            <Col>Schedule Time:</Col>
                            <Col>
                              <b>10:00 AM TO 01:00 PM</b>
                            </Col>
                          </Row>
                          <Row>
                            <Col>Address:</Col>
                            {data.location &&
                              data.location.map(ell => {
                                if (ell.id === el.location_id) {
                                  return (
                                    <Col>
                                      <b>{ell.location_pickup}</b>
                                    </Col>
                                  );
                                }
                              })}
                          </Row>
                        </Container>
                        <button
                          className="cancel_button"
                          name="cancel"
                          onClick={
                            () => cancelOrder(el.id)
                            // deleteOrder(el.id)
                          }
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
          </div>
        );
      case 2:
        return (
          <div id="order_history" className="tab-pane fade active in">
            <div className="table-container table-responsive">
              <div class="dropdown_filter">
                <button class="dropbtn">Filter <i class="fas fa-long-arrow-alt-down"></i></button>
                <div class="dropdown-content">
                  <a href="#" onClick={() => filterSchedule()}>Scheduled</a>
                  <a href="#" onClick={() => filterCancel()}>Cancel</a>
                  <a href="#" onClick={() => getOrder()}>All</a>
                </div>
              </div>
              <table className="border table-bordered table table-responsive">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Pickup Date</th>
                    <th>Status</th>
                    <th>Pickup Time</th>
                    <th>Pickup Address</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                  </tr>
                </thead>
                {data.order &&
                  data.order.map(el => {
                    return (
                      <tbody>
                        <tr>
                          <td># {el.id}</td>
                          <td>{el.dateandtime}</td>
                          {el.status === "Cancel" ? (
                            <td>
                              <div className="cancel-status">{el.status}</div>
                            </td>
                          ) : (
                            <td>
                              <div className="schedule-status">{el.status}</div>
                            </td>
                          )}
                          <td>10:00 AM TO 01:00 PM</td>
                          {data.location &&
                            data.location.map(ell => {
                              if (ell.id === el.location_id) {
                                return <td>{ell.location_pickup}</td>;
                              }
                            })}
                          <td>₹ 0</td>
                          <td>Cash only</td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        );
      case 3:
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
                  name="email"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formHorizontalEmail"
              onChange={e => setUpdate({ ...update, username: e.target.value })}
            >
              <Form.Label column sm={2} style={{ paddingLeft: "47px" }}>
                Username
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formHorizontalEmail"
              onChange={e => setUpdate({ ...update, mobile: e.target.value })}
            >
              <Form.Label column sm={2} style={{ paddingLeft: "27px" }}>
                Mobile
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Mobile" name="mobile" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formHorizontalPassword"
              onChange={e => setUpdate({ ...update, password: e.target.value })}
            >
              <Form.Label column sm={2} style={{ paddingLeft: "42px" }}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                />
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
              className="dashboard_nav_col my_order"
              onClick={() => setTracking(2)}
            >
              <Card
                style={{
                  width: "23rem",
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
                    src="https://www.odoo.com/apps/icon_image?module_id=57331"
                    alt="Order History"
                    id="icon_order_history"
                  />
                  <br></br>Order History
                </a>
              </Card>
            </Col>
            <Col
              sm
              className="dashboard_nav_col edit_profile"
              onClick={() => setTracking(3)}
            >
              <Card
                style={{
                  width: "13rem",
                  height: "5rem",
                  backgroundColor: tracking === 3 ? "#eee" : "#fff"
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
