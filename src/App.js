import React, { Component } from "react";
import "./bootstrap.min.css";
import "./App.css";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";


import TestComponent from "./components/TestComponent";


import Forgot from "./components/Forgot";
import Reset from "./components/Reset";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import dataConnect from "./dataConnect.json";
import SignIn from "./components/SignIn";
import RedirectValidate from "./components/RedirectValidate";

import * as mdb from 'mdb-ui-kit';

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
      passwordValide: false,
      warningPassword: "",
      warningIdentName: "",
      warningEmail: "",
      redirect: null,
      dataConnect: {},
    };

    this.state.dataConnect = dataConnect;

    // this.state.dataConnect = Object.keys(dataConnect).map(function (key) {
    //   return [String(key), dataConnect[key]];
    // });


    // dataConnect={this.state.dataConnect[0][1][0]}
  }

  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          
          <Route
            exact
            // path="/dav770/novea.github.io.git"
            path="/"
            component={() => (
              <SignUp
                leState={this.state}
               
              />
            )}
          />

          <Route
            path="/SignIn"
            component={() => (
              <SignIn
                leState={this.state}
               
              />
            )}
          />

          <Route
            path="/Forgot"
            component={() => (
              <Forgot
                leState={this.state}
               
              />
            )}
          />

          <Route
            path="/Reset"
            component={() => (
              <Reset
                leState={this.state}
               
              />
            )}
          />

          <Route
            path="/Dashboard"
            component={() => (
              <Dashboard
                leState={this.state}
             
              />
            )}
          />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
