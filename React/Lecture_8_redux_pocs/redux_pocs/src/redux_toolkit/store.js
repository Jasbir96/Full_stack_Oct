import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
const store = configureStore({
    reducer:counterSlice.reducer
})
export default store;