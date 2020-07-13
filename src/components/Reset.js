import React, { Component, Fragment, createRef } from "react";
import { Redirect, Link, NavLink } from "react-router-dom";

class Reset extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.leState;
  }

  btnConnect = null;
  displayTop = null;
  displayIdent = null;
  displaySuccess = null;
  success = true;
  hiddden = true;

  refPassword = createRef(null);
  refAdv1 = createRef(null);
  refAdv2 = createRef(null);
  refAdv3 = createRef(null);
  refAdv0 = createRef(null);

  hideHiddenPwd = () => {
    if (this.hidden) {
      this.refPassword.current.type = "text";
      this.hidden = false;
    } else {
      this.refPassword.current.type = "password";
      this.hidden = true;
    }
  };

  handleChangePassword = (e) => {
    if (e.target.value.length < 6) {
      this.refAdv1.current.id = "adv-red";
      this.refAdv1.current.innerHTML = "- At least 6 characters long ";
    } else {
      this.refAdv1.current.id = "adv-green";
      this.refAdv1.current.innerHTML = "V - At least 6 characters long ";
    }
    let number = false;
    let upperCase = false;

    for (let i = 0; i < 10; i++) {
      if (e.target.value.lastIndexOf(i) > 0 || number === true) {
        this.refAdv2.current.id = "adv-green";
        this.refAdv2.current.innerHTML =
          "V - Composided by letters and numbers ";
        number = true;
        i = 10;
      } else {
        this.refAdv2.current.id = "adv-red";
        this.refAdv2.current.innerHTML = "- Composided by letters and numbers ";
        number = false;
      }
    }

    for (let i = 0; i < e.target.value.length; i++) {
      if (
        e.target.value[i] === e.target.value[i].toUpperCase() ||
        upperCase === true
      ) {
        this.refAdv3.current.id = "adv-green";
        this.refAdv3.current.innerHTML = "V - At least one capital letter ";
        upperCase = true;
        i = 10;
      } else {
        this.refAdv3.current.id = "adv-red";
        this.refAdv3.current.innerHTML = "- At least one capital letter";
        upperCase = false;
      }
    }

    if (
      this.refAdv1.current.id === "adv-green" &&
      this.refAdv2.current.id === "adv-green" &&
      this.refAdv3.current.id === "adv-green"
    ) {
      this.refAdv0.current.id = "adv-green";
      this.validateSaisie(true);
    } else {
      this.refAdv0.current.id = "adv-red";
      this.validateSaisie(false);
    }
  };

  validateSaisie = (val) => {
    this.setState((state, props) => {
      return { validate: val }; //return new object
    });
  };

  validateReset = () => {
    // envoie via API vers serveur
    // doit recevoir lien pour entrer sur page reset
  };

  render() {
    this.displayTop = (
      <div>
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

    this.state.validate
      ? (this.btnConnect = (
          <button
            type="button"
            className="btn btn-outline-primary form-control"
            style={{ width: "200px", marginTop: "50px" }}
            onClick={() => this.validateReset()}
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

    this.displaySuccess = (
      <>
        <div className="place-center">
          <div className="" style={{ display: "block", marginTop: "50px" }}>
            <label id="adv-red" ref={this.refAdv0}>
              Password must be
            </label>
            <div>
              <p>
                <em id="adv-red" ref={this.refAdv1}>
                  {" "}
                  - At least 6 characters long
                </em>
              </p>
            </div>
            <div>
              <p>
                <em id="adv-red" ref={this.refAdv2}>
                  {" "}
                  - Composided by letters and numbers
                </em>
              </p>
            </div>
            <div>
              <p>
                <em id="adv-red" ref={this.refAdv3}>
                  {" "}
                  - At least one capital letter
                </em>
              </p>
            </div>
          </div>
        </div>
      </>
    );

    this.displayIdent = (
      <div>
        <div className="place-center">
          <div className="" style={{ display: "block", marginTop: "50px" }}>
            <label id="Mylabel">Please set your new password</label>

            <div className="input-group" id="show_hide_password">
              <input
                ref={this.refPassword}
                name="password"
                type="password"
                className="form-control p-rel hidden"
                placeholder="new password"
                onChange={(e) => this.handleChangePassword(e)}
                style={{ width: "300px" }}
              />

              <div className="input-group-addon">
                <a>
                  <i
                    className="fa fa-eye-slash p-abs"
                    onClick={this.hideHiddenPwd}
                  ></i>
                </a>
              </div>
            </div>
            {this.state.warningPassword !== "" && (
              <b style={{ color: "red" }}>{this.state.warningPassword}</b>
            )}
          </div>
        </div>
        <div className="place-center">{this.btnConnect}</div>
      </div>
    );

    return (
      <Fragment>
        {this.displayTop}
        {this.displayIdent}
        {this.success ? this.displaySuccess : this.displayIdent}
      </Fragment>
    );
  }
}

export default Reset;
