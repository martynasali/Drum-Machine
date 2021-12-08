import { useState } from "react";
import React  from 'react';
import * as Tone from 'tone'


const buttonClass = " h-8 p-6 w-8 rounded-lg bg-gray-700 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassSlected = " h-8 p-6 w-8 rounded-lg bg-yellow-400 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400";
const buttonClassFour = " h-8 p-6 w-8 rounded-lg bg-gray-500 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";

export default function Buttons ({buttons, sound}) 
{

        
    
    function Button ({number, sound})
    {
        const [btnClass, setBtnClass] = useState(buttonClass)
        
        function setClass () {
            
            if(btnClass == buttonClass )
            {
                setBtnClass(buttonClassSlected)
                buttons[number].isOn = sound
                
            }
            else
            {
                setBtnClass(buttonClass)
                buttons[number].isOn = null 
            }
            
        }
        return <div onClick={setClass}  className={btnClass} >{number}{sound}</div> 
        
    }
    function ButtonFour ({number, sound})
    {
        const [btnClassFour, setBtnClassFour] = useState(buttonClassFour)
        
        function setClassFour () {

            if(btnClassFour == buttonClassFour )
            {
                setBtnClassFour(buttonClassSlected) 
                buttons[number].isOn = sound 
            }
            else
            {
                setBtnClassFour(buttonClassFour)
                buttons[number].isOn = null
                console.log("hi",buttons);
            }
            
        }
        return <div onClick={setClassFour}  className={btnClassFour} >{number}{sound}</div> 

    }
console.log("labas", buttons);

return (
<div className="flex justify-center">
{buttons.map(b=><>
{(b.index+1) % 4 == 0? <ButtonFour sound={sound} number={b.index}/> : <Button sound={sound} number={b.index}/>}
</>)}
</div>
)



    


}

