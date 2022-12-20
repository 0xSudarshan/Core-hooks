import React, { forwardRef, useImperativeHandle, useState } from "react";

const ButtonUI = forwardRef(({props,ref})=>{
    const [toggle , setToggle] = useState(false)
    useImperativeHandle(ref,()=>({
        alterToggle(){
            setToggle(prevToggle => !prevToggle);
        }

    }));
    return(
        <>
        <button>child</button>
        {toggle ? <i >showcase UseimperativeHandle</i> : null}
        
        </>
    )
})
export default ButtonUI;