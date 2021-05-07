import "../styles/About.scss";
import { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, far, fab);

export class About extends Component {
  render() {
    let randomImg = Math.floor(Math.random() * 9 + 1);
    let usingImg = require(`../images/Abt${randomImg}.jpeg`).default;
    return (
      <div className="aboutTot">
        <h1>About Gideon</h1>
        <div className="aboutContent">
          <div className="photo">
            <img
              src={usingImg}
              alt="Gideon Senior"
              className="GideonSeniorPhoto"
            />
            <p>
              These pictures were taken by my friend Brynna! Find her on
              instagram!{" "}
              <a
                href="https://www.instagram.com/brynnaphotography/"
                rel="noreferrer"
                target="_blank"
              >
                brynnaphotography
              </a>
            </p>
          </div>
          <div className="text">
            <p>
              <FontAwesomeIcon icon={["fas", "code"]} />
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
              <FontAwesomeIcon icon={["fas", "pencil-alt"]} />
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
              since then, but that was the first real opportunity to work hard
              on just one project.
            </p>
            <p>
              <FontAwesomeIcon icon={["fab", "d-and-d"]} />
              As I said earlier, I love <i>Dungeons and Dragons!</i> It's such a
              fun chance to hang out with my friends, create worlds and stories,
              and be part of an epic adventure! I've been playing for the fast
              few years, and I've loved every second of it.
            </p>
            <p>
              <FontAwesomeIcon icon={["fas", "tools"]} />I have actually
              achieved my Eagle Scout with the{" "}
              <a
                href="https://www.scouting.org/"
                target="_blank"
                rel="noreferrer"
              >
                Boy Scouts of America
              </a>
              ! I achieved this on July 20, 2017. It was a lot of hard work, but
              in the end it was worth it. For my project, I made 2 LEGO tables
              for a nearby elementary school, so kids with special needs could
              play with LEGOs. It was a really cool experience to give those to
              the kids, everyone seemed so thrilled to have them.
            </p>
            <p>
              <FontAwesomeIcon icon={["fas", "store"]} />
              I'm currently working as an <i>
                Online Grocery Pickup Associate
              </i>{" "}
              at{" "}
              <a
                href="https://www.walmart.com/"
                target="_blank"
                rel="noreferrer"
              >
                Walmart
              </a>
              . Me and my team will do several different jobs, with each leading
              into the next. We often deal with high-stress situations, and
              perform Customer Service at the same time. While I'm on the clock,
              I'm hard working, friendly, and I make sure things get done.
              Working at Walmart doesn't sound like much, I'll admit. However,
              it's been a great opportunity to be around people that I'm usually
              not around, and it's also been a good opportunity to make money,
              even though I'm a teenager. If you'd like to talk to my manager,
              contact me, and I can get you in touch!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
