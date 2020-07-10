import React, { Component, Fragment } from "react";
class YourCompagny extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.leState;
  }

  returnHandleBlur = (e) => {
    // console.log('hgfhf',e.target);
    this.props.handleBlur(e);
  };

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col">
            <label id="Mylabel">Name</label>
            <input
              name="nameCompagny"
              type="text"
              className="form-control"
              placeholder="First name"
              onBlur={this.returnHandleBlur}
            />
            <b style={{ color: "red" }}>{this.props.leState.warningName}</b>
          </div>
          <div className="col">
            <label id="Mylabel">Website</label>
            <input
              type="url"
              className="form-control"
              placeholder="Compagny Website"
              onBlur={this.returnHandleBlur}
            />

            <b style={{ color: "red" }}>{this.props.leState.warningUrl}</b>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default YourCompagny;
