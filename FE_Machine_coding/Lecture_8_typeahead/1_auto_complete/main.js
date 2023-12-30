import getCountries from "./fetchData.js";
import { debounce } from "./utility.js";

/***
 *   1. get the latest content inside you input
2. send the request -> get data -> tranform that
3. Populate -> the suggestion
 * */


const inputBox =
    document.getElementById("search_input");
const suggestionBox =
    document.getElementById("suggestion_box");

const handleSuggestions = async function (e) {
 
        const keyWord = e.target.value;
        console.log(keyWord)
        // 2. send the request
        //  get the req
        const resp = await getCountries(keyWord);
        if (resp == "AbortError") {
            return;
        }
        //  transform the res
        const countryNameArr = resp.map(countryObject => {
            return countryObject.name.official
        });
        console.log(countryNameArr);
        // 3. populate the list
        populateList(countryNameArr)
  

}
const populateList = function (countryNameArr) {
    if (countryNameArr.length) {
        suggestionBox.classList.add("visible");
    } else {
        suggestionBox.classList.remove("visible");
    }
    /**
     * o . create a fragment
     * 1. create an LI
     * 2. Add content
     * 3. add lis to fragment
     * 3. append fragment  to ul 
     * */
    suggestionBox.innerHTML = "";
    const fragment = document.createDocumentFragment();
    // add all the lis to that fragment
    countryNameArr.forEach((countryName) => {
        const li = document.createElement("li");
        li.innerText = countryName;
        fragment.appendChild(li);
    })
    // dom update was only done once 
    suggestionBox.appendChild(fragment);

}


inputBox.addEventListener("input", handleSuggestions);



