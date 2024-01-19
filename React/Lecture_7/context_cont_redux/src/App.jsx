import { useState } from 'react'
import Context from './poc/context/Basic_Context'
import Home from './poc/context/themeManager/Home'
import ThemeContext from './poc/context/themeManager/ThemeContext'
import Normal_UseSate from "./poc/usereducer/Normal_UseState";
import CounterUseReducer from "./poc/usereducer/UserReducer";
function App() {
  return (
    <>
      {/* <Context></Context> */}
     {/* <ThemeContext>
      <Home></Home>
     </ThemeContext> */}
{/* <Normal_UseSate></Normal_UseSate> */}
<CounterUseReducer></CounterUseReducer>
    </>
  )
}
export default App;
/***
 * 1. context APi -> theme change , auth , localization
 * usecase i simple -> it is used to store the props that are global (theme, auth , localization,cart)
 * **/ 

// 
