import React, { Component, Fragment } from "react";
import { findAllByPlaceholderText } from "@testing-library/react";

class YourDetailsConfirmConnect extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.leState;
  }

  OtherIdentity = ()=>{
    this.props.recieveDetails('YourDetailsConfirmConnect',true )
  }


  render() {
    // console.log("details", this.state.dataConnect.avatar);

    // console.log("yourdetailsconnect", this.props.leState);
    return (
      <Fragment>
        <div className="row">
          <div className="col-3">
            Successfully connected as :
            <img
              className="Ajust-Image"
              src={process.env.PUBLIC_URL + "/avatar.png"}
              alt="avatar"
            ></img>
            <div>
              {this.state.dataConnect.name}
            </div>
          </div>
          <div className="col-9">
          <u><p onClick={this.OtherIdentity} style={{ alignText: "right", marginLeft: "20%" }} id="simul-a">
            Not You ?
          </p></u>
            
          </div>
        </div>
        <div id="space-form"></div>
        <div className="inf-note2">
          or signUp by <u><a href="#">Email</a></u>
        </div>
      </Fragment>
    );
  }
}

export default YourDetailsConfirmConnect;
