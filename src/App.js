import './App.css';
import UseEffectHook from './Hooks/UseEffectHook';
import UseLayoutEffectHook from './Hooks/UseLayoutEffectHook';
import UseReducerHook from './Hooks/UseReducerHook';
import UseRefHook from './Hooks/UseRefHook';
import UseStateHook from './Hooks/UseStateHook';
import  UseImperativeHook from './Hooks/UseImperativeHook'

function App() {
  return (
    <>
    <UseStateHook></UseStateHook>
    <UseReducerHook></UseReducerHook>
    <UseEffectHook></UseEffectHook>
    <UseRefHook></UseRefHook>
    <UseLayoutEffectHook></UseLayoutEffectHook>
    <UseImperativeHook></UseImperativeHook>
    
    </>
  );
}

export default App;
