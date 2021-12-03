import React from "react";
import Buttons from "./Buttons";
import { useState } from "react";
import {oscillator, stop, create} from "./oscilator";
import * as Tone from 'tone'


const synth = {
  pitchDecay:0.05,
  octaves: 4,
  oscillator : {
    type :"fmsine",
    phase: 140,
    modulationType: "sine",
    modulationIndex:0.8,
    partials: [1] //1,0.1,0.01,0.01
  },
  envelope :{
    attack:0.01,
    decay :0.74,
    sustain: 0.71,
    release: 0.05,
    attackCurve :"exponential"
  }
}


export default function Player ()
{

    const buttons = []
    for (var i = 0; i < 16; i++) {
        if((i+1) %4 === 0){
            
            buttons.push({
                index: i,
                isOn: null
        })}
        else{
    buttons.push({
        index: i,
        isOn: null
    })}   
    }
const [song, setSong] = useState(buttons)

function start() {
    
    
    const song = buttons.map(b=>b.isOn)
    console.log("daina", song);
//   let song = ["D4", "A4", "A4","F4","f4","f4","f4","f4","F4","f4","D4","A4","A4","A4","f4" ]
oscillator(synth, song, 120)

// Tone.start()
}
function end(){

stop()
}

function ender (e){
    console.log(e);
}


return<> 
<button className="w-16 h-16 rounded-lg border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-red-900 bg-purple-500 " onClick={create}>Create</button>
<button className="w-16 h-16 rounded-lg border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-red-900 bg-purple-500 " onClick={start}>Play</button>
<button className="w-16 h-16 rounded-lg border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-red-900 bg-purple-500 " onClick={end}>Stop</button>
<Buttons buttons={buttons}/>
<Buttons buttons={buttons}/>
<Buttons buttons={buttons}/>
</>

}