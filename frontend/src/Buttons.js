import { useState } from "react";
import React  from 'react';
import * as Tone from 'tone'


const buttonClass = " h-8 p-6 w-8 rounded-lg bg-gray-700 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";
const buttonClassSlected = " h-8 p-6 w-8 rounded-lg bg-yellow-400 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400";
const buttonClassFour = " h-8 p-6 w-8 rounded-lg bg-gray-500 border-4 border-border-gray-500 border-opacity-100 hover:border-pink-400 hover:bg-gray-800";

export default function Buttons ({buttons}) 
{

        
    
    function Button ({number})
    {
        const [btnClass, setBtnClass] = useState(buttonClass)
        
        function setClass () {
            
            if(btnClass == buttonClass )
            {
                setBtnClass(buttonClassSlected)
                buttons[number].isOn = "C4" 
                
            }
            else
            {
                setBtnClass(buttonClass)
                buttons[number].isOn = null 
            }
            
        }
        return <div onClick={setClass}  className={btnClass} >{number}</div> 
        
    }
    function ButtonFour ({number})
    {
        const [btnClassFour, setBtnClassFour] = useState(buttonClassFour)
        
        function setClassFour () {

            if(btnClassFour == buttonClassFour )
            {
                setBtnClassFour(buttonClassSlected) 
                buttons[number].isOn = "C4" 
            }
            else
            {
                setBtnClassFour(buttonClassFour)
                buttons[number].isOn = null
                console.log("hi",buttons);
            }
            
        }
        return <div onClick={setClassFour}  className={btnClassFour} >{number}</div> 

    }
console.log("labas", buttons);

return (
<div className="flex justify-center">
{buttons.map(b=><>
{(b.index+1) % 4 == 0? <ButtonFour number={b.index}/> : <Button number={b.index}/>}
</>)}
</div>
)



    


}

