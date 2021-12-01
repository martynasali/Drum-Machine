import { useState } from "react";
import React  from 'react';
import * as Tone from 'tone'


const buttonClass = " flex-1 h-8 p-6 w-8 rounded-lg bg-gray-700 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassFour = " flex-1 h-8 p-6 w-8 rounded-lg bg-gray-500 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassSlected = " flex-1 h-8 p-6 w-8 rounded-lg bg-yellow-400 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400";

export default function Buttons () 
{

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

return <Button/>

    


}

