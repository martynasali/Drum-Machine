import { useState } from "react";
import React  from 'react';
import * as Tone from 'tone'


const buttonClass = " h-8 p-6 w-8 rounded-lg bg-gray-700 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassSelect = " h-8 p-6 w-8 rounded-lg bg-yellow-400 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400";
const buttonClassFour = " h-8 p-6 w-8 rounded-lg bg-gray-500 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";

export default function Buttons ({buttons, sound, setbutton})
{


    
    function Button ({number, sound, setButton })
    {
        const [btnClass, setBtnClass] = useState(buttonClass)

        function setClass () {
            if(btnClass === buttonClass )
            {
                setBtnClass(buttonClassSelect)
                buttons[number].isOn = sound
            }
            else
            {
                setBtnClass(buttonClass)
                buttons[number].isOn = null
            }
        }
        return (buttons[number].isOn == null)? <div onClick={setClass}  className={btnClass} ></div>: <div onClick={setClass}  className={buttonClassSelect} ></div>
        
    }
    function ButtonFour ({number, sound})
    {
        const [btnClassFour, setBtnClassFour] = useState(buttonClassFour)
        
        function setClassFour () {

            if(btnClassFour === buttonClassFour )
            {
                setBtnClassFour(buttonClassSelect)

                buttons[number].isOn = sound
            }
            else
            {
                setBtnClassFour(buttonClassFour)
                buttons[number].isOn = null
                console.log("hi",buttons);
            }
            
        }
        return (buttons[number].isOn == null)?<div onClick={setClassFour}  className={btnClassFour} ></div>: <div onClick={setClassFour}  className={buttonClassSelect}></div>

    }
console.log("labas", buttons);

return (
<div className="flex justify-center">
{buttons.map(b=><>
{(b.index+1) % 4 === 0? <ButtonFour  sound={sound} number={b.index}/> : <Button sound={sound} number={b.index}/>}
</>)}
</div>
)
}

