import React, { useRef } from "react";

const UseRefHook = ()=>{
    const inputRef = useRef()
    const inputHandleChange = ()=>{
    console.log(inputRef.current.value)

    }

    return(
        <>
        <input ref={inputRef} onChange = {inputHandleChange}></input>
        </>
    )
}
export default UseRefHook