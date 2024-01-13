import React, { useState, useEffect } from 'react'
const useFetchList = function (link) {
    
    const [list, setList] = useState([]);
    const [loader, setLoader] = useState(false);
    
    const getProducts = function () {
        (async function () {
            try {
                setLoader(true);
                const resp = await fetch(link);
                const jsonResp = await resp.json();
                setList(jsonResp);
            } catch (err) {
                console.log(err);
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
    return [list, loader, setList];
}


export default useFetchList;