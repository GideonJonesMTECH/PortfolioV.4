import "../styles/HeadFoot.scss";
import { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          {" "}
          <Link to="/">Gideon's Portfolio</Link>
        </Navbar.Brand>
        <Nav class="Links">
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
