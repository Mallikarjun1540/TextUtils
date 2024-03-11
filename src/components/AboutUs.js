import React from "react";

export default function AboutUs(props) {
let myStyle={
  color : props.mode==='dark'?'white':'black',
  backgroundColor : props.mode==='dark'?'rgb(2 9 14)':'white'
  
}
  

  document.title = "TextUtils | About-Us";
  return (
    <>
      <div className="container my-3" style={myStyle}>
        <h1 className="container my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Text Manipulations
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Text Manipulation</strong>
                Text can be Manipulated, Like Text can be converted from lowecase to Uppercase
                 and Uppercase to Lowercase.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Additional Functionalities
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Additional Functionalities </strong> 
                like Text can be Copied to Clipboard, Extra Spaces will be removed, and text will be
                 cleared from textbox.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Text Summary
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Summary</strong>
                Text Summary will be displayed like number of words in the sentence, number of 
                charecters in the sentence and also time to read the particular sentence.
                
              </div>
            </div>
          </div>
        </div>
        {/* <button onClick={toggleStyle} type="button" className="btn btn-primary my-3" >{btnText}</button> */}

        {/* <div className="form-check form-switch my-2">
  <input onClick={toggleStyle} className="form-check-input" type="checkbox" role="switch" />
  <label className="form-check-label">{btnText}</label>
</div> */}
      </div>
    </>
  );
}
