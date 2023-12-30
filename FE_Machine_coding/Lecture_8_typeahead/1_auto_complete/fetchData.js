let endpoint = `https://restcountries.com/v3.1/name`;
// autocomplete -> 
//  keep the request and transformation seperate 
let currentFetchController = null;

function cancelPreviousRequest() {
    currentFetchController.abort();
}


export default async function getCountries(keyword) {
    try {

        if (currentFetchController) {
            cancelPreviousRequest();
        }

        let reqUrl = `${endpoint}/${keyword}`;

        // http request
        const abortcontroller = new AbortController();
        currentFetchController = abortcontroller;
        let httpResponse = await fetch(reqUrl,
            { signal: abortcontroller.signal });


        // return httpResponse;
        if (httpResponse.status == 404) {
            console.log("404 resource not found");
            return [];
        } else {
            // console.log("Data found");
            const response = await httpResponse.json();
            // const countryName = response.map(countryObject => {
            //     return countryObject.name.official
            // });
            return response;
        }
    } catch (err) {
        if (err.name == "AbortError") {
            // Request was aborted
            console.log('Fetch request was aborted.');
            return err.name;
        } else {
            console.error("Fetch error:", error);
        }
    }

}

// getCountries("ind").then(function (result) {
//     console.log(result);
// })



