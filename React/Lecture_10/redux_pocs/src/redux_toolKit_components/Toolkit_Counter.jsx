import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import counterSlice from '../redux_toolkit/CounterSlice';
const actions = counterSlice.actions;

function Counter() {
    // reading 
    const count = useSelector((store) => {
        return store.counterState.count;
    });
    const [incCount,setIncCount]=useState(0);

    const dispatch = useDispatch();
    // const [incCount, setIncCount] = useState();
// bussiness logic 
    const handleIncrement = () => {
        dispatch(actions.increment());
    }
    const handleDecrement = () => {
        dispatch(actions.decrement());
    }
    const updateByN=()=>{
        
    }
    return (
        // UI
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


