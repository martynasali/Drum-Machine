import { useState } from "react";
import React  from 'react';

const buttonClass = " flex-1 h-8 p-6 w-8 rounded-lg bg-gray-700 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassFour = " flex-1 h-8 p-6 w-8 rounded-lg bg-gray-500 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassSlected = " flex-1 h-8 p-6 w-8 rounded-lg bg-yellow-400 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400";
const song = []
let index = 0
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

function ButtonFour ({number})
{
    const [btnClass, setBtnClass] = useState(buttonClassFour)
    function setClass () {
    if (btnClass == buttonClass || btnClass == buttonClassFour){
        setBtnClass(buttonClassSlected)
    }else{
        setBtnClass(buttonClassFour)
    }
  }
    return <div class={btnClass} onClick={setClass}>{number}</div> 
}

export default function SoundButton (){
    return(
        
        <>
        <div className="flex flex-row"> 
        <Button number={1}/>
        <Button number={2}/>
        <Button number={3}/>
        <ButtonFour number={4}/>
        <Button number={5}/>
        <Button number={6}/>
        <Button number={7}/>
        <ButtonFour number={8}/>
        <Button number={9}/>
        <Button number={10}/>
        <Button number={11}/>
        <ButtonFour number={12}/>
        <Button number={13}/>
        <Button number={14}/>
        <Button number={15}/>
        <ButtonFour number={16}/>
        </div>    
        </>
        )
}                                                                                                