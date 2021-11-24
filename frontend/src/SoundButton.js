import { useState } from "react";
import React  from 'react';

const buttonClass = " flex-1 h-8 p-6 w-8 rounded-lg bg-gray-700 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassFour = " flex-1 h-8 p-6 w-8 rounded-lg bg-gray-500 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassSlected = " flex-1 h-8 p-6 w-8 rounded-lg bg-yellow-400 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400";

function Button ()
{
    const [btnClass, setBtnClass] = useState(buttonClass)

    function setClass () {
    if (btnClass == buttonClass || btnClass == buttonClassFour){
        setBtnClass(buttonClassSlected)
    }else{
        setBtnClass(buttonClass)
    }
  }
    return <div class={btnClass} onClick={setClass}></div> 
}

function ButtonFour ()
{
    const [btnClass, setBtnClass] = useState(buttonClassFour)

    function setClass () {
    if (btnClass == buttonClass || btnClass == buttonClassFour){
        setBtnClass(buttonClassSlected)
    }else{
        setBtnClass(buttonClassFour)
    }
  }
    return <div class={btnClass} onClick={setClass}></div> 
}

export default function SoundButton (){
    return(
        
        
        <div className="grid justify-items-center ">
        <div className="inline-flex">
        <Button/>
        <Button/>
        <Button/>
        <ButtonFour/>
        <Button/>
        <Button/>
        <Button/>
        <ButtonFour/>
        <Button/>
        <Button/>
        <Button/>
        <ButtonFour/>
        <Button/>
        <Button/>
        <Button/>
        <ButtonFour/>
        </div>
        </div>
        
        )
}