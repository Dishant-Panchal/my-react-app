import React, {useState} from 'react'
import '../App.css';

export default function TextForm(props) {    
    document.title = "TextUtils - Home"
    const[text, setText] = useState("");
    const[textCount, setTextCount] = useState(0);       

    const btnUpClick = ()=>{
        if(text){
            setText(text.toUpperCase());
            props.showAlert("Converted to UPPERCASE!","success");
        }
        else{
            props.showAlert("Please enter text to be converted to UPPERCASE!","danger");
        }
    }

    const btnLowerClick = ()=>{
        if(text){
            setText(text.toLowerCase());
            props.showAlert("Converted to LowerCase!","success");
        }
        else{
            props.showAlert("Please enter text to be converted to lowercase!","danger");
        }
    }

    const btnCopyText = ()=>{                
        navigator.clipboard.writeText(text);   
        props.showAlert("Copied to Clipboard!","success");
    }

    const onToggleChange = (event)=>{   
        if(!event.target.checked){            
            setTextCount(text.replaceAll(" ","").length);
        }
        else{
            setTextCount(text.length);
        }
    }

    const txtDataChanged = (event)=>{        
        setText(event.target.value);
        if(event.target.value){
            setTextCount(text.length);
        }
        else{
            setTextCount(0);
        }
    }

    const btnClearClick = ()=>{
        let newText = '';
        setText(newText);        
    }    

    return (
    <>        
        <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Enter text in below space!</h2>
            <div className="mb-3">            
                <textarea type="text" value={text} className="form-control" id="txtData" rows="8" onChange={txtDataChanged} style={{backgroundColor: props.mode === 'dark' ? '#444444' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}/>
            </div>       
            <button className="btn btn-primary" onClick={btnUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={btnLowerClick}>Convert to lowercase</button>
            <button className="btn btn-primary" onClick={btnClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={btnCopyText}>Copy Text</button>
            <div className="container my-3">
                <h2>Summary</h2>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="toggleSwitch" onChange={onToggleChange}/>
                    <label className="form-check-label" htmlFor="toggleSwitch">Include Spaces</label>
                </div>
                <p>This text contains {text ? text.trim().split(" ").filter((word) => word !== "").length : 0} words & {textCount} chars</p>
                <h2>Preview</h2>
                <p>{text ? text : "No data for preview!"}</p>
            </div>  
        </div>      
    </>
    )
}
