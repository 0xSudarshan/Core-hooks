import React, { useState } from "react";

const UseStateHook=()=>{
    let show = {
        countNumber :100
    }
    const [text, setText] = useState("");
    const [shows,setShows] = useState(show)
    // const [count,setCount] = useState(0)
    
    const textHandleChange = (event)=>{
        // console.log("change event",event.target.value)
        setText((prevText)=>prevText=event.target.value)
    }
    const clickHandle = () =>{
        // setShows({...shows,countNumber:3,showDate:new Date()+1})
        setShows((prev)=>prev= {countNumber:shows.countNumber+4})
        console.log(shows.countNumber+4)
        
        // setCount(count+1)
        // console.log(count)
        
        // console.log(shows.showDate)
        
    }
    // console.log(shows)

    return (
        <>
        <input placeholder="type somehting.." onChange={textHandleChange}></input>
        <button onClick={clickHandle}>clicked</button>
        <div>{shows.countNumber}</div>
        {/* <p style={{color :"gray"}}>{count}</p> */}

        </>
    )

}
export default UseStateHook