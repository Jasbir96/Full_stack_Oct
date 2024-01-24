// rfce
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';


import TodoSlice from '../redux_toolkit/TodoSlice';
const actions = TodoSlice.actions;

function ToolkitTodo() {
    // accessing the state
    const tasks = useSelector((store) => {
        console.log("todoState",store.TodoState)
        return store.TodoState.tasks;
    })
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const AddTask = () => {
        dispatch(actions.addTask(value));
    }
    return (
        <>
            <div className="input_box">
                <input type="text"
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                />
                <button onClick={
                    () => {
                        AddTask();
                        setValue("");
                    }
                }
                >Add</button>
            </div>
            <div className="task_list">
                <ul>{tasks.map((task, idx) => {
                    return <li key={idx}>{task}</li>
                })}</ul>
            </div>

        </>
    )
}

export default ToolkitTodo;