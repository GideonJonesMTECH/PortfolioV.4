import "../styles/Error.scss";
import { Component } from "react";
import { Link } from "react-router-dom";

export class Error extends Component {
  render() {
    return (
      <div className="ErrorDiv">
        <h1>Error</h1>
        <h3>
          Hey! It looks like you managed to direct to an incorrect page! Sorry
          about that! Click the button below to go back home, or the links in
          the NavBars.
        </h3>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }
}
