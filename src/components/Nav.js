import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory, Link } from 'react-router-dom';


export default function Navibar(props) {
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar").style.paddingBottom = "10px";
    } else {
      document.getElementById("navbar").style.paddingBottom = "35px";
    }
  }

  function gotoLogin () {
    props.history.push('/login')
  }

  return (
    <>
      {/* <div className="companyemail">
            <p>022 48777779 &nbsp;&nbsp;</p>
            <p>info@washable.com</p>
        </div> */}
      <Navbar collapseOnSelect expand="lg" variant="dark" id="navbar">
        <Navbar.Brand href="#home" className="big-logo" id="logo">
          𝓵𝓪𝓾𝓷𝓭𝓻𝔂⍥𝓿𝓮𝓻
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav className="left-nav" id="left-nav">
            <Nav.Link href="#deets" className="left-nav-a">
              HOW IT WORKS
            </Nav.Link>
            <Nav.Link href="#deets" className="left-nav-a">
              SERVICES
            </Nav.Link>
            <Nav.Link href="#deets" className="left-nav-a">
              PRICING
            </Nav.Link>
            <Nav.Link eventKey={2} href="" className="left-nav-a" onClick={()=>gotoLogin()}>LOGIN
            </Nav.Link>
            <Nav.Link href="#deets" className="left-nav-register">
              START SERVICE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
