import logo from './logo.svg';
import Play from './Play';
import Buttons from './Buttons';
import './App.css';
import './index.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SoundButton from './SoundButton';


// create Oscillator node
// create web audio api context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = 'square';
oscillator.frequency.setValueAtTime(120, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);
function start(){
oscillator.start()
}
function stop(){
  oscillator.stop()
  
}








function App() {
  const buttonClass = "h-8 p-6 w-8 rounded-lg bg-gray-200 border-2 border-border-gray-500 border-opacity-100 hover:border-purple-500 hover:bg-indigo-800 shadow-xl";
  const buttonClassSlected = "h-8 p-6 w-8 rounded-lg bg-gray-300 border-2 border-border-gray-500 border-opacity-100 hover:border-purple-500 shadow-xl";
  const [btnClass, setBtnClass] = useState(buttonClass)
  const [getMessage, setGetMessage] = useState({})





  function setClass () {
    
    setBtnClass(buttonClassSlected)
  }
  
  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  let buttons = []
    for (let i = 0; i < 16; i++) {    
    buttons.push(<div class={btnClass} onClick={()=>{
      setClass(buttonClassSlected)}}></div>)
      }

  return (
<>
    <div className="h-48"></div>
    <div className="grid grid-cols-12">
    <Play/>
   <SoundButton />    
    
    <Buttons/>
   </div>
</> 
)
  

  // return (
  //   <div className="App">
  //       <p>React + Flask Tutorial</p>
  //       <div>{getMessage.status === 200 ? 
  //         <h3>{getMessage.data.message}</h3>
  //         : <h3>LOADING</h3>}</div>

  //  <div class={btnClass} onClick={()=>{
  //    setClass(buttonClassSlected)

  //  }}></div>
  //  <div class={btnClass}></div>
   

  //   </div>
  // );
}

export default App;
