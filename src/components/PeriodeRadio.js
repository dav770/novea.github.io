import React, { useState, useEffect, useRef } from "react";





var arrayRadioObj = { paramObj: "", perso: '', paramPeriod: "", Deb: "", End: "" };

  


function PeriodeRadio() {
  const [idxIcon, setIdxIcon] = useState(0);
  
var refRA1 = useRef(null);
  var refRA2 = useRef(null);
  var refRA3 = useRef(null);
  var refRA4 = useRef(null);
  var refRA5 = useRef(null);
  var refRA6 = useRef(null);
  var refRA7 = useRef(null);
  var refRA8 = useRef(null);

  const [arrayRadio, setArrayRadio] = useState(null);



  const clickRadio = (App, Value) => {
    console.log('click')
    // refR1.current.checked = false
    // refR2.current.checked = false
    // refR3.current.checked = false
    // refR4.current.checked = false
    // refR5.current.checked = false
    // refR6.current.checked = false


    // if (App === "Obj") { 
    //   console.log('object')
    //   arrayRadioObj.paramObj = Value;
  
    //   arrayRadioObj.paramObj === 'CA' && (refR1.current.checked = true)
    //   arrayRadioObj.paramObj === 'DEP' && (refR2.current.checked = true)
    //   arrayRadioObj.paramObj === 'ENT' && (refR3.current.checked = true)
    //   arrayRadioObj.paramObj === 'BEN' && (refR4.current.checked = true)
    //   arrayRadioObj.paramObj === 'BAL' && (refR5.current.checked = true)
    //   if(arrayRadioObj.paramObj === 'PERS') {
    //     refR6.current.checked = true
    //     refSelect.current.disabled = false
    //   }else{
    //     refSelect.current.disabled = true
    //   }
    
    // }

    // setArrayRadio({ arrayRadio: arrayRadioObj });

  };

  useEffect(() => {

    
  },[arrayRadio]);

  return (
    <>
    <div>
        1. Periode:
      
    </div>
      <br />
      <div className="row" style={{display:'flex'}}>
      <div className="col" >
        <input
          ref={refRA1}
          id="MC"
          type="radio"
          name="MC"
          value="MC"
          onClick={() => clickRadio("Periode", "MC")}
        />
        <label htmlFor="MC">Mois en cours</label>
</div>
<div className="col">
        <input
          ref={refRA2}
          id="MP"
          type="radio"
          name="MP"
          value="MP"
          onClick={() => clickRadio("Periode", "MP")}
        />
        <label htmlFor="MP">Mois previsionnel</label>
      </div>
<div className="col" >
        <input
          ref={refRA3}
          id="APERS"
          type="radio"
          name="APERS"
          value="APERS"
          onClick={() => clickRadio("Periode", "PERS")}
        />
        <label htmlFor="APERS">Personnalise</label>
      </div>
<div className="col" >
        <input
          ref={refRA4}
          id="DEB"
          type="date"
          name="DEB"
          value="DEB"
          onClick={() => clickRadio("Periode", "DEB")}
        />
        <label htmlFor="DEB">DU: </label>
      </div>
<div className="col" >
        <input
          ref={refRA5}
          id="END"
          type="date"
          name="END"
          value="END"
          onClick={() => clickRadio("Periode", "END")}
        />
        <label htmlFor="DEB">AU: </label>
      </div>

    </div>
      <div className="row" style={{display:'flex'}}>
      <div className="col" >
        <input
          ref={refRA6}
          id="ANC"
          type="radio"
          name="ANC"
          value="ANC"
          onClick={() => clickRadio("Periode", "ANC")}
        />
        <label htmlFor="ANC">Annee en cours</label>
</div>
<div className="col">
        <input
          ref={refRA7}
          id="ANP"
          type="radio"
          name="ANP"
          value="ANP"
          onClick={() => clickRadio("Periode", "ANP")}
        />
        <label htmlFor="ANP">Annee previsionnelle</label>
      </div>
<div className="col" >
        <input
          ref={refRA8}
          id="LIVE"
          type="radio"
          name="LIVE"
          value="LIVE"
          onClick={() => clickRadio("Periode", "LIVE")}
        />
        <label htmlFor="LIVE">LIVE</label>
      </div>

    </div>
    </>
  );
}

export default PeriodeRadio;
