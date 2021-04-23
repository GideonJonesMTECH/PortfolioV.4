import { React, Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "./Main";
import { About } from "./About";
import { Contact } from "./Contact";
import { Header } from "./Header";
import { Error } from "./Error";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";

export class Root extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        <Header />
      </div>
    );
  }
}
