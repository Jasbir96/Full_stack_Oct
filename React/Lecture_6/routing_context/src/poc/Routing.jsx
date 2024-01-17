import React from 'react'
import {
    Route, Routes, Link,
    Navigate
} from "react-router-dom";
function Routing() {
    return (
        <>
            <h2>Routing Example</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/home" >Home Page </Link>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/listing">Listing</Link></li>
                </ul>
            </nav>
            {/* switch case ->  either of these comppnenta re going
            to be rendered  */}
            <Routes>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/listing" element={<Listing></Listing>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
                {/* 404 page not found -> wild card */}
                <Route path="*" element={<PageNotFound></PageNotFound>}> </Route>
            </Routes>
        </>
    )
}

function About() {
    return (
        <h2>About Page</h2>
    )
}
function Home() {
    return <h3>I am Home Page</h3>
}
function Listing() {
    return <h3>I am Listing Page</h3>
}
function PageNotFound() {
    return <h3>Page Not found</h3>;
}

export default Routing;

/***
 * 1. redirect -> done
 * 2. Links work -> done 
 * 3. Template Route
 * 4. Nested ROutes 
 * 6. Programmatic redirects 
 * 5. custom Routes (Auth )
 *          private Routes 
 *          conditionl Routes 
 *      
 * **/ 