import "../styles/About.scss";
import { Component } from "react";

export class About extends Component {
  render() {
    const aboutImg = require("../images/GideonAboutPhoto.jpeg").default;
    return (
      <div>
        <h1>About</h1>
        <img src={aboutImg} alt="Gideon Senior" />
      </div>
    );
  }
}
