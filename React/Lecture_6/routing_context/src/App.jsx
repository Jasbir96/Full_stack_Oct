
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Pages/Home";
import NavBar from "./components/Components/NavBar";
import Profile from './components/Pages/Profile';
import ProductDetails from './components/Pages/ProductDetails';
import PageNotFound from "./components/Pages/PageNotFound";

import Routing from './poc/Routing';
import Context from "./poc/Context"
function App() {
  return (
    <>
      {/* <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}> </Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}> </Route>
      </Routes> */}
      {/* <Home></Home> */}
      {/* <Routing></Routing> */}
      <Context></Context>
    </>
  )
}

export default App
