import React, { Component, Fragment } from "react";

class YourDetailsConfirmConnect extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.leState;
  }




  returnHandleBlur= (e)=>{
    // console.log('hgfhf',e.target);
        this.props.handleBlur(e)
    }
    



  render() {
    // console.log("details", this.state.dataConnect.avatar);

    // console.log("yourdetailsconnect", this.props.leState);
    return (
      <Fragment>
        <div className="row">
          <div className="col">
            <label id="Mylabel">Name</label>
            <input
              name="nameOther"
              type="text"
              className="form-control"
              placeholder="First name"
              onBlur={this.returnHandleBlur}
            />
            <b style={{ color: "red" }}>{this.props.leState.warningIdentName}</b>
          </div>
          <div className="col">
            <label id="Mylabel">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Compagny Email"
              onBlur={this.returnHandleBlur}
            />

            <b style={{ color: "red" }}>{this.props.leState.warningEmail}</b>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default YourDetailsConfirmConnect;
