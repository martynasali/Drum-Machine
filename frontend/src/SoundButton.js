import { useState } from "react";
import React  from 'react';

function Button ()
{
    const buttonClass = " flex-1 h-8 p-6 w-8 rounded-lg bg-gray-700 border-2 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
    const buttonClassFour = " flex-1 h-8 p-6 w-8 rounded-lg bg-gray-700 border-2 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
    const buttonClassSlected = " flex-1 h-8 p-6 w-8 rounded-lg bg-yellow-400 border-2 border-border-gray-500 border-opacity-100 hover:border-pink-400";
    const [btnClass, setBtnClass] = useState(buttonClass)

    function setClass () {
    if (btnClass == buttonClass){
        setBtnClass(buttonClassSlected)
    }else{
        setBtnClass(buttonClass)
    }
  }

    
    return <div class={btnClass} onClick={setClass}></div> 
}

export default function SoundButton (){
    return(
        <div className="inline-flex space-x-2">
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        </div>
        )
}