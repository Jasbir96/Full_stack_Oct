import React, { useEffect, useState, useRef } from 'react';
// using normal styling sheet is not a practice
import styleObject from "./style.module.css";
import useFetchParams from './usefetchParams';
/***
 * 2. intersection observer -> last element -> loading the second set of Elemenets
 * */
function InfiniteScroll() {
    const [pageNum, setPageNum] = useState(1);
    const observer = useRef(null);
    // take some input, retrun som output
    const [data, loader, error, haveMore] = useFetchParams(pageNum);
    /***
     * 1. data -> fetch an API, 
     *      -> loader 
     *              waiting -> loader is visible 
     *                      -> data -> there , hide the loader , set the content
     *                      -> error -> hide the loader , set the error
     *                              -> may opt to remove the error as well
     * 2. click on next page -> next api call will be made 
     * */

    const lastBookElementRef = (node) => {
        // for case of loading -> return 
        // 2. step 
        if (loading)
            return;
        // remove the prev last guy 
        if (observer.current)
            observer.current.disconnect();

        // whneever you see th last element -> update the page
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                console.log(entries);
                // 1, problem -=> if post run out
                if (haveMore) {
                    setPageNum((prevPageNumber) => prevPageNumber + 1);
                }
                // here is the place you should incrementoing the pageNum
            }
        });
        // add it the target 
        if (node) {
            observer.current.observe(node);
        }

    }



    return (
        <div>

            {data.map((item, index) => {
                // last element wala case
                if (data.length === index + 1) {
                    return (
                        <div className={styleObject['book_title']}
                            // ref calls a function and gives the current node 
                            ref={(node) => {
                                lastBookElementRef(node)
                            }}
                            key={index}>
                            {item.name}
                        </div>
                    );
                } else {
                    return (
                        <div className={styleObject['book_title']} key={index}>
                            {item.name}
                        </div>
                    );
                }
            })}
            {loader && <div className={styleObject.loader}></div>}
            <div>{error && <div
                style={{
                    color: 'lightcoral',
                    background: "white"
                }}
            >{error}</div>}</div>
            {/* <div >{pageNum}</div>
            <div onClick={() => {
                setPageNum(pageNum => pageNum + 1)
            }}>Next</div> */}
            {/* <div className={styleObject.loader}></div> */}

        </div>
    )
}
export default InfiniteScroll;