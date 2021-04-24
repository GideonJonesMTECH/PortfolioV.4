import { Component } from "react";
import "../styles/Feature.scss";

export class MainFeature extends Component {
  render() {
    return (
      <div className="Feature">
        <img src={this.props.imgsrc} alt={this.props.title} />
        <div className="overlay">
          <div className="text">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
