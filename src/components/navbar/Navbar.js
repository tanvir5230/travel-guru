import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoWhite from "../../resources/logo.svg";
import logoBlack from "../../resources/Logo.png";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

const SearchBox = ({ path }) => {
  if (path === "/signup" || path === "/login") {
    return <div></div>;
  } else {
    return (
      <div className="d-inline-block border px-2 rounded ml-md-auto search-box">
        <img src={require("../../resources/Icon/search.png")} alt="" />
        <input
          className="bg-transparent text-white"
          type="text"
          placeholder="Search Your Destination..."
        />
      </div>
    );
  }
};

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  console.log(path);
  let navStyle = {
    position: "static",
    textColor: "black",
    image: logoBlack,
  };
  if (path === "/login" || path === "/signup") {
    navStyle.position = "static";
    console.log("hello");
  } else {
    navStyle.textColor = "white";
    navStyle.image = logoWhite;
  }
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className="py-2 w-100"
      style={{ position: navStyle.position, zIndex: 1 }}
    >
      <Navbar
        className="container-lg bg-danger"
        color="transparent"
        light
        expand="md"
      >
        <Link to="/">
          <img src={navStyle.image} alt="logo" width="120" height="56" />
        </Link>
        <Link to="/Login" className="d-inline-block d-md-none ml-auto">
          <button className="btn btn-warning ">Login</button>
        </Link>
        <NavbarToggler className="ml-3 border-white" onClick={toggle} />
        <Collapse className="" isOpen={isOpen} navbar>
          <SearchBox path={path} />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                style={{ color: navStyle.textColor }}
                to="/news"
                activeClassName="active"
              >
                News
              </NavLink>
            </NavItem>
            <NavItem>
              <Link style={{ color: navStyle.textColor }} to="/destination">
                Destination
              </Link>
            </NavItem>
            <NavItem>
              <Link style={{ color: navStyle.textColor }} to="/blog">
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <Link style={{ color: navStyle.textColor }} to="/contact">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
        <Link
          to="/Login"
          className="d-none d-md-inline-block ml-lg-4 ml-auto mr-lg-3"
        >
          <button className="btn btn-warning ">Login</button>
        </Link>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
