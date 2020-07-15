import React, { Component, createRef } from "react";

import Modal from "react-modal";
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
import * as mdb from "mdb-ui-kit";
class PillsJustified extends Component {
  state = {
    items: {
      default: "1",
    },
    getDom: "",
    param: {
      objetParm: {
        posObject: 0,
        valObject: "Commercial",
      },
      PeriodParm: {
        posPeriod: 0,
        valPeriod: "",
      },
    },
  };

  refDomF = createRef(null);
  refDomA = createRef(null);
  refDomS = createRef(null);

  myDate = new Date();

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
                <div style={{ marginTop: "35px" }}>
                  1. objet

                  <div className="row">
                  
                    <div
                      className="col-md-12"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        borderStyle: "solid",
                        borderColor: "#2c3e50",
                      }}
                    >
                      <div className="form-check-inline">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="ca"
                            id="ca"
                          />
                          <label className="form-check-label" htmlFor="ca2">
                            CA
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="dep"
                            id="dep"
                          />
                          <label className="form-check-label" htmlFor="dep">
                            depenses
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="ent"
                            id="ent"
                          />
                          <label className="form-check-label" htmlFor="ent">
                            Entrees
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="ben"
                            id="ben"
                          />
                          <label className="form-check-label" htmlFor="ben">
                            Benefices
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="bal"
                            id="bal"
                          />
                          <label className="form-check-label" htmlFor="bal">
                            Balances
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="perso"
                            id="perso"
                            
                          />
                          <label className="form-check-label" htmlFor="perso">
                            Personalise
                          </label>
                        </div>
                        <div className="form-group">
      <label htmlFor="exampleSelect1">Example select</label>
      <select className="form-control" id="exampleSelect1" onChange={this.choixListeObj}>
        <option>Commercial</option>
        <option>...</option>
        <option>!!!!</option>
        
      </select>
    </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "35px" }}>
                  2. Period
                  <div className="row">
                    <div
                      className="col-md-12"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        borderStyle: "solid",
                        borderColor: "#2c3e50",
                      }}
                    >
                      <div className="form-check-inline">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="mc"
                            id="mc"
                          />
                          <label className="form-check-label" htmlFor="mc">
                            Mois en cours
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="mprev"
                            id="mprev"
                          />
                          <label className="form-check-label" htmlFor="mprev">
                            Mois previsionnel
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="mperso"
                            id="mperso"
                          />
                          <label className="form-check-label" htmlFor="mperso">
                            Personalise
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-md-12"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        borderStyle: "solid",
                        borderColor: "#2c3e50",
                      }}
                    >
                      <div className="form-check-inline">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="anc"
                            id="anc"
                            
                          />
                          <label className="form-check-label" htmlFor="anc">
                            Annee en cours
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="anprev"
                            id="anprev"
                          />
                          <label className="form-check-label" htmlFor="anprev">
                            Annee previsonnelle
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="live"
                            id="live"
                          />
                          <label className="form-check-label" htmlFor="live">
                            LIVE
                          </label>
                        </div>
                      </div>
                    </div>
                    .
                  </div>
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
