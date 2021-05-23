import { Component } from "react";
import "../styles/Portfolios.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class OldPortfolios extends Component {
  render() {
    return (
      <div>
        <h1>Portfolios</h1>
        <div class="Portfolio" id="1">
          <img
            alt="Portfolio1"
            src={process.env.PUBLIC_URL + `/images/portfolio1Screenshot.png`}
          />
          <div>
            <div class="links">
              <a
                href="https://gideonjonesmtech.github.io/PortfolioV.0/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Portfolio 1</h2>
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/PortfolioV.0"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
            <h5>Simple Portfolio, Before MTECH. Aug/15/2020</h5>
            <p>
              This was the first portfolio I'd ever made, and as you can
              probably tell, it wasn't very impressive. None of the links
              actually navigate to specific pages, and in fact the "About Us"
              link doesn't actually go anywhere. I learned a lot about my
              skills, and my limitations.
              <br></br>I made this right before going to MTECH, and my skills
              quickly grew.
            </p>
          </div>
        </div>
        <div class="Portfolio" id="2">
          <img
            alt="Portfolio2"
            src={process.env.PUBLIC_URL + `/images/portfolio2Screenshot.png`}
          />
          <div>
            <div class="links">
              <a
                href="https://gideonjonesmtech.github.io/PortfolioV.1/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Portfolio 2</h2>
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/PortfolioV.1"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
            <h5>HTML/CSS Portfolio. Sep/9/2020</h5>
            <p>
              This is my first portfolio after starting at MTECH! I obviously
              had more experience with CSS, and I had more pages that actually
              went places! So that was very exciting. It still doesn't look the
              best, but I was very proud of this when I first made it.
            </p>
          </div>
        </div>
        <div class="Portfolio" id="3">
          <img
            alt="Portfolio3"
            src={process.env.PUBLIC_URL + `/images/portfolio3Screenshot.png`}
          />
          <div>
            <div class="links">
              <a
                href="https://gideonjonesmtech.github.io/PortfolioV.2/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Portfolio 3</h2>
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/PortfolioV.2"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
            <h5>HTML/SASS Portfolio. Sep/15/2020</h5>
            <p>
              This was quickly made after the previous portfolio after I learned
              about SCSS, which I quickly grew to love. There is some more
              impressive styling, and I think that the portfolio flows together
              better.
            </p>
          </div>
        </div>
        <div class="Portfolio" id="4">
          <img
            alt="Portfolio4"
            src={process.env.PUBLIC_URL + `/images/portfolio4Screenshot.png`}
          />
          <div>
            <div class="links">
              <a
                href="https://gideonjonesmtech.github.io/PortfolioV.4/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Portfolio 4</h2>
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/PortfolioV.4"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
            <h5>Current Portfolio. Apr/23/2021 - Current</h5>
            <p>
              This is my current portfolio, and the one I'm most proud of. I
              made it with React, and I think that it's the best looking and
              functioning portfolio. I had a more concrete color scheme, I made
              a better logo for myself, it's reactive for mobile use, and the
              features have a border rather than the larger colored area.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
