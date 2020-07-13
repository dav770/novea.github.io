import React, { Component, Fragment, createRef } from "react";
import { Redirect, Link, NavLink } from "react-router-dom";

import CaptCha from "./CaptCha";

class Forgot extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.leState;
    // this.state.dataConnect = this.props.dataConnect;

    this.state.countTentative = 0;
    this.state.captChaActivate = false;
  }

  btnConnect = null;
  displayTop = null;
  displayIdent = null;
  displaySuccess = null;
  success = true;

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

  validateSaisie = () => {
    if (this.state.emailValide) {
      this.setState((state, props) => {
        return { validate: true }; //return new object
      });
    }
  };

  sendMyDetails = () => {
    // envoie via API vers serveur
    // doit recevoir lien pour entrer sur page reset

    if (this.state.emailValide) {
      this.success = true;
      this.setState({ emailValide: true, warningEmail: "" }, () => {
        // traitement API vers serveur
      });
    }
  };

  captChaValide(resp) {
    // si retour ok active btn send
    if (resp) {
      this.state.captChaActivate && this.setState({ captChaActivate: false });
    }
  }

  render() {
    this.state.validate && !this.state.captChaActivate
      ? (this.btnConnect = (
          <button
            type="button"
            className="btn btn-outline-primary form-control"
            style={{ width: "200px", marginTop: "50px" }}
            onClick={() => this.sendMyDetails()}
          >
            Send me my details
          </button>
        ))
      : (this.btnConnect = (
          <button
            type="button"
            className="btn btn-outline-primary form-control"
            style={{ width: "200px", marginTop: "50px" }}
            disabled
          >
            Send me my details
          </button>
        ));

    this.displayTop = (
      <div>
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
              <NavLink to="/SignIn" className="">
                I Remmenber
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
      </div>
    );

    this.displaySuccess = (
      <>
        <div className="place-center">
          <div className="col-md-6">
      
          <h3 >Success !</h3>
    
          <br/>
          <div >
            <p>An email has been sent to you to renew your password</p>
          </div>
          </div>
        </div>
      </>
    );

    this.displayIdent = (
      <div>
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
          <CaptCha response={this.captChaValide} />
        </div>
        <div className="place-center">{this.btnConnect}</div>
      </div>
    );

    return (
      <Fragment>
        {this.displayTop}
        {this.success ? this.displaySuccess : this.displayIdent}
      </Fragment>
    );
  }
}

export default Forgot;
