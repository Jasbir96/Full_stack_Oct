// rfce
import React, { useState } from 'react'

function Todo() {
// managing the state
    const [tasks, setTasks] = useState([]);

    const [value,setValue]=useState("");
    const AddTask = (value) => {
        const allTask = [...tasks, value];
        setTasks(allTask);
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
                        AddTask(value);
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

export default Todo;