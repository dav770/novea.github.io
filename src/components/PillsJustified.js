import React, { Component, createRef } from "react";

import Modal from "react-modal";
import { MDBFormInline, MDBInput } from 'mdbreact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";


import TestComponent from "./TestComponent";
import ObjetRadio from "./ObjetRadio";
import PeriodeRadio from "./PeriodeRadio";
// import * as mdb from "mdb-ui-kit";


class PillsJustified extends Component {
constructor(props) {
  super(props)

  this.state = this.props.leState
  this.state.items = {
    default: "1",
  }

  this.state.getdom = ''
  this.state.radio = 0
  this.state.param = {
    objetParm: {
      posObject: 0,
      valObject: "Commercial",
    },
    PeriodParm: {
      posPeriod: 0,
      valPeriod: "",
    },
  }
}
}



//   state = {
//     items: {
//       default: "1",
//     },
//     getDom: "",
// radio: 0,


//     param: {
//       objetParm: {
//         posObject: 0,
//         valObject: "Commercial",
//       },
//       PeriodParm: {
//         posPeriod: 0,
//         valPeriod: "",
//       },
//     },
//   };

  refDomF = createRef(null);
  refDomA = createRef(null);
  refDomS = createRef(null);

  myDate = new Date();


  majCallBackSte = ()=>{

  }

  getDom = (e, dom) => {
    this.refDomF.current.classList.remove("fix-select-dom");
    this.refDomA.current.classList.remove("fix-select-dom");
    this.refDomS.current.classList.remove("fix-select-dom");

    dom === "Finances" && this.refDomF.current.classList.add("fix-select-dom");
    dom === "Activites" && this.refDomA.current.classList.add("fix-select-dom");
    dom === "Statistiques" &&
      this.refDomS.current.classList.add("fix-select-dom");

    this.setState({ getDom: dom });
    // this.setState({getDom: e.target.lastElementChild.lastElementChild.innerText});
  };


  choixListeObj=(e)=>{
    console.log('liste obj', e.target.value);
  }

  onClickBtnRadio = nr => () => {
    console.log("nr",nr);
    this.setState({
      radio: nr
    });
  };

  togglePills = (type, tab) => (e) => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items,
      });
    }
  };


  majCallBackState = ()=>{
    //  retour des validations enfants pour MAJ State Parent
   }

   
  render() {
    return (
      <MDBContainer className="nav-justified">
        <MDBRow>
          <MDBCol md="12">
            <MDBNav className="mt-5 nav-pills">
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.items["default"] === "1"}
                  onClick={this.togglePills("default", "1")}
                >
                  Choix du Domaine
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.items["default"] === "2"}
                  onClick={this.togglePills("default", "2")}
                >
                  Configuration des Parametres
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.items["default"] === "3"}
                  onClick={this.togglePills("default", "3")}
                >
                  Validation
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.items["default"]}>
              <MDBTabPane tabId="1">
                <div className="row">
                  <div
                    ref={this.refDomF}
                    className="col-md-4 select-dom"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      borderStyle: "solid",
                      borderColor: "#2c3e50",
                    }}
                    onClick={(e) => this.getDom(e, "Finances")}
                  >
                    <div>
                      <i className="fas fa-money-bill-alt fa-9x"></i>
                      <div
                        style={{
                          paddingLeft: "50px",
                          fontStyle: "normal",
                          fontSize: "large",
                          fontWeight: "bold",
                        }}
                      >
                        Finances
                      </div>
                    </div>
                  </div>
                  <div
                    ref={this.refDomA}
                    className="col-md-4 select-dom"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      borderStyle: "solid",
                      borderColor: "#2c3e50",
                    }}
                    onClick={(e) => this.getDom(e, "Activites")}
                  >
                    <div>
                      <i className="fas fa-compress-alt fa-9x"></i>
                      <div
                        style={{
                          paddingLeft: "50px",
                          fontStyle: "normal",
                          fontSize: "large",
                          fontWeight: "bold",
                        }}
                      >
                        Activites
                      </div>
                    </div>
                  </div>
                  <div
                    ref={this.refDomS}
                    className="col-md-4 select-dom"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      borderStyle: "solid",
                      borderColor: "#2c3e50",
                    }}
                    onClick={(e) => this.getDom(e, "Statistiques")}
                  >
                    <div>
                      <i className="fas fa-chart-bar fa-9x"></i>
                      <div
                        style={{
                          paddingLeft: "50px",
                          fontStyle: "normal",
                          fontSize: "large",
                          fontWeight: "bold",
                        }}
                      >
                        Statistiques
                      </div>
                    </div>
                  </div>
                </div>
              </MDBTabPane>
              <MDBTabPane tabId="2">
                
                    <ObjetRadio leState={this.state} majCallBackSte={this.majCallBackState}/>
                  {/* </div>
                </div> */}
                <div style={{ marginTop: "35px" }}>
                  <PeriodeRadio leState={this.state} majCallBackSte={this.majCallBackState}/>
                </div>



              </MDBTabPane>
              <MDBTabPane tabId="3">
                <p>
                  Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem
                  excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum
                  nisi elit fugiat commodo sunt reprehenderit laborum veniam eu
                  veniam. Eiusmod minim exercitation fugiat irure ex labore
                  incididunt do fugiat commodo aliquip sit id deserunt
                  reprehenderit aliquip nostrud. Amet ex cupidatat excepteur
                  aute veniam incididunt mollit cupidatat esse irure officia
                  elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit
                  labore ipsum laboris ipsum commodo sunt tempor enim
                  incididunt. Commodo quis sunt dolore aliquip aute tempor irure
                  magna enim minim reprehenderit. Ullamco consectetur culpa
                  veniam sint cillum aliqua incididunt velit ullamco sunt
                  ullamco quis quis commodo voluptate. Mollit nulla nostrud
                  adipisicing aliqua cupidatat aliqua pariatur mollit voluptate
                  voluptate consequat non.
                </p>
              </MDBTabPane>
            </MDBTabContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default PillsJustified;
