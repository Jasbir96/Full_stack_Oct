/***
 * it should be  a pure js function 
 * it should always start with use 
 * */
import React,{useState,useEffect} from 'react';
export default function useFetchParams(...dependecy ) {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    useEffect(function handler() {
        (async function () {
            try {
                setLoader(true);
                const resp = await
                    fetch("https://jsonplaceholder.typicode.com/comments?" +
                        new URLSearchParams({ _page: dependecy, _limit: 10 })
                    )
                const jsonResp = await resp.json();
                console.log(jsonResp)
                setData([...data, ...jsonResp]);
            } catch (err) {
                setError(err.message);
                setTimeout(() => {
                    setError(false);
                }, 2000);

            } finally {
                setLoader(false);
            }
        })()
    }, dependecy);
    return [data, loader, error];
}