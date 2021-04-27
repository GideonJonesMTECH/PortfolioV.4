import "../styles/Main.scss";
import "../styles/Feature.scss";
import { Component } from "react";
import { MainFeature } from "./MainFeature";

export class Main extends Component {
  render() {
    return (
      <div className="MainContent">
        <div className="intro">
          <h1>Main</h1>
          <h3>Welcome to my Portfolio!</h3>
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
            in only a month (crazy how life flies by), and I'm aslo graduating
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
            imgsrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2017%2F07%2FHTML5_badge.png&f=1&nofb=1"
            title="HTML"
            description="I am proficient in scssLink, however I don't use it very often. Instead, I use other Frameworks like React or Angular."
          />

          <MainFeature
            imgsrc="https://miro.medium.com/max/640/1*_PQNapTfelo0DMPZ6fGsoQ.png"
            title="SASS(SCSS)"
            description="I love working with Sass (scss), and I styled this portfolio with it!"
          />

          <MainFeature
            imgsrc="https://ugross.gallerycdn.vsassets.io/extensions/ugross/vscode-react-snippets/1.3.0/1519481679046/Microsoft.VisualStudio.Services.Icons.Default"
            title="React"
            description="I worked with React in my MTECH class, but I'm a bit rusty. That's why I made my portfolio with it!"
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
            imgsrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstartupalbacete.com%2Fimages%2Ffirebase-logo.png&f=1&nofb=1"
            title="Firebase"
            description="I have experience using Firebase in my applications, including logging people in and displaying their data."
          />
          {/* C#, JS, C++ */}
        </div>
        <div className="Projects">
          <ul>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/GroupAngularPokemon/"
                target="_blank"
                rel="noreferrer"
                className="disabled"
              >
                Angular Pokémon Matching Game (Under Construction)
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
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/Golf-Scorecard/"
                target="_blank"
                rel="noreferrer"
              >
                JS Golf Scorecard
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
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/To-Do-App/"
                target="_blank"
                rel="noreferrer"
              >
                To-Do App
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
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/RYParisWebsite/"
                target="_blank"
                rel="noreferrer"
              >
                HTML/CSS RYParis
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
