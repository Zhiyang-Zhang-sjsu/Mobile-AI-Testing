import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Mobiles from "./components/mobiles";
import NavBar from "./components/navBar";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, faBeer, faCoffee, faWineGlassAlt, faStroopwafel, faAppleAlt, faCookie } from '@fortawesome/free-solid-svg-icons'
library.add(
  fab,
  fas,
  faBeer,
  faCoffee,
  faWineGlassAlt,
  faStroopwafel,
  faAppleAlt,
  faCookie
)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/mobiles" component={Mobiles}></Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
