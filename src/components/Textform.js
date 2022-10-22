import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    const handelUpClicked = ()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been Uppercased", "success");
    }
    const handellowClicked = ()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been Lowercased", "success");
    }
    const handleclear = ()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text has been Cleared", "success");
    }
    const handelOnChange = (event)=>{
        setText(event.target.value)
    }
    
    const handleCopy = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copied", "success");
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces have been handled", "success");
    }
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'?'#343434':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handelOnChange}></textarea>
       </div>
       <button className="btn btn-primary mx-1" onClick={handelUpClicked}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-1" onClick={handellowClicked}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-1" onClick={handleclear}>Clear Text</button>
       <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>set Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary:</h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008*text.split(" ").length} miuntes required to read.</p>
        <h2>Preview:</h2>
        <p>{text.length>0?text:"Enter something in the above form to preview here."}</p>
    </div>
    </>
  )
}
