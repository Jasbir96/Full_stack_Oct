import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from "./components/Todo";
import GetData from './components/useEffects/GetData';
function App() {
  const [count, setCount] = useState(0)
  return (
    // <Todo></Todo>
    <GetData></GetData>
  )
}

export default App
