let endpoint = `https://restcountries.com/v3.1/name`;
//  keep the request and transformation seperate 
export default async function getCountries(keyword) {
    let reqUrl = `${endpoint}/${keyword}`;
    let httpResponse = await fetch(reqUrl);
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
}

// getCountries("ind").then(function (result) {
//     console.log(result);
// })



