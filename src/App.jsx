import React, { useContext } from 'react'
import "./App.css"
import va from "./assets/func1.png"
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';
import speakimg from "./assets/speak.gif"
import aigif from "./assets/aiVoice.gif"
function App() {
  let {recognition,speaking,setSpeaking,prompt,response,setPrompt,setResponse}=useContext(datacontext)

  
  return (
    <div className='main'>
      <img src={va} alt="" id="lexa"/>
      <span>I'm FLexa,Your Advanced Virtual Assistant</span>
      {!speaking?
     <button onClick={()=>{
  // ✅ STOP previous AI voice
  window.speechSynthesis.cancel();

  setPrompt("listening...");
  setSpeaking(true);
  setResponse(false);

  recognition.stop();   // 🛑 stop old recognition
  recognition.start();  // ▶ start fresh
}}>
Click here <CiMicrophoneOn /></button>
    :
    <div className='response'>
      {!response?
      <img src={speakimg} alt="" id="speak" />
      :
      <img src={aigif} alt="" id="aigif" />}
<p>{prompt}</p>
    </div>

      }
     
    </div>
  )
}

export default App
