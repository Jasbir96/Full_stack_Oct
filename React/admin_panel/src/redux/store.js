import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlice';
const store = configureStore({
    reducer: {
        cartState: cartSlice.reducer,
    }
})
export default store;