import React, { Component, Fragment, createRef } from "react";
import { Redirect, Link, NavLink } from "react-router-dom";

import LinkedinSign from "./LinkedinSign";
import GoogleLogin from "react-google-login";
import CaptCha from "./CaptCha";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.leState;
    // this.state.dataConnect = this.props.dataConnect;

    this.state.countTentative = 0;
    this.state.captChaActivate = false;
  }

  btnConnect = null;

  refPassword = createRef(null);
  refEmail = createRef(null);

  handleBlurEmail = (e) => {
    let lastAtPos = e.target.value.lastIndexOf("@");
    let lastDotPos = e.target.value.lastIndexOf(".");

    if (lastAtPos <= 0 || lastDotPos <= 0) {
      e.target.classList.add("error-field");
      this.setState({
        emailValide: false,
        warningEmail: "Email format not valid",
      });
    } else {
      e.target.classList.remove("error-field");
      this.setState({ emailValide: true, warningEmail: "" }, () => {
        this.validateSaisie();
      });
    }
  };

  handleBlurPassword = (e) => {
    if (e.target.value.length < 6) {
      e.target.classList.add("error-field");
      this.setState({
        passwordValide: false,
        warningPassword: "At least 6 chars",
      });
    } else {
      e.target.classList.remove("error-field");
      this.setState({ passwordValide: true, warningPassword: "" }, () => {
        this.validateSaisie();
      });
    }
  };

  validateSaisie = () => {
    if (this.state.emailValide && this.state.passwordValide) {
      this.setState((state, props) => {
        return { validate: true }; //return new object
      });
    }
  };

  connectMyAccount = () => {
    if (this.state.countTentative < 3) {
      console.log("count", this.state.countTentative);
      if (
        this.refPassword.current.value === this.state.dataConnect.password &&
        this.refEmail.current.value === this.state.dataConnect.email
      ) {
        // traitement connexion
        if (this.state.validate) {
          const redirect = setTimeout(() => {
            this.setState({ redirect: "/Dashboard" });
          }, 5000);
        }
      } else {
        this.refEmail.current.value = "";
        this.refPassword.current.value = "";
        this.refEmail.current.focus();
        this.setState({ countTentative: this.state.countTentative + 1 });
      }
    } else {
      // doit passer par validation captcha
      this.refEmail.current.value = "";
      this.refPassword.current.value = "";
      this.refEmail.current.focus();
      this.setState({ countTentative: 0, validate: false });
    }
  };

  captChaValide(resp) {
    // si retour ok reactive page pour identification
    if (resp) {
      this.state.captChaActivate && this.setState({ captChaActivate: false });
    }
  }

  // retour des identifications linkedin ou google
  actionConnect = (valConnect) => {
    this.setState((state, props) => {
      let dataConnect = Object.assign({}, state.dataConnect); //create copy du state dataConnect
      dataConnect.status = valConnect; //update status with new value
      return { dataConnect: dataConnect }; //return new object
    });
  };

  render() {
    this.state.validate && !this.state.captChaActivate
      ? (this.btnConnect = (
          <button
            type="button"
            className="btn btn-outline-primary form-control"
            style={{ width: "200px", marginTop: "50px" }}
            onClick={() => this.connectMyAccount()}
          >
            Connect
          </button>
        ))
      : (this.btnConnect = (
          <button
            type="button"
            className="btn btn-outline-primary form-control"
            style={{ width: "200px", marginTop: "50px" }}
            disabled
            // onClick={()=>createMyAccount(data)}
          >
            Connect
          </button>
        ));
    return (
      <Fragment>
        {this.state.redirect === "/Dashboard" && (
          <Redirect to={this.state.redirect} />
        )}
        <div className="place-center">
          <div className="col-md-6">
            <div className="col-top-center">
              <NavLink to="/" className="">
                don't have account ?
              </NavLink>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-top-center">
              <NavLink to="/Forgot" className="">
                Forgot your details ?
              </NavLink>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <img
            className="Ajust-Image"
            src={process.env.PUBLIC_URL + "/avatar.png"}
            alt=""
          ></img>
        </div>

        <div className="place-center">
          <div className="" style={{ display: "block", marginTop: "50px" }}>
            <label id="Mylabel">Email</label>

            <input
              ref={this.refEmail}
              name="emailCompagny"
              type="email"
              className="form-control"
              placeholder="Email"
              onBlur={this.handleBlurEmail}
              style={{ width: "300px" }}
            />
            {this.state.warningEmail !== "" && (
              <b style={{ color: "red" }}>{this.state.warningEmail}</b>
            )}
          </div>
        </div>
        <div className="place-center">
          <div className="" style={{ display: "block", marginTop: "50px" }}>
            <label id="Mylabel">Password</label>
            <input
              ref={this.refPassword}
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              onBlur={this.handleBlurPassword}
              style={{ width: "300px" }}
            />
            {this.state.warningPassword !== "" && (
              <b style={{ color: "red" }}>{this.state.warningPassword}</b>
            )}
          </div>
        </div>
        <div
          className="place-center"
          style={{ paddingRight: "170px", paddingTop: "50px" }}
        >
          <label>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              //   onClick={(e) => ActivateBtnAccount(e)}
            />
            Remerber Me
          </label>
        </div>
        <div className="place-center">{this.btnConnect}</div>
        <div className="place-center">
          {this.state.countTentative > 0 && (
            <b style={{ color: "red" }}>
              Connexion error {3 - this.state.countTentative} trials remaining
            </b>
          )}
        </div>
        <div className="place-center">
          {this.state.countTentative > 3 && (
            <CaptCha response={this.captChaValide}></CaptCha>
          )}
        </div>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col place-center">
            <GoogleLogin
              leState={this.state}
              recieveLinkedin={this.actionConnect}
            ></GoogleLogin>
          </div>
          <div className="col place-center">
            <LinkedinSign
              leState={this.state}
              recieveLinkedin={this.actionConnect}
            ></LinkedinSign>
          </div>
        </div>
        <div id="space-form"></div>
      </Fragment>
    );
  }
}

export default SignIn;
