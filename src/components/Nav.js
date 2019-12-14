import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default function Navibar(props) {
  let history = useHistory()

  function gotoLogin() {
    props.history.push("/login");
  }

  function gotoHome() {
    props.history.push("/");
  }

  function gotoServiceCheck() {
    props.history.push("/servicecheck");
  }

  function gotoDashboard() {
    props.history.push("/dashboard")
  }

  function gotoService() {
    props.history.push("/services")
  }

  // Dropdown menu
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <>
      {/* <div className="companyemail">
            <p>022 48777779 &nbsp;&nbsp;</p>
            <p>info@washable.com</p>
        </div> */}
      <Navbar collapseOnSelect expand="lg" variant="dark" id="navbar">
        <Navbar.Brand
          href="#home"
          className="big-logo"
          id="logo"
          onClick={() => gotoHome()}
        >
          𝐥𝐚𝐮𝐧𝐝𝐫𝐲𝐨𝐯𝐞𝐫
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="left-nav" id="left-nav">
            <Nav.Link href="#howitworks_scroll" className="left-nav-a">
              HOW IT WORKS
            </Nav.Link>
            <Nav.Link href="#" className="left-nav-a" onClick={() => gotoService()}>
              SERVICES
            </Nav.Link>

            {props.currentUser
              ? (
                <>
                  <Nav.Link
                    href=""
                    className="left-nav-register"
                    onClick={() => gotoServiceCheck()}
                  >
                    START SERVICE
                  </Nav.Link>
                  <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
                    <DropdownToggle caret className="Nav_dropdown"><i class="far fa-user-circle" style={{fontSize:"22px"}}></i>&nbsp;&nbsp;&nbsp;&nbsp; Hi., {props.currentUser.username}&nbsp;&nbsp;&nbsp;&nbsp;</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={()=>gotoDashboard()}><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Dashboard</DropdownItem>
                      <DropdownItem
                      onClick={() => { if (window.confirm('Do you really want to Sign Out?')) history.push("/logout") } }
                      ><i class="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Log Out</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  </>
                )
              : (<>
                  <Nav.Link
                    eventKey={2}
                    href=""
                    className="left-nav-a"
                    onClick={() => gotoLogin()}
                  >
                    LOGIN
                  </Nav.Link>
                  <Nav.Link
                  href=""
                  className="left-nav-register"
                  onClick={() => gotoServiceCheck()}
                >
                  START SERVICE
                </Nav.Link>
                </>
                )
                }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
