import logo from './logo.svg';
import Player from './Player';
import './App.css';
import './index.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SoundButton from './SoundButton';




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
<>
    <div className="h-48"></div>
    
    <Player />
  
    
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
