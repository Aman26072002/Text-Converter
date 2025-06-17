// import { useState } from "react"
import React, {useState} from 'react'

export default function TextForm(props) {
    // const [text, setText] = useState("Enter the text here");

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("converted to upparcase","Success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("converted to lowercase","Success");
    }

    const handleClearClick =()=>{
      let newText='';
      setText(newText);
        props.showAlert("clear the text area","Success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
        
    }
    
    const handleOnCick = (event)=>{
        // console.log("On change");
        setText(event.target.value);
        
    }

    const handleExtraSpace =()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Remove the extra space textarea","Success");
    }

    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy the above textarea","Success");

    }
    

    const [text, setText] = useState('Enter text here2');
    // text = "new text";//Wrong way to change the state
    // setText("new text"); //Correct way to change the state
    

  return (
    <>
    <div className='container' style={{background:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnCick} style={{background:props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear data</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Extra Space Remove</button>

    </div>
    <div className='container my-3' style={{background:props.mode==='dark'?'gray':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ".length)} word and {text.length}characters</p>
      <p>{0.008 * text.split("").length}Minutes read</p>
      <h3>Preview</h3>
      <p>{text .length>0?text:"Enter somethingto in the textbox above preview here"}</p>

    </div>
    </>
  )
}
