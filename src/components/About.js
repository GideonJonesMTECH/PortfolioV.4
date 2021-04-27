import "../styles/About.scss";
import { Component } from "react";

export class About extends Component {
  render() {
    const aboutImg = require("../images/GideonAboutPhoto.jpeg").default;
    const aboutImg2 = require("../images/GideonAboutPhoto2.jpeg").default;
    let usingImg;
    switch (Math.floor(Math.random() * 2 + 1)) {
      case 1:
        usingImg = aboutImg;
        break;

      default:
        usingImg = aboutImg2;
        break;
    }
    return (
      <div>
        <h1>About</h1>
        <div className="Content">
          <div>
            <img
              src={usingImg}
              alt="Gideon Senior"
              className="GideonSeniorPhoto"
            />
          </div>
          <div>
            <p>
              Hey! I'm Gideon Jones. I just turned 18, and I'm almost graduated
              from{" "}
              <a
                href="https://lhs.alpineschools.org/"
                target="_blank"
                rel="noreferrer"
              >
                Lehi High School
              </a>
              . I'm so excited to get more into the coding world! I've been
              around computers for as long as I can remember, and learning how
              to code on them has been a delight. I started coding around the
              age of 10, using{" "}
              <a
                href="https://scratch.mit.edu/users/2000224/"
                target="_blank"
                rel="noreferrer"
              >
                Scratch
              </a>{" "}
              (Look only if you dare!). Around this same time, my dad introduced
              me to{" "}
              <a href="https://unity.com" target="_blank" rel="noreferrer">
                Unity
              </a>
              , and all the possibilities that came with that. I've been coding
              off and on with Unity since. I'm currently working on a 3D
              Original <i>Zelda</i> Clone, and a Metriodvania, which have been
              some really fun projects.
            </p>
            <p>
              I've always been a huge nerd. I love reading and writing, video
              games and DnD. I love the Marvel movies, tolerate a few of the DC
              movies, and I'm slowly making my way through the{" "}
              <i>Wheel of Time</i> books. Speaking of writing, I've participated
              in{" "}
              <a href="https://nanowrimo.org" target="_blank" rel="noreferrer">
                NaNoWriMo
              </a>{" "}
              (National Novel Writing Month) twice, and I finished it the second
              time! The goal of NaNoWriMo is to write 50,000 words in a month,
              or about <strong>1,667 words</strong> a day. They were awesome
              experiences, but they were needless to say... difficult.
              Unfortunately, these stories didn't turn out the <i>best</i>, per
              se, but I did learn a lot about writing, and how much time I could
              spend on just one project. I've spent hours on coding projects
              since then, but that was the first real oportunity to work hard on
              just one project.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
