import React, { useState, useEffect } from 'react'
 const  useFetchList = function () {
    const [productList, setProductList] = useState([]);
    const [loader, setLoader] = useState(false);
    const getProducts = function () {
        (async function () {
            try {
                setLoader(true);
                const resp = await fetch("https://fakestoreapi.com/products");
                const jsonResp = await resp.json();
                setProductList(jsonResp);
            } catch (err) {
                setTimeout(() => {
                    setError(false);
                }, 2000);

            } finally {
                setLoader(false);
            }
        })()
    }
    // Logic get that products -> Fakestore API
    useEffect(getProducts, []);
    return [productList, loader,setProductList];
}


export default useFetchList;