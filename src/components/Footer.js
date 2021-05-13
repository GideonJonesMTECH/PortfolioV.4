import "../styles/Footer.scss";
import { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <footer className="navbar" id="footer">
        <div>
          <div className="brand">
            {" "}
            <Link to="/PortfolioV.4/">
              <img
                src={process.env.PUBLIC_URL + "/images/GideonLogoV4Gold.png"}
                alt="Gideon's Portfolio"
              ></img>
            </Link>
          </div>
        </div>
        <button onClick={this.toTop}>Back To Top</button>
      </footer>
    );
  }
}
