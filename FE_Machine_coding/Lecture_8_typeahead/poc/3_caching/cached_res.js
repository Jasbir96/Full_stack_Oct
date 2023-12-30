
function createCachedFetch(duration) {
    let cache = {};
    return async function (url) {
        // if( your cache has the data and your data is not expired -> give the data from cache){
        // }
        if (cache[url]) {
            console.log("getting data from cache");
            const cachedData = cache[url];
            const cacheTime = cachedData.timestamp;
            const currentTime = new Date().getTime();
            if ((currentTime - cacheTime) < duration * 60 * 1000) {
                console.log("getting data from cache");
                return cachedData;
            }
        }
        // else{
        // make the request 
        // store the resp in cache 
        // }
        try {
            // 1st time -> use 
            const response = await fetch(url);
            const data = await response.json();

            // Store data in cache
            cache[url] = {
                data,
                timestamp: new Date().getTime() // when it was store
            };
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }

    }

}
// Create a cached version of fetch function with a cache duration for  whatever duration is entered
/**
 * Input : delay
 * Ouput -> retrun you a function 
 * 
 */
const cachedFetch = createCachedFetch(10);
// Example usage
const apiUrl = "https://restcountries.com/v3.1/name/india";
console.log("Making the first req")
cachedFetch(apiUrl)
    .then(data => {
        // Handle the fetched data
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

setTimeout(() => {
    console.log("Making the request again");
    cachedFetch(apiUrl)
        .then(data => {
            // Handle the fetched data
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

}, 3000);




/***
 * normal web page 
 *  * your own 
 *  * chat gpt api -> chargeable (2 days )
 *  *  stock data api -> chargeable (3 minutes)
 * */ 