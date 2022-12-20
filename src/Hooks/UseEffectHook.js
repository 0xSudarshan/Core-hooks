import React, { useEffect } from "react";

const UseEffectHook = ()=>{
    useEffect(()=>{
        // console.log("render")
        return()=>{
            // console.log( "clean up ")
        }
    },[])
    return(
        <></>
    )
    
}
export default UseEffectHook