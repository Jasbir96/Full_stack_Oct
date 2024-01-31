import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import TodoSlice from './TodoSlice';
import UserSlice from './User/UserSlice';

// adding async middlewares
const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        TodoState: TodoSlice.reducer,
        UserState: UserSlice.reducer
    }
})
export default store;