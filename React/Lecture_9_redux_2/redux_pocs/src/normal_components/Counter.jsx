import React, { useState } from 'react'

function Counter() {
    // 3.a state management
    const [count, setCount] = useState(0);
    
    // 2. bussiness logic 
    const handleIncrement = () => {
        console.log("inc");
        // 3.b
        setCount(count + 1);
    }
    
    const handleDecrement = () => {
        console.log("dec");
        //3.c
        setCount(count - 1);
    }
    return (
        // UI -> JSX
        <div >
            <button onClick={handleIncrement}>+</button>
            <h3>{count}</h3>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default Counter;



