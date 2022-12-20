import React, { useRef } from "react";
import ButtonUI from "./ButtonUI/Button";

const UseImperativeHook = ()=>{
    const buttonRef = useRef()
    return(
        <>
        <button onClick={()=>{console.log(buttonRef.current)}}>Parent</button>
        <ButtonUI ref={buttonRef}></ButtonUI>
        </>
    )
}
export default UseImperativeHook