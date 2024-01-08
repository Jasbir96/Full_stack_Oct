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
    return (
        <>
            <InputBox AddTask={AddTask}></InputBox>
            <List tasks={tasks}></List>

        </>
    )
}

export default Todo;