import React, { useRef , useState, useEffect } from "react";
import MenuSideLeft from "./MenuSideLeft";
import TestComponent from "./TestComponent";
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function Dashboard (props) {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     modalIsOpen: false,
  //     changeMenu: "",
  //     chartbar: '<i class="fas fa-chart-bar"></i>',
  //     money: '<i className="far fa-money-bill-alt"></i>',
  //     usersecret: '<i class="fas fa-user-secret"></i>',
  //     user: '<i class="fas fa-user-alt"></i>',
  //     bus: '<i class="fas fa-bus"></i>',
  //     ustensil: '<i class="fas fa-utensils"></i>',
  //     plane: '<i class="fas fa-plane"></i>',
  //     calendar: '<i class="far fa-calendar-alt"></i>',
  //     random: '<i class="fas fa-random"></i>',
  //     folder: '<i class="fas fa-folder-open"></i>',
  //     flag: '<i class="fas fa-flag"></i>',
  //     tacho: <i className="fas fa-tachometer-alt"></i>,
  //   };
  // }

var refModal = useRef(null);

  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    // this.setState({modalIsOpen:true})
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    // this.setState({modalIsOpen:false})
    setIsOpen(false);
  }


  var barIcon = null;
//   element = <FontAwesomeIcon icon={faCoffee} />


  const displayIconBar = (currentIcon) => {
   barIcon = currentIcon
    // this.setState({ changeMenu: pos });
  };

  const displayModal = (<Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >

    <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
    <button onClick={closeModal}>close</button>
    <div>I am a modal</div>
    <form>
      <input />
      <button>tab navigation</button>
      <button>stays</button>
      <button>inside</button>
      <button>the modal</button>
    </form>
  </Modal>)


// top propagation modal
// let modalStopPropag = refModal.current.addEventListener('click', clickStopPropag)

useEffect(()=>{
  let modalStopPropag = document.querySelector('#modal')
  modalStopPropag.addEventListener('click', clickStopPropag)
  console.log(modalStopPropag)
})

function clickStopPropag(e){
 
  console.log(e)
  e.stopPropagation()
}
  // render() {
    // this.state.changeMenu == 1 && (barIcon = this.state.tacho);

    return (
      <>
        <div className="row">
          <div className="col-xs-6 col-md-1">
            <div></div>

            <MenuSideLeft displayIconBar={displayIconBar} />
          </div>
          <div className="col-xs-6 col-md-11">
            <div className="side-top ">
              <div className="col-xs-5 col-md-3">Icone </div>
              <div className="col-xs-5 col-md-8" style={{ textAlign: "right" }}>
                menu
              </div>
            </div>
 {barIcon}

 <div ref={refModal} id="modal">{displayModal}</div>
            <div className="row widget">
            <div className="col-xs-5 col-md-4" style={{ height:"150px"}}>
              <div className="empty"  onClick={openModal}>
              <div className="drag" draggable="true">+</div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty"  onClick={openModal}>
                <div className="drag" draggable="true">+</div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty"  onClick={openModal}>
                <div className="drag" draggable="true">+</div>
              </div>
            </div>
            
            </div>
            <div className="row widget">
            <div className="col-xs-5 col-md-4" style={{ height:"150px"}}>
              <div className="empty"   onClick={openModal}>
              <div className="drag" draggable="true">+</div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty">
                <div className="drag" draggable="true">+</div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty"  onClick={openModal}>
                <div className="drag" draggable="true">+</div>
              </div>
            </div>
            
            </div>
            <div className="row widget">
            <div className="col-xs-5 col-md-4" style={{ height:"150px"}}>
              <div className="empty"   onClick={openModal}>
              <div className="drag" draggable="true">+</div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty"  onClick={openModal}>
                <div className="drag" draggable="true">+</div>
              </div>
            </div>
            <div className="col-xs-5 col-md-4">
              <div className="empty"  onClick={openModal}>
                <div className="drag" draggable="true">+</div>
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
