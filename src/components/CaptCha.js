import React from 'react'

var Recaptcha = require("react-recaptcha");


var callback = function () {
    console.log("Done!!!!");
  };
  

function CaptCha() {
    return (
        <div className="row justifyCenter " >
            
        <Recaptcha
          sitekey="6LcywK4ZAAAAAMmuGNCcw5rwEAOqxZszGwH8N5PB"
          render="explicit"
          onloadCallback={callback}
        />
        </div>
    )
}

export default CaptCha
