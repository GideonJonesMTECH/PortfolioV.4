import "../styles/Header.scss";
import { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand> Gideon's Portfolio</Navbar.Brand>
      </Navbar>
    );
  }
}
