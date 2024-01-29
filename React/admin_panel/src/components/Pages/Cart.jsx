import React from 'react'
import { useSelector } from "react-redux"
import Product from '../Components/Product';
// print it 
function Cart() {
    const cartList = useSelector((store) => {
        return store.cartState.cartItemsArr;
    })
    return (
        <main className="product_wrapper">
            <>{cartList.length == 0 ? <h1>Nothing here</h1> :
                <>{
                    cartList.map((product, idx) => {
                        return (<Product
                            product={product}
                            pQUantity={product.pQUantity}
                        ></Product>)
                    })
                }</>
            }</>
        </main>
    )
}

export default Cart