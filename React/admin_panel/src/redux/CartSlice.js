// to create a slice -> redux;
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//1
const cartSlice = createSlice({
    name: "cartName",
    // set State 
    initialState: {
        /****
         * {
        image,
        name,
        price,
        pQUantity,
    }
         * 
         * */
        cartItemsArr: [
        ],
        cartDescQuantity: 0
    },
    // all the update logic 
    reducers: {
        // adding the first Elem, updating it's quantity
        addtoCart: (state, action) => {
            // input  -> productDetails
         
         
            // algorithm -> ??
            //0 . adding cart count
            state.cartDescQuantity++;
            // 1. get thr product
            const productToBeAdded = action.payload;
            // check if in  the cart
            const requiredProduct = state.cartItemsArr
                .find((cProduct) => { return cProduct.id == productToBeAdded.id });
            if (requiredProduct == undefined) {
                //quanityt
                productToBeAdded.pQUantity = 1;
                state.cartItemsArr.push(productToBeAdded)
            } else {
                // already present
                requiredProduct.pQUantity++;
            }
        }
        ,
        removeFromCart: (state, action) => {
            const productToBeDeleted = action.payload;
            // idx the elem 
            const productIdx = state.cartItemsArr
                .findIndex((cProduct) => { return cProduct.id == productToBeDeleted.id });

            if (productIdx == -1) {
                console.log("Do nothing");
            } else {
                let product = state.cartItemsArr[productIdx];
                if (product.pQUantity == 1) {
                    // removing that product  from the carts array
                    state.cartItemsArr.splice(productIdx, 0);
                    state.cartDescQuantity--;

                } else {
                    state.cartItemsArr[productIdx].pQUantity--;
                    state.cartDescQuantity--;
                }
            }
        }

    }
});
export default cartSlice;