
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Pages/Home";
import NavBar from "./components/Components/NavBar";
import Profile from './components/Pages/Profile';
import ProductDetails from './components/Pages/ProductDetails';
import PageNotFound from "./components/Pages/PageNotFound";
import Cart from "./components/Pages/Cart";


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}> </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}> </Route>
      </Routes>
   
    </>
  )
}

export default App
