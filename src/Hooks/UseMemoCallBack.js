import React, { useMemo, useState } from "react";
const UseMemoHook  = ()=>{
    const[count,setCount] = useState(0)
    const checkEvenOrOdd = useMemo((count)=>{
            return count%2===0
        
    })
    
    const clickHandle = ()=>{
        setCount((prev)=>prev = count+1)
        // console.log("memo")
    }
    
    return (
        <>
        <button onClick={clickHandle}>button1</button>
        <p>{count}</p>
        <p>{checkEvenOrOdd?'even':'odd'}</p>

        
        <button>button2</button>
        </>
    )

}
export default UseMemoHook