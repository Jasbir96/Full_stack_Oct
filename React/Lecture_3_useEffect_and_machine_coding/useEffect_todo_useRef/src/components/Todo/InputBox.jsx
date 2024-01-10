import React, { useState } from 'react'

function InputBox({ AddTask }) {
    const [value, setValue] = useState("");
    return (
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
    )
}

export default InputBox