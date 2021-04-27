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
          <MainFeature
            title="Javascript"
            imgsrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkajabi-storefronts-production.global.ssl.fastly.net%2Fkajabi-storefronts-production%2Fthemes%2F3294329%2Fsettings_images%2FbyKdqp3Qn6mu4zGQcFTA_javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png&f=1&nofb=1"
            description="I've been coding with JS for about a year now. It's what I'm most comfortable with at the moment, and what I primarily code in. "
          />
          <MainFeature
            imgsrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.yourstory.com%2Fcs%2F1%2F4d86d9c0bc2011eab9669d7b50440f7b%2Fc-sharp-c-logo-02F17714BA-seeklogo-1593940315690.png%3Ffm%3Dpng%26auto%3Dformat&f=1&nofb=1"
            title="C#"
            description="I've been coding with C# for a few years. I passed the two classes at my high school with flying colors. I'm a but rusty now though."
          />
          <MainFeature
            title="C++"
            imgsrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisocpp.org%2Fassets%2Fimages%2Fcpp_logo.png&f=1&nofb=1"
            description="I have experience in C++. but I haven't worked with it in a while, so I could use a bit of a review."
          />
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
            <h5>Old Portfolios (Look how far I've come!)</h5>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/PortfolioV.0/"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio 1 (Pre MTECH)
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
            </li>
            <li>
              <a
                href="https://gideonjonesmtech.github.io/PortfolioV.2/"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
