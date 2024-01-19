import React, { useReducer, useState } from 'react';
// single place to update , set the state 
const counterReducer = (state, action) => {
    switch (action) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "INCREEMENTBY5":
            return state + 5;
        case "DECREMENTBY5":
            return state - 5;
        default:
            return state
    }

}

const initalState = 0
const CounterUseReducer = () => {
    // another of updating the state 
    const [cState, dispatch] = useReducer(counterReducer, initalState);
    // Function to increment the counter by 1
    return (
        <div>
            <p>Counter: {cState}</p>
            <button onClick={() => { dispatch("INCREMENT") }}>Increment</button>
            <button onClick={() => { dispatch("DECREMENT") }}>Decrement</button>
            <button onClick={() => { dispatch("INCREEMENTBY5") }}>Increment by 5</button>
            <button onClick={() => { dispatch("DECREMENTBY5") }}>Decrement by 5</button>
        </div>
    );
};


export default CounterUseReducer;



