import "../styles/HeadFoot.scss";
import { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    const logov4 = require("../images/Logo.png").default;
    return (
      <Navbar className="nav">
        <Navbar.Brand className="brand">
          {" "}
          <Link to="/">
            <img src={logov4} alt="Gideon's Portfolio"></img>
          </Link>
        </Navbar.Brand>
        <Nav className="Links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://github.com/GideonJonesMTECH"
            target="_blank"
            rel="noreferrer"
          >
            MTECH GitHub
          </a>
          <a
            href="https://github.com/GideonJones999"
            target="_blank"
            rel="noreferrer"
          >
            Personal GitHub
          </a>
        </Nav>
      </Navbar>
    );
  }
}
