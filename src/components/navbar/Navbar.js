import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoWhite from "../../resources/logo.svg";
import logoBlack from "../../resources/Logo.png";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Store } from "../../App";

const SearchBox = ({ darkPath }) => {
  if (darkPath) {
    return (
      <div className="d-inline-block border p-2 rounded ml-md-auto search-box">
        <img src={require("../../resources/Icon/search.png")} alt="" />
        <input
          className="bg-transparent text-white"
          type="text"
          placeholder="Search Your Destination..."
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};
const Profile = ({ loggedInUser, handleSignOut }) => {
  return (
    <>
      {loggedInUser && (
        <div className="d-flex ml-auto">
          <button className="btn btn-outline-success btn-sm border-0">
            <span className="d-none d-md-inline">
              {loggedInUser.displayName
                ? loggedInUser.displayName
                : loggedInUser.email.slice(0, 6)}
            </span>
            <img
              className="rounded-circle d-md-none"
              src={loggedInUser.photoURL}
              alt="profile"
              width="30"
              height="30"
            />
          </button>
          <button
            className="btn btn-outline-danger border-0"
            onClick={handleSignOut}
          >
            <span className="d-none d-lg-inline">sign out</span>
            <span className="d-lg-none">
              <i className="fa fa-sign-out"></i>
            </span>
          </button>
        </div>
      )}
    </>
  );
};
const LoginBtn = () => {
  return (
    <Link to="/Login">
      <button className="btn btn-warning">Login</button>
    </Link>
  );
};

const MyNavbar = () => {
  const { loggedInUser, handleSignOut } = useContext(Store);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  let navStyle = {
    position: "static",
    textColor: "black",
    image: logoBlack,
  };
  const darkPath = path === "/" || /\/*\/\d/.test(path); //need white things
  if (darkPath) {
    navStyle.textColor = "white";
    navStyle.image = logoWhite;
  } else {
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
        dark={darkPath ? true : false}
        light={darkPath ? false : true}
        expand="md"
      >
        <Link to="/">
          <img src={navStyle.image} alt="logo" width="120" height="56" />
        </Link>

        {loggedInUser ? (
          ""
        ) : (
          <div className="ml-auto d-md-none">
            <LoginBtn />
          </div>
        )}
        {loggedInUser && (
          <div className="ml-auto d-md-none">
            <Profile
              handleSignOut={handleSignOut}
              loggedInUser={loggedInUser}
            />
          </div>
        )}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <SearchBox darkPath={darkPath} />
          <Nav className="ml-md-auto align-items-center" navbar>
            <NavItem className="w-100 text-center py-2 py-md-0">
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
            <NavItem className="w-100 text-center py-2 py-md-0">
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
        {loggedInUser && (
          <div className="d-none d-md-block">
            <Profile
              handleSignOut={handleSignOut}
              loggedInUser={loggedInUser}
            />
          </div>
        )}
        {loggedInUser ? (
          ""
        ) : (
          <div className="d-none d-md-block">
            <LoginBtn />
          </div>
        )}
      </Navbar>
    </div>
  );
};

export default MyNavbar;
