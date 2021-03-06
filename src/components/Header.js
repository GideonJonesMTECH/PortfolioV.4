import "../styles/Header.scss";
import { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, far, fab);

export class Header extends Component {
  toggleLinks() {
    const navLinks = document.getElementsByClassName("Links")[0];
    navLinks.classList.toggle("active");
  }

  render() {
    return (
      <header className="navbar" id="header">
        <div className="brand-toggle">
          <div className="brand">
            {" "}
            <Link to="/PortfolioV.4/">
              <img
                src={process.env.PUBLIC_URL + "/images/GideonLogoV4Gold.png"}
                alt="Gideon's Portfolio"
              ></img>
            </Link>
          </div>
          <button onClick={this.toggleLinks} className="toggle-button">
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </button>
        </div>
        <div className="Links">
          <ul>
            <li>
              {" "}
              <Link to="/PortfolioV.4/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/PortfolioV.4/about">About</Link>
            </li>
            <li>
              {" "}
              <Link to="/PortfolioV.4/contact">Contact</Link>
            </li>
            <li>
              {" "}
              <Link to="/PortfolioV.4/portfolios">Portfolios</Link>
            </li>
            <li>
              <a
                href="https://github.com/GideonJonesMTECH"
                target="_blank"
                rel="noreferrer"
              >
                MTECH GitHub
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GideonJones999"
                target="_blank"
                rel="noreferrer"
              >
                Personal GitHub
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
