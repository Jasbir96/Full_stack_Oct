import React, { useState, useEffect } from 'react'
import {
    Route, Routes, Link,
    Navigate, useParams
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
                <Route path="/about/*" element={<About></About>}></Route>
                {/*  /users/*/}
                {/* template routes -> dynamic routes  */}
                <Route path="/user/:id" element={<User ></User>}> </Route>
                <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
                {/* 404 page not found -> wild card */}
                <Route path="*" element={<PageNotFound></PageNotFound>}> </Route>
            </Routes>
        </>
    )
}
function About() {
    return (
        <>
            <h2>About Page</h2>
            <Routes>
                <Route path="/company"
                    element={<Company />}> </Route>
                <Route path="/founders"
                    element={<Founder></Founder>}> </Route>
            </Routes>
        </>
    )


}
function Company() {
    return <h4> We are  a good firm</h4>
}
function Founder() {
    return <h4> We are Nice People </h4>
}
function Home() {
    return <h3>I am Home Page</h3>
}
function Listing() {
    return <h3>I am Listing Page</h3>
}

function User(props) {
    // while giving an object -> key as the the id and value as whatever we have passed
    let params = useParams();
    let [user, setUser] = useState(null);

    // https://fakestoreapi.com/users/2
    useEffect(() => {
        (async function () {
            const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`)
            const userData = await resp.json();
            console.log(userData);
            setUser(userData);
        })()
    }, [])
    return <>
        {user == null ? <h3>...loading</h3> : <>
            <h4>User Name: {user.username}</h4>
            <h3> Name: {user.name.firstname + " " + user.name.lastname}</h3>
            <h4> Phone: {user.phone}</h4>
        </>}
    </>

}



function PageNotFound() {
    return <h3>Page Not found</h3>;
}

export default Routing;

/***
 * 1. redirect -> done
 * 2. Links work -> done 
 * 3. Template Route -> done 
 * 4. Nested ROutes -> done
 * 
 * 6. Programmatic redirects -> done  useNavigate
 * 5. custom Routes (Auth )
 *          private Routes 
 *          conditionl Routes 
 *      
 * **/ 