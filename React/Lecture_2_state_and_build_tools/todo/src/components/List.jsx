import React from 'react'

function List({tasks}) {
    return (
        <div className="task_list">
            <ul>{tasks.map((task, idx) => {
                return <li key={idx}>{task}</li>
            })}</ul>
        </div>
    )
}

export default List