import React, { Component, createRef } from "react";
import MenuSideLeft from "./MenuSideLeft";
import TestComponent from "./TestComponent";



class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeMenu: "",
      chartbar: '<i class="fas fa-chart-bar"></i>',
      money: '<i className="far fa-money-bill-alt"></i>',
      usersecret: '<i class="fas fa-user-secret"></i>',
      user: '<i class="fas fa-user-alt"></i>',
      bus: '<i class="fas fa-bus"></i>',
      ustensil: '<i class="fas fa-utensils"></i>',
      plane: '<i class="fas fa-plane"></i>',
      calendar: '<i class="far fa-calendar-alt"></i>',
      random: '<i class="fas fa-random"></i>',
      folder: '<i class="fas fa-folder-open"></i>',
      flag: '<i class="fas fa-flag"></i>',
      tacho: <i className="fas fa-tachometer-alt"></i>,
    };
  }

  barIcon = null;
//   element = <FontAwesomeIcon icon={faCoffee} />


  displayIconBar = (currentIcon) => {
   this.barIcon = currentIcon
    // this.setState({ changeMenu: pos });
  };

  render() {
    this.state.changeMenu == 1 && (this.barIcon = this.state.tacho);

    return (
      <>
        <div className="row">
          <div className="col-xs-6 col-md-1">
            <div></div>

            <MenuSideLeft displayIconBar={this.displayIconBar} />
          </div>
          <div className="col-xs-6 col-md-11">
            <div className="side-top ">
              <div className="col-xs-5 col-md-3">Icone </div>
              <div className="col-xs-5 col-md-8" style={{ textAlign: "right" }}>
                menu
              </div>
            </div>
 {this.barIcon}
            <div className="row widget">
            <div className="col-xs-5 col-md-4" style={{ height:"150px"}}>
              <div className="empty" >
              <div className="drag" draggable="true">+</div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">+</div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">+</div>
              </div>
            </div>
            
            </div>
            <div className="row widget">
            <div className="col-xs-5 col-md-4" style={{ height:"150px"}}>
              <div className="empty" >
              <div className="drag" draggable="true">+</div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">+</div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">+</div>
              </div>
            </div>
            
            </div>
            <div className="row widget">
            <div className="col-xs-5 col-md-4" style={{ height:"150px"}}>
              <div className="empty" >
              <div className="drag" draggable="true">+</div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">+</div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">+</div>
              </div>
            </div>
            
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
