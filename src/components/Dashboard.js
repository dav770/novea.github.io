import React, { useState, useEffect } from "react";
import MenuSideLeft from "./MenuSideLeft";
import TestComponent from "./TestComponent";
import Modal from "react-modal";
import PillsJustified from "./PillsJustified";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function Dashboard(props) {
  const element = [
    <FontAwesomeIcon icon={["fas", "tachometer-alt"]} />,
    <FontAwesomeIcon icon={["fas", "flag"]} />,
    <FontAwesomeIcon icon={["fas", "folder-open"]} />,
    <FontAwesomeIcon icon={["fas", "random"]} />,
    <FontAwesomeIcon icon={["fas", "calendar-alt"]} />,
    <FontAwesomeIcon icon={["fas", "plane"]} />,
    <FontAwesomeIcon icon={["fas", "utensils"]} />,
    <FontAwesomeIcon icon={["fas", "bus"]} />,
    <FontAwesomeIcon icon={["fas", "user-alt"]} />,
    <FontAwesomeIcon icon={["fas", "user-secret"]} />,
    <FontAwesomeIcon icon={["fas", "money-bill-alt"]} />,
    <FontAwesomeIcon icon={["fas", "chart-bar"]} />,
  ];

  const [idxIcon, setIdxIcon] = useState(0);

  let barIcon = null;

 

  const displayIconBar = (currentIcon) => {
    if (currentIcon == "tachometer-alt") {
      setIdxIcon(0);
    }
    if (currentIcon == "flag") {
      setIdxIcon(1);
    }
    if (currentIcon == "folder-open") {
      setIdxIcon(2);
    }
    if (currentIcon == "random") {
      setIdxIcon(3);
    }
    if (currentIcon == "calendar-alt") {
      setIdxIcon(4);
    }
    if (currentIcon == "plane") {
      setIdxIcon(5);
    }
    if (currentIcon == "utensils") {
      setIdxIcon(6);
    }
    if (currentIcon == "bus") {
      setIdxIcon(7);
    }
    if (currentIcon == "user-alt") {
      setIdxIcon(8);
    }
    if (currentIcon == "user-secret") {
      setIdxIcon(9);
    }
    if (currentIcon == "money-bill-alt") {
      setIdxIcon(10);
    }
    if (currentIcon == "chart-bar") {
      setIdxIcon(11);
    }

    // this.setState({ changeMenu: pos });
  };

  const btnModal = (
    <button
      type="button"
      className="btn btn-primary"
      data-toggle="modal"
      data-target="#staticBackdrop"
    >
      +
    </button>
  );

  var displayModal = (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className=" modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl modal-fullscreen-lg-down">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Ajout d'un nouveau Widget
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <PillsJustified />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              {/* validation */}
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
    {displayModal}
      <div className="row">
        <div className="col-xs-6 col-md-1">
          <MenuSideLeft displayIconBar={displayIconBar} />
        </div>
        <div className="col-xs-6 col-md-11">
          <div className="side-top ">
            <div className="col-xs-5 col-md-3">{element[idxIcon]} </div>
            <div className="col-xs-5 col-md-8" style={{ textAlign: "right" }}>
              menu
            </div>
          </div>

          
          <div className="row widget">
            {/* <PillsJustified /> */}

            <div className="col-xs-5 col-md-4" style={{ height: "150px" }}>
              <div className="empty">
                <div className="drag" draggable="true">
                  {btnModal}
                </div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">
                  {btnModal}
                </div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">
                  {btnModal}
                </div>
              </div>
            </div>
          </div>
          <div className="row widget">
            <div className="col-xs-5 col-md-4" style={{ height: "150px" }}>
              <div className="empty">
                <div className="drag" draggable="true">
                  {btnModal}
                </div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">
                  {btnModal}
                </div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">
                  {btnModal}
                </div>
              </div>
            </div>
          </div>
          <div className="row widget">
            <div className="col-xs-5 col-md-4" style={{ height: "150px" }}>
              <div className="empty">
                <div className="drag" draggable="true">
                  {btnModal}
                </div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">
                  {btnModal}
                </div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">
                  {btnModal}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // }
}

export default Dashboard;
