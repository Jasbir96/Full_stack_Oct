import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./normal_components/Counter";
import Redux_Counter from "./redux_components/Redux_Counter";

import { Provider } from "react-redux";
// import store from "./redux/store";
import toolkitStore from "./redux_toolkit/store";
import Toolkit_Counter from "./redux_toolKit_components/Toolkit_Counter"
function App() {
  return (
    <>
      <h1>Redux POCS</h1>
      {/* <h2>Normal Components</h2>
      <Counter></Counter> */}
      <h2>Redux Components</h2>
      {/* <Provider store={store}>
        {console.log("App")}
      <Redux_Counter></Redux_Counter>
      </Provider> */}

      <h3>Toolkit</h3>
      <Provider store={toolkitStore}>
        <Toolkit_Counter></Toolkit_Counter>
      </Provider>
    </>
  )
}

export default App
