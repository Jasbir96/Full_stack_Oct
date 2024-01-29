import React, { useEffect, useState } from 'react'
import useFetchList from '../../Hooks/useFetchList';
import Product from '../Components/Product';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Categories from '../Components/Categories';
import Pagination from '../Components/Pagination';
const productsUrl = `https://fakestoreapi.com/products`
const categoriesUrl = `https://fakestoreapi.com/products/categories`;

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
    const [productList, productLoader, setProductList] = useFetchList(productsUrl);
    // reused the custom hook
    const [categoryList, categoryLoader, setCategoryList] = useFetchList(categoriesUrl);
    const [searchTerm, setSearchTerm] = useState("");
    /**************************sort : 0 : unsorted , 1: increasing order , -1 : decreasing order ************************************/
    const [sortDir, setsortDir] = useState(0);
    /**************************** currcategory : category group you result **********************************/
    const [currCategory, setCurrCategory] = useState("All categories");
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
    console.log(filteredList);
    if (searchTerm != "") {
        // filter out the elements that contains your search term 
        filteredList = filteredList.filter((product) => {
            let lowerSearchTerm = searchTerm.toLowerCase();
            let lowerTitle = product.title.toLowerCase();
            return lowerTitle.includes(lowerSearchTerm);
        })
    }
    let sortedList = filteredList;
    if (sortDir !== 0) {
        /***
         * sort -> a hof -> by default do dictionary sort -> alphabetical sort
         * 1. if you need to sort it in any other way -> you need to a comparator function
         * 2. sort function updates original array 
         * 
            * * */
        // we are sorting on the basis of prices
        function incComparator(product1, product2) {
            if (product1.price > product2.price) {
                //p1>p2
                return 1;
            } else {
                return -1;
            }
        }
        function decComparator(product1, product2) {
            if (product1.price < product2.price) {
                return 1;
            } else {
                return -1;
            }
        }
        if (sortDir == 1) {

            sortedList.sort(incComparator);
        } else {
            sortedList.sort(decComparator);
        }
    }
    /**************************categorization**********************************************/
    let filteredSortedgroupByArr = sortedList;
    if (currCategory != "All categories") {
        filteredSortedgroupByArr = filteredSortedgroupByArr.filter((product) => {
            return product.category == currCategory;
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
                    <div className="icons_container">
                        <ArrowCircleUpIcon
                            style={{ color: "white" }}
                            fontSize="large"
                            onClick={() => {
                                setsortDir(1)
                            }}
                        ></ArrowCircleUpIcon>
                        <ArrowCircleDownIcon
                            fontSize="large"
                            style={{ color: "white" }}
                            onClick={() => {
                                setsortDir(-1)
                            }}
                        ></ArrowCircleDownIcon>
                    </div>
                </div>
                <Categories
                    categoryLoader={categoryLoader}
                    categoryList={categoryList}
                    setCurrCategory={setCurrCategory}
                ></Categories>

            </header>
            {productLoader == true ? <h1>...Loading</h1> :
                <main className="product_wrapper">
                    <>{filteredSortedgroupByArr.length == 0 ? <h1>Nothing here</h1> :
                        <>{
                            filteredSortedgroupByArr.map((product, idx) => {
                                return (<Product
                                    product={product}
                                    deleteProduct={deleteProduct}
                                ></Product>)
                            })
                        }</>
                    }</>
                </main>
            }
            <Pagination></Pagination>
        </>


    )
}
export default Home;


/**
 * HW -> stylings -> replace module
 * create -> hooks for filter , and sort 
 *
 *  
 *  
 * **/


/***
 * on slow networks -> you react bundle in itself takes a lot of time to load
 * // react ->served -> it init self
 * application get loaded -> react builds the UI -> APi request is send 
 * */


/****
 * [a,b,c,d]
 * sTerm ="a"
 * sortTerm="desc";
 * categoryUpdate=""
 * 
 * let filterTerm=productList;
 * useEffect(()=>{
 * ()=>{
 * filterArr=filterArr.filter();
 * }
 * },[sterm,sortTerm,categories])
//  pagination, 
 * */

/****
 * if you a child componnet  -> update conditional -> huge 
 * */ 