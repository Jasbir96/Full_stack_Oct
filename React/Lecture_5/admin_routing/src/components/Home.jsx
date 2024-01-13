import React, { useEffect, useState } from 'react'
import useFetchList from '../Hooks/useFetchList';
import Product from './Components/Product';
function Home() {
    /***
     * 1. Static UI ->  
     *      Identify the components 
     *          -> a.) html ,css 
     *          -> set your state variables
     *          -> add all the conditional logic
     *          
     * 2. Logic get that products-> Fakestore API
     * 3. searching , Deletion
     *      state -> is single source of truth for the UI -> update th State -> thate element will not come back
     *      a.) Deletion  -> 
     *      b.) searching -> i want that element back when i cahnge the search term -> hide the element(How ??) 
     * Learning : seraching , sorting , filtering , categorization  you can't update the state 
     * sorting -> MUI icons(React)
     * 4. pagination
     * 5. categorization (filter)
     * **/

    /**
     * Products : https://fakestoreapi.com/products
     * Categroeis : https://fakestoreapi.com/products/categories
     * **/

    /**
     * 1. state variable -> listing all the products
     * 2.  how should i get the products : 
     * **/
    // custom Hook
    const [productList, loader, setProductList] = useFetchList();
    const [searchTerm, setSearchTerm] = useState("");
    const deleteProduct = (cId) => {
        const restOfProducts = productList.filter((product) => {
            return cId != product.id;
        })

        setProductList(restOfProducts);
    }
    /***
     * filtering -> productList -> filteredProduct
     * */
    let filteredList = productList;
    if (searchTerm != "") {
        // filter out the elements that contains your search term 
        filteredList = filteredList.filter((product) => {
            let lowerSearchTerm = searchTerm.toLowerCase();
            let lowerTitle = product.title.toLowerCase();
            return lowerTitle.includes(lowerSearchTerm);
        })
    }

    return (
        <>
            <header className="nav_wrapper">
                <div className="search_sortWrapper">
                    <input
                        className='search_input'
                        type="text"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                    />
                </div>
            </header>

            {loader == true ? <h1>...Loading</h1> :
                <main className="product_wrapper">
                    <>{filteredList.length == 0 ? <h1>Nothing here</h1> :
                        <>{
                            filteredList.map((product, idx) => {
                                return (<Product
                                    product={product}

                                    deleteProduct={deleteProduct}
                                ></Product>)
                            })
                        }</>
                    }</>
                </main>
            }

        </>


    )
}
export default Home;


/**
 * HW -> stylings -> replace module
 *
 *  
 *  
 * **/


/***
 * on slow networks -> you react bundle in itself takes a lot of time to load
 * // react ->served -> it init self
 * application get loaded -> react builds the UI -> APi request is send 
 * */ 