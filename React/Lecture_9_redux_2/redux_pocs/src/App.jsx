import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./normal_components/Counter";

import { Provider } from "react-redux";
// import store from "./redux/store";
import toolkitStore from "./redux_toolkit/store";
import Toolkit_Counter from "./redux_toolKit_components/Toolkit_Counter"
import ToolkitTodo from './redux_toolKit_components/ToolkitTodo';
function App() {
  return (
    <>
      <h1>Redux POCS</h1>
      {/* <h2>Normal Components</h2>
      <Counter></Counter> */}


      <h3>Toolkit</h3>
      <Provider store={toolkitStore}>
        <Toolkit_Counter></Toolkit_Counter>
        <ToolkitTodo></ToolkitTodo>
      </Provider>
    </>
  )
}

export default App
