import { React, Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Contact.scss";

library.add(fas, far, fab);

export class Contact extends Component {
  library;
  render() {
    return (
      <div>
        <h2>Contact Me!</h2>
        <div className="contactContent">
          <div className="Socials">
            <div className="Developer">
              <ul>
                <li>
                  <a href="mailto: gideon.w.jones@gmail.com">
                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                    gideon.w.jones@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/GideonJonesMTECH"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                    MTECH GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/GideonJones999"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                    Personal GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gideon-jones-9173081b2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="Fun">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/gideonjones2003/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100016624651889"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="tel:+18019232495" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={["fas", "phone-square"]} />
                    (801)923-2495
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
