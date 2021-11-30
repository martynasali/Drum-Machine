import { useState } from "react";
import React  from 'react';
import * as Tone from 'tone'


const buttonClass = " flex-1 h-8 p-6 w-8 rounded-lg bg-gray-700 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassFour = " flex-1 h-8 p-6 w-8 rounded-lg bg-gray-500 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassSlected = " flex-1 h-8 p-6 w-8 rounded-lg bg-yellow-400 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400";


function NewButton ()
{
    
    
    const buttons = []
    for (var i = 0; i < 16; i++) {
        if((i+1) %4 === 0){
            
            buttons.push({
                index: i,
                isOn: null,
                style: buttonClassFour
        })}
        else{
    buttons.push({
        index: i,
        isOn: null,
        style: buttonClass
    })}
    console.log(buttons);
    }
    
    const [button, setButton] = useState(buttons)
    
    function TurnOn ({indexas=7}) 
    {
        const butts = button
        console.log(butts);
        console.log(indexas);

    // if((indexas+1) % 4 == 0){
    //     butts[indexas].style = buttonClassSlected
    //     butts[indexas].isOn = true
    //     setButton(butts)
    //     console.log(indexas);
    // }
    // else{
        butts[indexas].style = buttonClassSlected
        butts[indexas].isOn = true   
        setButton(butts)
        // }
        
}

return  button.map( b =>
   <div indexas={b.index} className={b.style} onClick={TurnOn} >{b.index}</div>  
)
}



function Button ({number})
{
    
    const [btnClass, setBtnClass] = useState(buttonClass)
    
    function setClass () {
        if (btnClass == buttonClass || btnClass == buttonClassFour){
            setBtnClass(buttonClassSlected)
            
        }else{
            setBtnClass(buttonClass)
        }
    }
    return <div class={btnClass} onClick={setClass}>{number}</div> 
}


export default function SoundButton (){
    let nwsong = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ]
    const [song, setSong] = useState(nwsong)

function ButtonFour ({number})
{
    const [btnClass, setBtnClass] = useState(buttonClassFour)
    nwsong = song
    function setClass () {
    if (btnClass == buttonClass || btnClass == buttonClassFour){
        setBtnClass(buttonClassSlected)
        nwsong[number] = "C4"
        console.log(nwsong, nwsong[number]);
        setSong(nwsong)
    }else{
        setBtnClass(buttonClassFour)
        nwsong[number] = null
        console.log(nwsong, nwsong[number]);
        setSong(nwsong)
  }}

function plau (){
// -------------------------------      
const phaser = new Tone.Phaser({
	frequency: 15,
	octaves: 5,
	baseFrequency: 1000
}).toDestination();

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
	synth.triggerAttackRelease(note, 0.3, time);
	// subdivisions are given as subarrays
}, song).start(0);
Tone.Transport.bpm.value = 180;
Tone.Transport.start();
    // -------------------
  }
  

return <> <div class={btnClass} onClick={setClass}>{number} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit eius facere impedit, placeat illum aspernatur tempora consequatur animi ipsa dicta hic, numquam in? Facilis repellat cumque, veniam corrupti praesentium dolores.  </div>
<button onClick={plau}>Plau</button> 
</>
}

    return(
        
        <>
        <div className="flex flex-row"> 
        {/* <Button number={0}/>
        <Button number={1}/>
        <Button number={2}/>
        <ButtonFour number={3}/>
        <Button number={4}/>
        <Button number={5}/>
        <Button number={6}/>
        <ButtonFour number={7}/>
        <Button number={8}/>
        <Button number={9}/>
        <Button number={10}/>
        <ButtonFour number={11}/>
        <Button number={12}/>
        <Button number={13}/>
        <Button number={14}/>
        <ButtonFour number={15}/> */}
        
        <NewButton/>
        </div>    
        </>
        )
}                                                                                                