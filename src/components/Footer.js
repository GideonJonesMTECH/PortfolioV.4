import "../styles/Footer.scss";
import { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    const logov4 = require("../images/GideonLogoV3.3.png").default;
    return (
      <footer className="navbar" id="footer">
        <div>
          <div className="brand">
            {" "}
            <Link to="/">
              <img src={logov4} alt="Gideon's Portfolio"></img>
            </Link>
          </div>
        </div>
        <button onClick={this.toTop}>Back To Top</button>
      </footer>
    );
  }
}
