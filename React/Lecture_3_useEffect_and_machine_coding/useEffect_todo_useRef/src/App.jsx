import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from "./components/Todo";
import GetData from './components/useEffects/1_GetData';
import UseEffectAllCases from './components/useEffects/2_UseEffect_cases';
import StopWatch from './components/StopWatch';
function App() {
  const [count, setCount] = useState(0);
  return (
    // <Todo></Todo>
    // <GetData></GetData>
    // <UseEffectAllCases></UseEffectAllCases>
    <>
    <button> Delete Stopwatch</button>
    <StopWatch></StopWatch>
    </>
  )
}

export default App
