import React, { useEffect, useLayoutEffect }  from "react";
const UseLayoutEffectHook = ()=>{
    useEffect(()=>{
        console.log("effect")
    })
    useLayoutEffect(() => {
      console.log("layout effect")
    },[])
    return(
        <>
        <h1>Layout Effect</h1>
        </>
    )

}
export default UseLayoutEffectHook