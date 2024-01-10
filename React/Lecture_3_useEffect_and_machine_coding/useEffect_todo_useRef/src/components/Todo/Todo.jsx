// rfce
import React, { useState } from 'react'
import InputBox from './InputBox';
import List from './List';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const AddTask = (value) => {
        // alert("Added new task")
        // take input -> something-> add a task / alert 
        const allTask = [...tasks, value];
        setTasks(allTask);
    }
    const deleteTask = (task) => {
        const filteredTasks = tasks.filter((CTask) => { return CTask !== task; });
        setTasks(filteredTasks);
    }
    return (
        <>
            {/* if children want to talk to parent -> 
        1. parent will pass a fn as a prop
        2. then that children will call the function pass the
        message in params
        */}
            <InputBox AddTask={AddTask}></InputBox>
            {/* if parent want to talk children -> pass the prop */}
            <List tasks={tasks} deleteTask={deleteTask}></List>

        </>
    )
}

export default Todo;