import React, { useReducer } from 'react';

// Reducer function to manage state transitions based on actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if the item is already in the cart
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If the item is already in the cart, update its quantity
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                // If the item is not in the cart, add it
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }

        case 'REMOVE_FROM_CART':
            // Remove the item from the cart
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };

        default:
            return state;
    }
};



const initialState = {
    cart: [
        { id: 1, name: 'Product A', quantity: 2 },
        { id: 2, name: 'Product B', quantity: 1 },
    ],
};
const ShoppingCart = () => {
    // Initial state for the shopping cart with seed data
    // useReducer hook to manage state transitions
    const [state, dispatch] = useReducer(cartReducer, initialState);
    
    const addToCart = item => {
        // Dispatch an action to add the item to the cart
    
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = itemId => {
        // Dispatch an action to remove the item from the cart
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {state.cart.map(item => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity}{' '}
                        <button onClick={() => addToCart(item)}>+</button>{' '}
                        <button onClick={() => removeFromCart(item.id)}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;

