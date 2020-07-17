import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";



import PillsJustified from "./PillsJustified";

class ModalPage extends Component {
constructor(props) {
  super(props)

  this.state = this.props.leState

  this.state.modal =  false
}

  
majCallBackState = ()=>{
  //  retour des validations enfants pour MAJ State Parent
 }

  

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <MDBContainer>
        {/* BUTTON */}
        <MDBBtn color="primary" onClick={this.toggle}>
          + 
        </MDBBtn>
        {/* MODAL */}
        <MDBModal
          isOpen={this.state.modal}
          backdrop={false}
          toggle={this.toggle}
          centered
          className="modal-content"
        >
          <MDBModalHeader toggle={this.toggle}>
            {" "}
            Ajout d'un nouveau Widget
          </MDBModalHeader>
          <MDBModalBody>
          <PillsJustified leState={this.state} majCallBackSte={this.majCallBackState}/>

          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default ModalPage;
