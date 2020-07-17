import React, { Component } from 'react'

import { MDBFormInline, MDBInput } from 'mdbreact';


export class TestComponent extends Component {
    state = {
        radio: 2
      };
    
      onClick = nr => () => {
          console.log("click",nr);
        this.setState({
          radio: nr
        });
      };
    
      render() {
        return (
            <>
            <fieldset>
              <p>

Current employment:<br/>

<input type="radio" name="currentemployment" value="fulltime" /> Full-time<br/>

<input type="radio" name="currentemployment" value="parttime"/> Part-time<br/>

<input type="radio" name="currentemployment" value="notemployed"/> Not employed<br/>

</p>
            
          </fieldset>


</>

        );
      }
    }
export default TestComponent

