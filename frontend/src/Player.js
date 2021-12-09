import React from "react";
import Buttons from "./Buttons";
import { useState, useEffect } from "react";
import {stop} from "./oscilator";
import * as Tone from 'tone'
let seq
let synth
let syntha
let synths
let song
let ini = false
let playing = false

 synth =  {
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

function initialize(){
    
    console.log("synth, seq");
if (ini === false){
synths = new Tone.MembraneSynth(synth).toDestination();
let synths3 = new Tone.MembraneSynth(synth).toDestination();
seq = new Tone.Sequence((time, note) => {
    if(note == "C3"){
        console.log(note);
        synths.triggerAttackRelease(note, 0.3, time);
        }else{
        synths3.triggerAttackRelease("C4", 0.4, time);
        }
        // subdivisions are given as subarrays
    }, song).start(0);
    Tone.Transport.bpm.value = 120; //how many beats(quarter notes) per minute
    Tone.Transport.start();
    ini=true
}
else{
    
console.log("hi");
}
}

function son () {
    
}

// oscillator(synth, song)
//   let song = ["D4", "A4", "A4","F4","f4","f4","f4","f4","F4","f4","D4","A4","A4","A4","f4" ]
function change(){
    song = buttons.map(b=>b.isOn)
    console.log("song", song);
    ini = false
    playing = false
    seq.stop();
    oscillator()
    
    
}
useEffect(()=>{

    initialize()
})

function oscillator(){
if(playing === false){
    initialize()
    Tone.start();
    seq.start(); 
    playing = true 
}
else
{
    
    seq.stop(); 
    playing = false 
}
}
    

return<> 
<button className="w-16 h-16 rounded-lg border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-red-900 bg-purple-500 " onClick={oscillator}>Play</button>
<button className="w-16 h-16 rounded-lg border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-red-900 bg-purple-500 " onClick={change}>Stop</button>
<div onClick={change}>
<Buttons sound={"C1"}  buttons={buttons}/>
<Buttons sound={"C2"}  buttons={buttons}/>
<Buttons sound={"C3"}  buttons={buttons}/>
</div>
</>

}