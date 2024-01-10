import React, { useState, useEffect } from 'react';

function UseEffectAllCases() {
    const [value, setValue] = useState("");
    const [taskList, setTaskList] = useState([]);
    const setTask = function () {
        // /
        let newTaskList = [...taskList];
        newTaskList.push({
            id: Date.now(),
            task: value
        })
        setTaskList(newTaskList);
        setValue("");
    }
    const removeTask = function (id) {
        let restOftasks = taskList.filter(function (taskObject) {
            return taskObject.id != id;
        })
        setTaskList(restOftasks);
    }

    /****
     *  1. useEffect ->  with empty dependency array
     *  * a. it runs it's handler only once in it's life just after first render of the component
     *  *b. cleanup function -> on unmount
     * /
    // function c1() {
    //     console.log(" I am empty depend arr case")
    // }
    // useEffect(c1, []);

    /****
     *  2. useEffect ->  without dependcy array
     *  a.  it runs it's handler only once in it's life just after every  render/rerender of the component
     *  b. cleanup -> before next  re-render
     *  */
    // function cleanupCase2() {
    //     console.log("Cleaning up for case 2");
    // }
    // function c2() {
    //     console.log(" case 2 handlerAFter every render");

    // }
    // useEffect(c2);

    /****
     * 3. useEffect -> with some elements in dependecy array
     * a. it will execute it's handler after the first render and
     *  whenever it's dependency  array updates
     * b. CleanUp->before next handler is called -> cleanup is done
     * */
    //     function cleanupCase3() {
    // console.log("I am conditonal cleanup")
    //     }
    //     // did something
    //     function c3() {
    //         console.log("in first render and then conditionally");
    //         return cleanupCase3;
    //     }
    //     useEffect(c3, [taskList]);
    console.log("render main compoenet");
    console.log("``````````````````````````````");
    return (
        <>
            <div>
                <input type="text" placeholder="Input Task" value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}></input>
                <button onClick={setTask}>Add Task </button>
            </div>

            {taskList.map((taskObj) => {
                return (
                    <Task key={taskObj.id} id={taskObj.id} task={taskObj.task}
                        removeTask={removeTask}></Task>)
            })}
        </>
    )
}



function Task(props) {
    let { id, task, removeTask } = props;
    console.log("task is also rendred", task)
    useEffect(() => {
        console.log("Task list useEffect ran ->", task);
        return function () {
            console.log(task, "removed");
        }
    }, []);
    return (

        <li
            onClick={() => {
                removeTask(id)
            }}
        >
            {task}
        </li>
    )
}
export default UseEffectAllCases;


// 1. `useEffect(fn,[])` -> Data Fetching, Auto save after a given interval
//    2. `useEffect(fn)` -> resize aware(it can only be added to window as resize is only available on window not on dom)
    // 3.  `useffect(fn,[dep1,dep2])` -> this just optimized version of the above case , timers