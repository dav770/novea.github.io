import React, { useState, useEffect, useRef } from "react";





var arrayRadioObj = { paramObj: "", perso: '', paramPeriod: "", Deb: "", End: "" };

  


function ObjetRadio() {
  const [idxIcon, setIdxIcon] = useState(0);
  
var refR1 = useRef(null);
  var refR2 = useRef(null);
  var refR3 = useRef(null);
  var refR4 = useRef(null);
  var refR5 = useRef(null);
  var refR6 = useRef(null);
  var refSelect = useRef(null);

  const [arrayRadio, setArrayRadio] = useState(null);



  const clickRadio = (App, Value) => {
    console.log('click')
    refR1.current.checked = false
    refR2.current.checked = false
    refR3.current.checked = false
    refR4.current.checked = false
    refR5.current.checked = false
    refR6.current.checked = false


    if (App === "Obj") { 
      console.log('object')
      arrayRadioObj.paramObj = Value;
  
      arrayRadioObj.paramObj === 'CA' && (refR1.current.checked = true)
      arrayRadioObj.paramObj === 'DEP' && (refR2.current.checked = true)
      arrayRadioObj.paramObj === 'ENT' && (refR3.current.checked = true)
      arrayRadioObj.paramObj === 'BEN' && (refR4.current.checked = true)
      arrayRadioObj.paramObj === 'BAL' && (refR5.current.checked = true)
      if(arrayRadioObj.paramObj === 'PERS') {
        refR6.current.checked = true
        refSelect.current.disabled = false
      }else{
        refSelect.current.disabled = true
      }
    
    }

    setArrayRadio({ arrayRadio: arrayRadioObj });

  };

  useEffect(() => {

    
  },[arrayRadio]);

  return (
    <>
    <div>
        1. Objet:
      
    </div>
      <br />
      <div className="row" style={{display:'flex'}}>
      <div className="col" >
        <input
          ref={refR1}
          id="CA"
          type="radio"
          name="CA"
          value="CA"
          onClick={() => clickRadio("Obj", "CA")}
        />
        <label htmlFor="CA">CA</label>
</div>
<div className="col">
        <input
          ref={refR2}
          id="DEP"
          type="radio"
          name="DEP"
          value="DEP"
          onClick={() => clickRadio("Obj", "DEP")}
        />
        <label htmlFor="DEP">Depenses</label>
      </div>
<div className="col" >
        <input
          ref={refR3}
          id="ENT"
          type="radio"
          name="ENT"
          value="ENT"
          onClick={() => clickRadio("Obj", "ENT")}
        />
        <label htmlFor="ENT">Entrees</label>
      </div>
<div className="col" >
        <input
          ref={refR4}
          id="BEN"
          type="radio"
          name="BEN"
          value="BEN"
          onClick={() => clickRadio("Obj", "BEN")}
        />
        <label htmlFor="BEN">Benefices</label>
      </div>
<div className="col" >
        <input
          ref={refR5}
          id="BAL"
          type="radio"
          name="BAL"
          value="BAL"
          onClick={() => clickRadio("Obj", "BAL")}
        />
        <label htmlFor="BAL">Balance</label>
      </div>
<div className="col">
        <input
          ref={refR6}
          id="PERS"
          type="radio"
          name="PERS"
          value="PERS"
          onClick={() => clickRadio("Obj", "PERS")}
        />
        <label htmlFor="PERS">Personnalise</label>
      </div>
<div className="col" >
<div className="form-group">
      {/* <label htmlFor="exampleSelect1">Example select</label> */}
      <select ref={refSelect}className="form-control" id="exampleSelect1" onChange={clickRadio}>
        <option>Commercial</option>
        <option>...</option>
        <option>000</option>
        
      </select>
    </div>
    </div>
    </div>
    </>
  );
}

export default ObjetRadio;
