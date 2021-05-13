import { Component } from "react";
import "../styles/Feature.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ProjectsFeature extends Component {
  render() {
    return (
      <div className="Feature">
        <img
          className="img"
          alt={this.props.title}
          src={
            process.env.PUBLIC_URL +
            `/images/${this.props.imgsrc}Screenshot.png`
          }
        />
        <div className="overlay">
          <div className="text">
            <a href={this.props.appLink} target="_blank" rel="noreferrer">
              <h2>{this.props.title}</h2>
            </a>
            <a href={this.props.gitLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
