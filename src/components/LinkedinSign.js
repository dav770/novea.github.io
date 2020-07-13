import React, { Component } from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";




class App extends Component {
  state = {
    code: "77ojw7m0uyp573",
    errorMessage: "",
    dataConnect: false,
  };

  handleSuccess = (data) => {
    // console.log("data", data);
    this.setState({
      // code: data.code,
      code: '',
      errorMessage: "",
      dataConnect: true,
    });
  };

  handleFailure = (error) => {
    this.setState({
      code: "",
      errorMessage: error.errorMessage,
      status: false,
    });
  };

  componentDidMount() {
  
    // pour le test, normalement appele par la function handleSuccess
    const testTime = setTimeout(()=>{
      this.props.recieveLinkedin(true)
    },8000) 
    
    }


  render() {
    const { status,  ...rest } = this.props.leState.dataConnect;
    
    return (
      <div className="App">



        <LinkedIn
        
          clientId="77ojw7m0uyp573"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="http://inkedin.com/company/david770"
          // redirectUri="https://www.linkedin.com/developers/apps/verification/59861a10-a097-4de8-9f58-a8ab49a499f3"
        >
          {/* <img src={require('./assets/linkedin.png')} alt="Log in with Linked In" style={{ maxWidth: '180px' }} /> */}
        </LinkedIn>
        
      </div>
    );
  }
}

export default App;
