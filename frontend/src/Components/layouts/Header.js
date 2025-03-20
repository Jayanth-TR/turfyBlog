import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assest/images/turfy-logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../Css/Header.css";
import "animate.css";

const Header = () => {
  return (
    <Navbar  expand="md"  className=" nav-header p-3 sticky-top ">
      <Container>
        
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            style={{ width: "70px", height: "70px", backgroundColor:"white",borderRadius:"50%",padding:"50px" }}
            className=" img-fluid  p-2"
            alt="Turf Blog Logo"
          />
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler"/>

        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className=" nav-link text-white me-3  text-uppercase  ">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className=" nav-link text-white me-3  text-uppercase ">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="nav-link text-white me-3  text-uppercase ">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link text-white me-3  text-uppercase ">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/admin" className="nav-link text-white me-3  text-uppercase ">
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
