// to create a slice -> redux;
import { createSlice } from "@reduxjs/toolkit";
//1
const TodoSlice = createSlice({
    // dev tools
    name: "todo",
    // set State 
    initialState: {
        tasks: []
    },
    // all the update logic 
    reducers: {
        addTask: (state, descObj) => {
        const allTask = [...state.tasks, descObj.payload];
        state.tasks=allTask;
        }
    }
});
export default TodoSlice;