function createCachedFetch(duration) {
    let cache={}

}


// Create a cached version of fetch function with a cache duration for  whatever duration is entered

const cachedFetch = createCachedFetch(10);
// Example usage
const apiUrl = 'https://api.example.com/data';

cachedFetch(apiUrl)
    .then(data => {
        // Handle the fetched data
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
