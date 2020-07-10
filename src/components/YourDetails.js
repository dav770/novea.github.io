import React, { Component, Fragment } from "react";
import { LinkedInPopUp } from "react-linkedin-login-oauth2";
import LinkedinSign from "./LinkedinSign";
import GoogleLogin from "react-google-login";

class YourDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = this.props.leState
        // console.log("state passe a yourdetails",this.state);
    }

   

    actionConnect = (valConnect)=>{
      // console.log("retour call back",valConnect);
      this.setState((state, props) => {
        let dataConnect = Object.assign({},state.dataConnect) //create copy du state dataConnect
        dataConnect.status = valConnect //update status with new value
        return ({dataConnect}); //return new object
      })
      
      this.props.recieveDetails('YourDetails',true )
        
      }
    

  render() {
    
// console.log('yourdetails',this.state);


    return (
      <Fragment>
        <div className="row">
          <div className="col">
            <GoogleLogin  leState={this.state}></GoogleLogin>
          </div>
          <div className="col">
            <LinkedinSign leState={this.state} recieveLinkedin={this.actionConnect}></LinkedinSign>
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

export default YourDetails;
