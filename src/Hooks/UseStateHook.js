import React, { useState } from "react";

const UseStateHook=()=>{
    const [text, setText] = useState("");
    
    const textHandleChange = (event)=>{
        // console.log("change event",event.target.value)
        setText((prevText)=>prevText=event.target.value)
    }

    return (
        <>
        <input placeholder="type somehting.." onChange={textHandleChange}></input>
        <div>{text}</div>
        </>
    )

}
export default UseStateHook