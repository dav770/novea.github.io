import React, { Component } from "react";
import "./bootstrap.min.css";
import "./App.css";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import dataConnect from "./dataConnect.json";
import SignIn from "./components/SignIn";


// composant principal avec State partage
// definition des routes pour la navigation

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validate: false,
      googleId: null,
      agreeterms: false,
      urlValide: false,
      nameValide: false,
      warningName: "",
      warningUrl: "",
      notYou: false,
      emailValide: false,
      identNameValide: false,
      warningIdentName: "",
      warningEmail: "",
      dataConnect: [],
    };

    this.state.dataConnect = Object.keys(dataConnect).map(function (key) {
      return [String(key), dataConnect[key]];
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/dav770/novea.github.io.git"
            component={() => (
              <SignUp
                leState={this.state}
                dataConnect={this.state.dataConnect[0][1][0]}
              />
            )}
          />

          <Route path="/SignIn" component={SignIn} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
