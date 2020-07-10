import React, { useState, Fragment } from "react";
import CaptCha from "./CaptCha";

import { MyContext } from "./MyContext";


function Footer(props) {


  const createMyAccount = (data) => {
    // traitement validation create account
   if(data.urlValide && data.nameValide && data.emailValide && data.identNameValide){
      return props.validateAccount(true)
   }
  };


  const [checked, setChecked] = useState(false);

  const ActivateBtnAccount = function (e) {

    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <MyContext.Consumer>
      {(data) => {
        return (
          <Fragment>
            <div className="container">
              <label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  onClick={(e) => ActivateBtnAccount(e)}
                />
                I agree to the{" "}
                <u>
                  <a href="http://">Terms and Conditions</a>
                </u>
              </label>

              <div className="row row-center">
                {props.leState.notYou && <CaptCha></CaptCha>}
              </div>
              <div className="row justifyCenter">
                {checked ? (
                  <button
                    type="button"
                    className="btn btn-outline-primary form-control"
                    style={{ width: "200px" }}
                    style={{ marginLeft: "20%", width: "200px" }}
                    onClick={()=>createMyAccount(data)}
                  >
                    Create My Account
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-outline-primary form-control"
                    style={{ width: "200px" }}
                    disabled
                    style={{ marginLeft: "20%", width: "200px" }}
                  >
                    Create My Account
                  </button>
                )}

                <u>
                  <a href="" style={{ alignText: "right", marginLeft: "20%" }}>
                    All read have one
                  </a>
                </u>
              </div>
            </div>
            {console.log("hg", data)}
          </Fragment>
        );
      }}
    </MyContext.Consumer>
  );
}
{
  /*  */
}
export default Footer;
