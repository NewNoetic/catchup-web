import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Beta from "./Beta";
import Privacy from "./Privacy";
import ReactGA from 'react-ga';
import Config from "./config.json";

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends Component {
  render() {

    ReactGA.initialize(Config.google_analytics);

    return (
      <div>
        <AppNavbar />
        <div className="my-5"></div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/beta" component={Beta} />
          <Route exact path="/privacy" component={Privacy} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
