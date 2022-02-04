import React from "react";
import { useState, useEffect } from "react";
import * as Tone from 'tone'
import TextField from '@mui/material/TextField';
let seq_i
let seq_j
let seq_k
let seq_l
let  synth =  {
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
let synths_i = new Tone.MembraneSynth(synth).toDestination();
let synths_j = new Tone.MembraneSynth(synth).toDestination();
let synths_k = new Tone.MetalSynth(synth).toDestination();
let synths_l = new Tone.PluckSynth(synth).toDestination();
let song_i
let song_j
let song_k
let song_l
let playing = [false, false]

const buttonClass = "h-8 p-6 w-8 rounded-lg bg-gray-700 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassSelect = " h-8 p-6 w-8 rounded-lg bg-yellow-400 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400";
const buttonClassFour = "h-8 p-6 w-8 rounded-lg bg-gray-500 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";

export default function Player ()
{


const [playing1, setPlaying1]= useState(false)
const [bpm, setBpm ]= useState(100)

    const buttonsE = []
    for (let i = 0; i < 16; i++) {
        if((i+1) %4 === 0){

            buttonsE.push({
                index: i,
                isOn: null,
                style: "h-8 p-6 w-8 rounded-lg bg-gray-500 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800"
        })}
        else{
    buttonsE.push({
        index: i,
        isOn: null,
        style: "h-8 p-6 w-8 rounded-lg bg-gray-700 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800"
    })}
    }
    const [buttons_i, setButtons_i] = useState(buttonsE.map(i=>{return{...i}}))
    const [buttons_j, setButtons_j] = useState(buttonsE.map(j=>{return{...j}}))
    const [buttons_k, setButtons_k] = useState(buttonsE.map(k=>{return{...k}}))
    const [buttons_l, setButtons_l] = useState(buttonsE.map(l=>{return{...l}}))

function change(){
    if(playing[0]){
        pause();
    }
    Tone.start()
    song_i = buttons_i.map(b=>b.isOn)
    song_j = buttons_j.map(b=>b.isOn)
    song_k = buttons_k.map(b=>b.isOn)
    song_l = buttons_l.map(b=>b.isOn)
    playing[1] = true
        if(playing[0]){
            play();
    }
}


    function playButton() {
        if(playing[0]){
            return
        }
        else{
            play()
        }
    }

    function play () {
        console.log("play synth", synth);
        if(playing[1]){
        seq_i = new Tone.Sequence((time, note) => {
        synths_i.triggerAttackRelease(note, 0.3, time);
        }, song_i).start(0)
        seq_j = new Tone.Sequence((time, note) => {
        synths_j.triggerAttackRelease(note, 0.3, time);
        }, song_j).start(0)
        seq_k = new Tone.Sequence((time, note) => {
        synths_k.triggerAttackRelease(note, 0.3, time);
        }, song_k).start(0)
        seq_l = new Tone.Sequence((time, note) => {
        synths_l.triggerAttackRelease(note, 0.3, time);
        }, song_l).start(0)
        Tone.Transport.bpm.value = bpm //how many beats(quarter notes) per minute
        Tone.Transport.start();
        playing[0] = true
        }
    }

    function stop () {
        if (!playing[0]) {
            console.log("Stop returning");
            return   
        }
        seq_i.stop()
        seq_j.stop()
        seq_k.stop()
        seq_l.stop()
        Tone.Transport.stop()
        playing[0] = false
    }
    
    function resume() {
        seq_i.start()
        seq_j.start()
        seq_k.start()
        seq_l.start()
        
    }
    function pause () {
        seq_i.stop()
        seq_j.stop()
        seq_k.stop()
        seq_l.stop()
    }



    
    useEffect(() => {
        change()
    },[buttons_i, buttons_j, buttons_k, buttons_l])
   
    useEffect(() => {
        change()
},[bpm])


    function Buttons ({buttons, sound, setButton})
    {

        function Button ({number, sound, className})
        {
            function setStyle() {

                if(buttons[number].isOn === null)
                {
                    // jeigu paprastas tampa geltonu
                    let buttonsCopy = buttons.map(i=>{return{...i}})
                    buttonsCopy[number].isOn = sound
                    buttonsCopy[number].style = buttonClassSelect
                    setButton(buttonsCopy.map(bc=>{return{...bc}}))
                }
                else if((buttons[number].index+1) % 4 === 0)
                {
                    // jeigu ketvirtasis, grįžta į pilką
                    let buttonsCopy = buttons.map(i=>{return{...i}})
                    buttonsCopy[number].isOn = null;
                    buttonsCopy[number].style = buttonClassFour;
                    setButton(buttonsCopy.map(bc=>{return{...bc}}))
                }
                else
                {
                    // jeigu ne ketvirtasis, grįžta į tamsų
                    let buttonsCopy = buttons.map(i=>{return{...i}})
                    buttonsCopy[number].isOn = null;
                    buttonsCopy[number].style = buttonClass;
                    setButton(buttonsCopy.map(bc=>{return{...bc}}))

                }

            }

            return <div onClick={setStyle} className={className}></div>

        }


        return (
            <div className="flex justify-center">
                {buttons.map(b=><>
                    { <Button className={b.style}  sound={sound} number={b.index}/> }
                </>)}
            </div>
        )
    }
    let [bpmInfo, setBpmInfo]= useState("Beats per Minute");
    let [error, setError]= useState("");
    function setbpm(e) {
    let value = 100
    
     if(e.target.value === null || e.target.value === undefined || e.target.value == "00") {
        value = 100
    }
    else
    {value = e.target.value}

    if(playing[0]){
    pause()
    }
  console.log(value);
  if(value>20000 || value < 1){
      setBpmInfo("20 000 BPM is max")
      setBpm(100)
  }
  else{
      setBpm(value);
      setBpmInfo("Beats per Minute")
  }
  if(playing[0]){
      play()
  }
}
function setOctave(e, num)
 {
     if (num===1) {
        synth.octaves = Number(e.target.value)
        synths_i = new Tone.MembraneSynth(synth).toDestination();
     }
     if (num===2) {
        synth.octaves = Number(e.target.value)
        synths_j = new Tone.MembraneSynth(synth).toDestination();
     }
     if (num===3) {
        synth.octaves = Number(e.target.value)
        synths_k = new Tone.MembraneSynth(synth).toDestination();
     }
     if (num===4) {
        synth.octaves = Number(e.target.value)
        synths_l = new Tone.MembraneSynth(synth).toDestination();
     }
}


    return<>
<div className="flex justify-left">
<button className="w-16 h-16 rounded-lg border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-red-900 bg-purple-500 " onClick={stop}>Stop</button>
<button className="w-16 h-16 rounded-lg border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-red-900 bg-purple-500 " onClick={playButton}>Play</button>
</div>
<Buttons sound={"C1"} setButton={setButtons_i} buttons={buttons_i}/>
<Buttons sound={"C2"} setButton={setButtons_j} buttons={buttons_j}/>
<Buttons sound={"C3"} setButton={setButtons_k} buttons={buttons_k}/>
<Buttons sound={"C2"} setButton={setButtons_l} buttons={buttons_l}/>
<div className="mt-4 flex justify-center">
      <TextField
          color="secondary"
          id="outlined-number"
          label={bpmInfo}
          defaultValue={100}
          type="number"
        //   onInput={()={setBpm}}
          onChange={setbpm}
        />
      <TextField
          color="secondary"
          id="outlined-number"
          label="Octave 1"
          defaultValue={1}
          type="number"
          onChange={(e)=>{setOctave(e, 1)}}
        />
      <TextField
          color="secondary"
          id="outlined-number"
          label="Octave 2"
          defaultValue={1}
          type="number"
          onChange={(e)=>{setOctave(e, 2)}}
        />
      <TextField
          color="secondary"
          id="outlined-number"
          label="Octave 3"
          defaultValue={1}
          type="number"
          onChange={(e)=>{setOctave(e, 3)}}
        />
      <TextField

          color="secondary"
          id="outlined-number"
          label="Octave 4"
          defaultValue={1}
          type="number"
          onChange={(e)=>{setOctave(e, 4)}}
        />
        </div>
      
</>

}