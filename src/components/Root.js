import { React, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Main } from "./Main";
import { About } from "./About";
import { Contact } from "./Contact";
import { Header } from "./Header";
// import { Error } from "./Error";
import { Footer } from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";
import { OldPortfolios } from "./OldPortfolios";

export class Root extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch className="routerOutlet">
          <Route exact path="/PortfolioV.4/" component={Main} />
          <Route path="/PortfolioV.4/about" component={About} />
          <Route path="/PortfolioV.4/contact" component={Contact} />
          <Route path="/PortfolioV.4/portfolios" component={OldPortfolios} />
          <Redirect from="**" to="/PortfolioV.4/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
