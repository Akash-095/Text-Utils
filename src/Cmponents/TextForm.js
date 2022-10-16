import React, {useState} from 'react'



export default function TextForm(props)
 {
  
     const handleUpClick = ()=>{
        //  console.log("UpperCase was clicked");
        //  setText("You have clicked button");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to upper case","success");
     }
     const handleLoClick = ()=>{
     
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Changed to lower Case","success");
   }
   const handleClearClick = ()=>{
    
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text","success");
 }
     const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
      
      navigator.clipboard.writeText(text);
      
      props.showAlert("Coppied to clipboard!!!","success");
    }
    const handleExtraSpace  = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const handleReplace = ()=>{
      let repval=prompt("Enter the new text:")
      let tobereplaced = new RegExp(repval,'g');
      let toreplace=prompt("Enter the text that you want to replace with:")
      let newText= text.replace(tobereplaced,toreplace);
         setText(newText);
    }
    const handleCapitalizeWordClick = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
  }

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  
   
    const [text, setText] = useState('');
  return (
    <>
  
  <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
<h1>{props.heading}</h1> 
<div className="mb-3">
{/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#111112',
  color:props.mode==='light'?'black':'white' }} rows="9"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleUpClick}>Convert To UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2  my-2" onClick={handleLoClick}>Convert To LowerCase</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleReplace}>Replace-Text</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCapitalizeWordClick}>Replace-Text</button>
<button disabld ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpeak}>Speak</button>

</div>
<div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
<h2>Your text Summary</h2>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} Minutes to read</p>
{/* <h3>Preview</h3>
<p>{text.length>0?text:"Nothing to preview"}</p> */}
</div>
</>
  )
}
