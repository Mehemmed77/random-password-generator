import { useState } from "react";

export default function PasswordLengthComponent({ length, setLength }){
    return(
        <>
        <div className="lengthInputContainer">
            <p>Character Length</p>
            <span id='length'>{length}</span>
        </div>

        <div className='rangeContainer'>
            <input type="range" min={0} max={100} defaultValue={0} onChange={(e) => {
                let l = Math.round(e.target.valueAsNumber / 5);
                setLength(l)
            }}/>
        </div>
        </>
    )
}