import React, { useState } from "react";
import auth0 from "../services/auth0";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

//Login component
const Login = () => {
  return (
    <span onClick={auth0.login} className="nav-link port-navbar-link clickable">
      Login
    </span>
  );
};

//Logout component
const Logout = () => {
  return (
    <span
      onClick={auth0.logout}
      className="nav-link port-navbar-link clickable"
    >
      Logout
    </span>
  );
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={`port-navbar port-nav-base absolute ${props.className}`}
        color="transparent"
        dark
        expand="md"
      >
        <NavbarBrand className="port-navbar-brand fontStyle" href="/">
          Tanvir Mahin
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <Link href="/blogs">
                <a className="nav-link port-navbar-link"> Blogs</a>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/portfolio">
                <a className="nav-link port-navbar-link"> Portfolio</a>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/cv">
                <a className="nav-link port-navbar-link"> CV</a>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/about">
                <a className="nav-link port-navbar-link"> About</a>
              </Link>
            </NavItem>
            {props.isAuthenticated ? (
              <NavItem className="port-navbar-item">
                <Logout />
              </NavItem>
            ) : (
              <NavItem className="port-navbar-item">
                <Login />
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
