import React, { Component } from "react";
import Mobiles from "./components/mobiles";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Mobiles />
      </main>
    );
  }
}

export default App;
