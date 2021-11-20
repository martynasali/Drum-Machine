import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Profile ()
{
  return(
    <img
    src="https://i.imgur.com/MK3eW3As.jpg"
    alt="Katherine Johnson"
    />
  )
}
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

  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + Flask Tutorial</p>
        <div>{getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}</div>
      <h1>labs vakar</h1>
      <button onClick={start}>Play</button>
      <button onClick={stop}>Stop</button>
      <Profile/>
      </header>
    </div>
  );
}

export default App;
