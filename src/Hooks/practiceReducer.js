import { cleanup } from "@testing-library/react";
import React, { useEffect, useLayoutEffect, useReducer } from "react";
const PracticeReducer = ()=>{
    const GLOBALSTATES = {
        state1:"INCREMENT",
        state2:"SETAGE",
        state3:"SETGENDER"
    }
    const reducer =  (state,action)=>{
        console.log("state",state,"action",action)
        switch (action.type) {
            case GLOBALSTATES.state1:
                return{count:state.count+1}
            case GLOBALSTATES.state2:
                return {count:state.count,age:"20"}
            case GLOBALSTATES.state3:
                return {count:state.count,age:state.age,gender:"male"}

            
        
            default:
                return state
        }
        
        
    }
    useLayoutEffect(()=>{
        console.log("havent dunked yet")
    })
    useEffect(()=>{
        console.log("dunk useeffectcalled")
        return ()=>{
            console.log("clean up ")
        }
    },[])
    const[state,dispatch] = useReducer(reducer,{count:0,age:"",gender:""})
    const clickHandle = ()=>{
        console.log("dude practising reducers")
        dispatch({type:GLOBALSTATES.state1})
        dispatch({type:GLOBALSTATES.state2})
        dispatch({type:GLOBALSTATES.state3})
    

    }
    return(
        <>
        <button onClick={clickHandle}>hare</button>
        <div>{state.count}</div>
        <div>{state.gender}</div>
        <div>{state.age}</div>
        </>
    )
}
export default PracticeReducer