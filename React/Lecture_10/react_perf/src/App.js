import logo from './logo.svg';
import './App.css';
import React, { useState, lazy, Suspense } from 'react';
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
const Products = lazy(() => { return import("./pages/Product") });
const About = lazy(() => { return import("./pages/About") });
function App() {
  const [posts, setPosts] = useState([]);
  const handleClick = () => {
    import("./posts.js").then((module) => {
      setPosts(module.default);
    })
  }
  return (
    <div className="App">
      <h1>Perf Examples</h1>
      <button onClick={handleClick}> Add Data</button>
      <ul >{
        posts.map((post, idx) => {
          return <p key={idx}>{JSON.stringify(post)}</p>
        })
      }</ul>
      <Suspense fallback={<h2>...Loading</h2>}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
