import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";

import { MyContext } from "./MyContext";
import "../App.css";

import Footer from "./Footer";
import SideLeft from "./SideLeft";

import YourDetails from "./YourDetails";
import YourDetailsConfirmConnect from "./YourDetailsConfirmConnect";
import YourDetailsOtherConnect from "./YourDetailsOtherConnect";

import YourCompagny from "./YourCompagny";
import RedirectValidate from "./RedirectValidate";

/*
 *pour les tests je passe depuis le composant YourDetails et LinkedinSign le param true pour simuler
 *identification via le bouton Linkedin
 *une cliquer il y a timer de 8sec
 */

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.leState;
    // this.state.dataConnect = this.props.dataConnect;
    // console.log('4566',this.props.dataConnect[0][1][0])
  }

  componentDidMount(prevProps, prevState, snapshot) {
    // pour prochaine connexion AJAX
  }

  componentDidUpdate(prevProps, prevState) {
    
    if (this.state.validate) {

      const redirect = setTimeout(() => {
        this.setState({ redirect: "/SignIn" });
      }, 5000);
    }
  }

  callBackValidate = (statusAccount) => {
    this.setState((state, props) => {
      return { validate: statusAccount }; 
      // apres le setState il va render et passer par componentDidUpdate qui remet les valeurs par defaut excepter dataConnect
    });
  };


  handleBlur = (e) => {
    let urlVerif1 = false;
    let urlVerif2 = false;

    if (e.target.type === "url") {
      const regexp = new RegExp(
        "^((http|https)://){1}(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|/|=|?)?]+)+$"
      );
      if (regexp.test(e.target.value)) {
        urlVerif1 = true;
      } else {
        const regexp = new RegExp(
          "^((http|https)://)?(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|/|=|?)?]+)+$"
        );
        if (regexp.test(e.target.value)) {
          urlVerif2 = true;
        }
      }

      if (urlVerif1 || urlVerif2) {
        e.target.classList.add("error-field");
        this.setState({
          urlValide: true,
          warningUrl: "",
        });
      } else {
        e.target.classList.add("error-field");
        this.setState({
          urlValide: false,
          warningUrl: "Url format not valid",
        });
      }
    }

    if (e.target.type === "email") {
      let lastAtPos = e.target.value.lastIndexOf("@");
      let lastDotPos = e.target.value.lastIndexOf(".");

      if (lastAtPos <= 0 || lastDotPos <= 0) {
        e.target.classList.add("error-field");
        this.setState({
          emailValide: false,
          warningEmail: "Email format not valid",
        });
        return;
      } else {
        e.target.classList.remove("error-field");
        this.setState({
          emailValide: true,
          warningEmail: "",
        });
        return;
      }
    }

    if (e.target.type === "text" && e.target.value.length < 3) {
      e.target.classList.add("error-field");
      e.target.name === "nameCompagny"
        ? this.setState({ nameValide: false, warningName: "At least 3 chars" })
        : this.setState({
            identNameValide: false,
            warningIdentName: "At least 3 chars",
          });
    } else {
      e.target.classList.remove("error-field");
      e.target.name === "nameCompagny"
        ? this.setState({ nameValide: true, warningName: "" })
        : this.setState({ identNameValide: true, warningIdentName: "" });
    }
  };

  actionConnect = (locate, valConnect) => {
    if (locate === "YourDetails") {
      this.setState((state, props) => {
        let dataConnect = Object.assign({}, state.dataConnect); //create copy du state dataConnect
        dataConnect.status = valConnect; //update status with new value
        return { dataConnect : dataConnect}; //return new object
      });
    }
    if (locate === "YourDetailsConfirmConnect") {
      this.setState((state, props) => {
        return { notYou: true };
      });
    }
  };

  render() {
    const warningLength = "";

    return (
      <MyContext.Provider value={this.state}>
        {this.state.redirect === "/SignIn" && <Redirect to={this.state.redirect} />}

        {!this.state.validate && (
          <Fragment>
            <div className="row justifyCenter">
              <div className="col-md-4">
                <SideLeft page="signUp"></SideLeft>
              </div>

              <div className="col-md-8">
                <form onSubmit={this.submitForm}>
                  <fieldset>
                    <legend id="Mylegend">Your Compagny detail's:</legend>
                    <YourCompagny
                      leState={this.state}
                      handleBlur={this.handleBlur}
                    ></YourCompagny>
                  </fieldset>
                </form>

                <div id="space-form"></div>
                <form>
                  <fieldset>
                    <legend id="Mylegend">Your details:</legend>
                    {!this.state.dataConnect.status && !this.state.notYou && (
                      <YourDetails
                        leState={this.state}
                        recieveDetails={this.actionConnect}
                      />
                    )}
                    {this.state.dataConnect.status && !this.state.notYou && (
                      <YourDetailsConfirmConnect
                        leState={this.state}
                        recieveDetails={this.actionConnect}
                      />
                    )}
                    {this.state.notYou && (
                      <YourDetailsOtherConnect
                        leState={this.state}
                        handleBlur={this.handleBlur}
                      />
                    )}
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="form-check">
              <Footer
                leState={this.state}
                validateAccount={this.callBackValidate}
              ></Footer>
            </div>
          </Fragment>
        )}
        {this.state.validate && <RedirectValidate></RedirectValidate>}
      </MyContext.Provider>
    );
  }
}

export default SignUp;
