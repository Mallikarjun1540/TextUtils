import React, { useState } from "react";

export default function TextForm(props) {
  const HandleOnChange = (event) => {
    // console.log("On Change Handled")
    setText(event.target.value);
    
  };
  const HandleUpClick = () => {
    // console.log("Onclick Handled")
    // const newText=text.toUpperCase();
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase","success")
  };

  const HandleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase","success")
  };

  const HandleClearClick = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success")
  };

  const HandleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard","success")
  };

  const HandleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space has been removed","success")
  };
  // creation of state
  const [text, setText] = useState("");

//   const countWords = (text) => {
//     const nonEmptyWords = text.split(/\s+/).filter(Boolean);
//     return nonEmptyWords.length;
// };

document.title='TextUtils | Home';
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="my-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter Your Text Here"
            id="text"
            rows="8"
            value={text}
            onChange={HandleOnChange}
            style={{backgroundColor: props.mode==='dark'?'rgb(2 9 14)':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleLowClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleRemoveSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container">
      <div className="container my-3 mx-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>
          {/* {countWords(text)} words{text.length} charecters */}
          {text.split(/\s+/).filter((ele)=> {return ele.length!==0}).length} Words and {text.length} charecters
        </p>
        <p> {0.008 * text.split(/\s+/).filter((ele)=> {return ele.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text above to preview here"}</p>
      </div>
      </div>
    </>
  );
}
