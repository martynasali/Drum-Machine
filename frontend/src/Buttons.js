import { useState, useEffect } from "react";
import React  from 'react';
import * as Tone from 'tone'


const buttonClass = "h-8 p-6 w-8 rounded-lg bg-gray-700 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassSelect = " h-8 p-6 w-8 rounded-lg bg-yellow-400 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400";
const buttonClassFour = "h-8 p-6 w-8 rounded-lg bg-gray-500 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";

export default function Buttons ({buttons, sound, setButton, change})
{

        let refresh = false
        useEffect(() => {
            refresh = false
change()
        }, setButton)


    function Button ({number, sound, className})
    {
        function setStyle() {
            let buttonsCopy = buttons.map(i=>{return{...i}})
            buttonsCopy[number].isOn = sound
            buttonsCopy[number].style = buttonClassSelect
            setButton(buttonsCopy.map(bc=>{return{...bc}}))
            refresh = true
            console.log(buttons)

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

