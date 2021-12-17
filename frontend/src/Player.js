import React from "react";
// import Buttons from "./Buttons";
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

const buttonClass = "h-8 p-6 w-8 rounded-lg bg-gray-700 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassSelect = " h-8 p-6 w-8 rounded-lg bg-yellow-400 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400";
const buttonClassFour = "h-8 p-6 w-8 rounded-lg bg-gray-500 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";

export default function Player ()
{


const [playing1, setPlaying1]= useState(false)

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

    // let timing = new Tone.Sequence((time, note) => {
    //     console.log(note)
    // }, ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]).start(0);


}
else{
console.log("hi");
}
}

// oscillator(synth, song)
//   let song = ["D4", "A4", "A4","F4","f4","f4","f4","f4","F4","f4","D4","A4","A4","A4","f4" ]
function change(){
    ini = false
    playing = false
    // seq.stop();
    // seq_j.stop();
    // seq_k.stop();

    song_i = buttons_i.map(b=>b.isOn)
    song_j = buttons_j.map(b=>b.isOn)
    song_k = buttons_k.map(b=>b.isOn)
    console.table("song_i", song_i)
    console.table("song_j", song_j)
    console.table("song_k", song_k)

    if(playing === false){
        // initialize()
        Tone.start();
        // seq.start(0);
        // seq_j.start(0);
        // seq_k.start(0);
        playing = true
    }
    else
    {
        seq.stop();
        playing = false
    }
}
useEffect(()=>{
    // initialize()
})

    function play () {
    synths = new Tone.MembraneSynth(synth).toDestination();
    let synthsw = new Tone.MembraneSynth(synth).toDestination();
    let synthsa = new Tone.MembraneSynth(synth).toDestination();
    seq = new Tone.Sequence((time, note) => {
        synthsw.triggerAttackRelease(note, 0.3, time);
    }, song_i).start(0);
    let seqr = new Tone.Sequence((time, note) => {
        synthsa.triggerAttackRelease(note, 0.3, time);
    }, song_j).start(0);
    let seqt = new Tone.Sequence((time, note) => {
        synths.triggerAttackRelease(note, 0.3, time);
    }, song_k).start(0);
        Tone.Transport.bpm.value = 120; //how many beats(quarter notes) per minute
        Tone.Transport.start();

    }
    useEffect(() => {
        change()
    },[buttons_i, buttons_j, buttons_k])


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



    return<>
{/*<button className="w-16 h-16 rounded-lg border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-red-900 bg-purple-500 " onClick={change}>Stop</button>*/}
<button className="w-16 h-16 rounded-lg border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-red-900 bg-purple-500 " onClick={play}>{playing1?"Stop":"Play"}</button>

<Buttons sound={"C1"} setButton={setButtons_i} buttons={buttons_i}/> hi
<Buttons sound={"C2"} setButton={setButtons_j} buttons={buttons_j}/>
<Buttons sound={"C3"} setButton={setButtons_k} buttons={buttons_k}/>
</>

}