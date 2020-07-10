import React, { Component } from 'react';
class GoogleLogin extends Component {
   
    responseGoogle = (response) => {
        console.log(response);
      }

  render() {
    
    return (
      
      <GoogleLogin
        clientId="" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      /> 

    

    );
  }
}

export default GoogleLogin;