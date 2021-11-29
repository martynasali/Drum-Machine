import React, { useState } from "react";
import * as Tone from 'tone'

export default function Play () {

    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()
    
    const icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    const playStyle ='justify-items-center h-8 w-8 bg-gray-500'
    const playingStyle = 'center h-8 w-8 bg-yellow-500'
    const [play, setPlay] = useState(playStyle)
    
    function start (){
        if (play === playStyle ){
           const synth = new Tone.MembraneSynth({
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
}).toDestination();
const seq = new Tone.Sequence((time, note) => {
	synth.triggerAttackRelease(note, 0.1, time);
	// subdivisions are given as subarrays
}, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]).start(0);
Tone.Transport.start();
        }else{
            setPlay(playStyle)

        }
    }
    

    return <div className={play} onClick={start}>{icon}</div>


}