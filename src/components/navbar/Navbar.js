import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../resources/logo.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className="py-2 position-absolute top-0 w-100"
      style={{ zIndex: "10" }}
    >
      <Navbar className="container" color="transparent" light expand="md">
        <NavbarBrand href="/">
          <Link to="/">
            <img src={logo} alt="logo" width="120" height="56" />
          </Link>
        </NavbarBrand>
        <Link to="/Login" className="d-inline-block d-md-none ml-auto">
          <button className="btn btn-warning ">Login</button>
        </Link>
        <NavbarToggler className="ml-3 border-white" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/news" activeClassName="active">
                News
              </NavLink>
            </NavItem>
            <NavItem>
              <Link to="/destination">Destination</Link>
            </NavItem>
            <NavItem>
              <Link to="/blog">Blog</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
        <Link
          to="/Login"
          className="d-none d-md-inline-block ml-md-4 ml-auto mr-3"
        >
          <button className="btn btn-warning ">Login</button>
        </Link>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
