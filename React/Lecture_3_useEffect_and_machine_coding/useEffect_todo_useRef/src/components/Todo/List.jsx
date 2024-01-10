import React from 'react'

function List({ tasks, deleteTask }) {
    return (
        <div className="task_list">
            <ul>{tasks.map((task, idx) => {
                return <li key={idx}>{task} <button
                    onClick={() => { deleteTask(task) }}
                >X</button>
                </li>
            })}</ul>
        </div>
    )
}

export default List