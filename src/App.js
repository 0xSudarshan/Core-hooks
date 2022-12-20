import './App.css';
import UseEffectHook from './Hooks/UseEffectHook';
import UseReducerHook from './Hooks/UseReducerHook';
import UseStateHook from './Hooks/UseStateHook';

function App() {
  return (
    <>
    <UseStateHook></UseStateHook>
    <UseReducerHook></UseReducerHook>
    <UseEffectHook></UseEffectHook>
    </>
  );
}

export default App;
