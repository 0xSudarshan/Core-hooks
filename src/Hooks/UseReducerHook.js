import React, { useReducer } from "react";
const GLOBALSTATE = {
    state1 :"INCREMENT",
    state2 : "TOGGLE"
}
const UseReducerHook = () => {
  const reducer = (state, action) => {
    // console.log("action",action)
    switch (action.type) {
      case GLOBALSTATE.state1:
        return { count: state.count + 1, showText: state.showText };
      case GLOBALSTATE.state2:
        return { count: state.count, showText: !state.showText };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <>
      <h3>{state.count}</h3>
      <button onClick =  {()=>{dispatch({ type: GLOBALSTATE.state1 }); dispatch({ type: GLOBALSTATE.state2 })}}>click me!</button>
      <p>{state.showText ? "hi i am visible " : null}</p>
    </>
  );
};
export default UseReducerHook;
