import "../styles/Main.scss";
import "../styles/Feature.scss";
import { Component } from "react";
import { MainFeature } from "./MainFeature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Main extends Component {
  render() {
    return (
      <div className="MainContent">
        <div className="intro">
          <h1>Welcome to my Portfolio!</h1>
          <p>
            <strong>Hey!</strong> My name is Gideon Jones! I'm 18 years old, and
            I've had a few years of experience coding. I'm graduating{" "}
            <a
              href="https://lhs.alpineschools.org/"
              target="_blank"
              rel="noreferrer"
            >
              High School
            </a>{" "}
            in only a month (crazy how life flies by), and I'm also graduating
            from{" "}
            <a href="https://mtec.edu/" target="_blank" rel="noreferrer">
              MTECH
            </a>{" "}
            in May, but I'll talk about that a bit more later. I'm an up and
            coming Web Developer with some experience in normal HTML and CSS,
            React (which I used to make this Portfolio), and Angular! I'm
            currently based in Lehi, Utah.
          </p>{" "}
          <h3>Check out some of what I've done below!</h3>
        </div>
        <div className="features">
          <MainFeature
            imgsrc="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"
            title="HTML"
            description="I am proficient in HTML, however I don't use it very often. Instead, I use other Frameworks like React or Angular."
          />

          <MainFeature
            imgsrc="https://miro.medium.com/max/640/1*_PQNapTfelo0DMPZ6fGsoQ.png"
            title="SASS(SCSS)"
            description="I love working with Sass (scss), and I styled this portfolio with it!"
          />

          <MainFeature
            imgsrc="https://ugross.gallerycdn.vsassets.io/extensions/ugross/vscode-react-snippets/1.3.0/1519481679046/Microsoft.VisualStudio.Services.Icons.Default"
            title="React"
            description="I worked with React in my MTECH class, but recently I've been working with Angular. That's why I made my portfolio with React!"
          />

          <MainFeature
            imgsrc="https://cdn-images-1.medium.com/max/1600/1*J_-vtvcqV1-v14WqkPWhiQ.png"
            title="Angular"
            description="I have a lot of recent experience with Angular, which I've done in my MTECH class."
          />

          <MainFeature
            imgsrc="https://yt3.ggpht.com/-kLxukT5wJ9U/AAAAAAAAAAI/AAAAAAAAAAA/TWoI-d9ak2Y/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
            title="AWS"
            description="I have experience with AWS! I went through the AWS Academy Program, and I learned a lot!"
          />

          <MainFeature
            imgsrc="https://cdn.iconscout.com/icon/free/png-256/firebase-1-282796.png"
            title="Firebase"
            description="I have experience using Firebase in my applications, including logging people in and displaying their data."
          />
          <MainFeature
            title="Javascript"
            imgsrc="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3294329/settings_images/byKdqp3Qn6mu4zGQcFTA_javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
            description="I've been coding with JS for about a year now. It's what I'm most comfortable with at the moment, and what I primarily code in. "
          />
          <MainFeature
            imgsrc="https://teknosejahtera.com/wp-content/uploads/2021/01/C-Logo-2021.png"
            title="C#"
            description="I've been coding with C# for a few years. I passed the two classes at my high school with flying colors!"
          />
          <MainFeature
            title="C++"
            imgsrc="https://isocpp.org/assets/images/cpp_logo.png"
            description="I have experience in C++, I learned about it in the same classes as C#."
          />
        </div>

        <div className="Projects">
          <ul>
            <li>
              <a
                href="https://pokemonmatching.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Group Angular Pokémon Matching Game
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/GroupAngularPokemon"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/React-Store/"
                target="_blank"
                rel="noreferrer"
              >
                React E-Commerce Store
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/React-Store"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/Golf-Scorecard/"
                target="_blank"
                rel="noreferrer"
              >
                JS Golf Scorecard
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/Golf-Scorecard"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/Angular-Golf-Scorecard/"
                target="_blank"
                rel="noreferrer"
              >
                Angular Golf Scorecard
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/Angular-Golf-Scorecard"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/To-Do-App/"
                target="_blank"
                rel="noreferrer"
              >
                To-Do App
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/To-Do-App"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/MiHealthWebsite/"
                target="_blank"
                rel="noreferrer"
              >
                HTML/CSS MiHealth
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/MiHealthWebsite"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/RYParisWebsite/"
                target="_blank"
                rel="noreferrer"
              >
                HTML/CSS RYParis
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/RYParisWebsite"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <h5>Old Portfolios (Look how far I've come!)</h5>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/PortfolioV.0/"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio 1 (Pre MTECH)
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/PortfolioV.0"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/PortfolioV.1/"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio 2
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/PortfolioV.1/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/PortfolioV.2/"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio 3
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/PortfolioV.2/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/PortfolioV.4/"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio 4 (This One!)
              </a>
              <a
                href="https://github.com/GideonJonesMTECH/PortfolioV.4/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
