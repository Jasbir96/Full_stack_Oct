import React, { useEffect, useState, useRef } from 'react'

// useRef -> it is used to store data across multiple re-renders
function StopWatch() {
    const [time, setTime] = useState(0);
    const id = useRef();
    const [currentState, setCurrentState] = useState(false);
    // 1 solution -> failed
    // setInterval(() => {
    //     setTime(time + 1);
    // }, 1000);
    //2. 
    useEffect(() => {
        return () => { clearInterval(id.current) };
    }, [])

    const startHandler = () => {
        if (currentState == true) {
            return;
        }
        
        id.current = setInterval(() => {
            // 2
            // setTime(time + 1);
            // when you want to update next state with the help of
            // prev state -> cb based syntax
            setTime((time) => { return Number(time) + 1; });
        }, 1000);
        setCurrentState(true);
    }
    const pauseHandler = () => {
        // clear the interval
        clearInterval(id.current);
        setCurrentState(false);
    }

    const StopHandlder = () => {
        // clear the interval
        // /reset the count as well
        clearInterval(id.current);
        setTime(0);
        setCurrentState(false);
    }

    return (
        <><h2>Stop Watch</h2>
            <h3>{time}</h3>
            <button onClick={startHandler}>Start</button>
            <button onClick={pauseHandler}>Pause</button>
            <button onClick={StopHandlder}>Stop</button>
        </>
    )
}

export default StopWatch