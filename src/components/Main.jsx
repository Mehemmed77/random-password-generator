import React, { useState } from 'react';
import PasswordComponent from './passwordComponent';
import PasswordLengthComponent from './PasswordLengthComponent';
import BtnComponent from './BtnComponent';
import CheckboxComponent from './CheckboxComponent';
import StatesComponent from './StatesComponent';

export default function Main(){    
    const [counter, setCounter] = useState(0);
    const [length, setLength] = useState(0);

    const [copied, setCopied] = useState("");
    const [password, setPassword] = useState("P4$5W0rD!")

    const [checkboxes, setCheckboxes] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false
    });
    
    const passwordStates = new Map([ [1, "TOO WEAK!"], [2, "WEAK"], [3, "MEDIUM"], [4, "STRONG"]]);

    return(
        <>
        <div className="titleContainer">
                Password Generator
            </div>

        <PasswordComponent copied={copied} password={password} setCopied={setCopied}></PasswordComponent>

        <div className="mainComponent">
            <div className="innerContainer">

            <PasswordLengthComponent length={length} setLength={setLength} ></PasswordLengthComponent>

            <CheckboxComponent setCheckboxes={setCheckboxes} setCounter={setCounter}></CheckboxComponent>

            <StatesComponent passwordStates={passwordStates} counter={counter}></StatesComponent>

            <BtnComponent setPassword={setPassword} checkboxes={checkboxes} length={length}></BtnComponent>
            </div>
        </div>
        </>
    )
}