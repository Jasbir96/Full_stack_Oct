import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"

function Counter() {
    // reading 
    const count = useSelector((store) => store.count);
    const [incCount, setIncCount] = useState();
    // update 
    const dispatch = useDispatch();

    console.log("counter", count);
    const handleIncrement = () => {
        // setCount(count + 1);
        dispatch({ type: "inc_count" })
    }
    const handleDecrement = () => {
        // setCount(count - 1);
        dispatch({ type: "dec_count" })

    }

    const updateByN = () => {
        dispatch({type: "inc_by_n",payload: incCount})
    }
    return (
        <div >
            <input value={incCount}
                onChange={(e) => {
                    setIncCount(e.target.value)
                }}
            ></input>
            <button
                onClick={updateByN}
            >Submit</button>
            <div>

            <button onClick={handleIncrement}>+</button>
            <h3>{count}</h3>
            <button onClick={handleDecrement}>-</button>
            </div>

        </div>
    )
}

export default Counter;

/***
 * components -> UI
 * hook -> logic
 * redux -> global state managment
 * 
 * **/


