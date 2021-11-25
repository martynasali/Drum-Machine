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
            setPlay(playingStyle)
           synth.triggerAttack("C4", now)
// wait one second before triggering the release
            synth.triggerRelease(now + 1)
        }else{
            setPlay(playStyle)

        }
    }
    

    return <div className={play} onClick={start}>{icon}</div>


}