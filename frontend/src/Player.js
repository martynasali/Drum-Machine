import React from "react";
import Buttons from "./Buttons";
import { useState, useEffect } from "react";
import * as Tone from 'tone'
let seq
let seq_j
let seq_k
let synth
let synths
let synths_j
let synths_k
let song_i
let song_j
let song_k
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
    partials: [1]
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
const [playing1, setPlaying1]= useState(false)

    const buttons = []
    for (let i = 0; i < 16; i++) {
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
    const [buttons_i, setButtons_i] = useState( buttons.map(i=>{return{...i}}))
    const [buttons_j, setButtons_j] = useState(buttons.map(j=>{return{...j}}))
    const [buttons_k, setButtons_k] = useState(buttons.map(k=>{return{...k}}))


function initialize(){

    if (ini === false){
    console.log("ini == false");
    synths = new Tone.MembraneSynth(synth).toDestination();
    synths_j = new Tone.MembraneSynth(synth).toDestination();
    synths_k = new Tone.MembraneSynth(synth).toDestination();
    seq = new Tone.Sequence((time, note) => {
        synths.triggerAttackRelease(note, 0.3, time);
    }, song_i).start(0);

    seq_j = new Tone.Sequence((time, note) => {
        synths_j.triggerAttackRelease(note, 0.3, time);
    }, song_j).start(0);

    seq_k = new Tone.Sequence((time, note) => {
        synths_k.triggerAttackRelease(note, 0.3, time);
    }, song_k).start(0);


}
else{
console.log("hi");
}
}

// oscillator(synth, song)
//   let song = ["D4", "A4", "A4","F4","f4","f4","f4","f4","F4","f4","D4","A4","A4","A4","f4" ]
function change(){
    song_i = buttons_i.map(b=>b.isOn)
    song_j = buttons_j.map(b=>b.isOn)
    song_k = buttons_k.map(b=>b.isOn)
    console.table( buttons_i);
    console.table( buttons_j);
    console.table( buttons_k);
    ini = false
    playing = false
    seq.stop();
    seq_j.stop();
    seq_k.stop();
    if(playing === false){
        initialize()
        Tone.start();
        seq.start(0);
        seq_j.start(0);
        seq_k.start(0);
        playing = true
    }
    else
    {
        seq.stop();
        playing = false
    }
}
useEffect(()=>{
    initialize()
})

    function play () {
        Tone.Transport.bpm.value = 120; //how many beats(quarter notes) per minute
        if(!playing1){
        Tone.Transport.start();
        ini=true;
        setPlaying1(true);
        }else{
           Tone.Transport.stop();
           ini=false
           setPlaying1(false)
           seq.stop();
           seq_j.stop();
           seq_k.stop();
        }

    }


return<> 
<button className="w-16 h-16 rounded-lg border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-red-900 bg-purple-500 " onClick={play}>{playing1?"Stop":"Play"}</button>
{/*<button className="w-16 h-16 rounded-lg border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-red-900 bg-purple-500 " onClick={change}>Stop</button>*/}
<div onClick={change}>
<Buttons sound={"C1"} setbutton={setButtons_i}  buttons={buttons_i}/>
<Buttons sound={"C2"} setbutton={setButtons_j} buttons={buttons_j}/>
<Buttons sound={"C3"} setbutton={setButtons_k} buttons={buttons_k}/>
</div>
</>

}