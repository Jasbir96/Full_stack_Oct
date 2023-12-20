// Must Have features
//     * Rating from 1 to 5
//         * when click -> rating should appear
// : count should be printed
// : stars should be highlighted
//     * on hover -> highlight the stars
//         * on mouse leave -> highlisghted stars should track back to 
// previous state 

// Good to have features -> optimization, accessibility
//     * put emojis instead of numbers
//         * slider based star rating
// -->

// 1. different point of interactions
//     1. select elements -> that will change / cause changes
//     2. add all the listeners
//                 click 
//                 mouse hover 
//                 mouse leave 

const starContainer = document.querySelector("#star_container");
const countElement = document.querySelector("#count");
const starArr = document.querySelectorAll(".star");
let pidx = 0;

starContainer.addEventListener("click", function (e) {
    // console.log("click occured");
    // console.log("target", e.target);
    if (e.target == starContainer)
        return;
    // get the idx of your star
    const cStar = e.target;
    const idx = cStar.dataset.idx;
    // update color till that idx 
    fillcolors(idx);
    countElement.textContent = idx;
    pidx = idx;
})

starContainer.addEventListener("mouseover", function (e) {
    if (e.target == starContainer)
        return;
    // get the idx of your star
    const cStar = e.target;
    const idx = cStar.dataset.idx;
    // update color till that idx 
    fillcolors(idx);
    // console.log("hover occured");
})
starContainer.addEventListener("mouseleave", function () {
    fillcolors(pidx);
})
// DRY principle -> do not repeat yourself
// SRP -> single responsibilit principle
function fillcolors(idx) {
    // update color till that idx 
    // reset the colors
    for (let i = 0; i < starArr.length; i++) {
        starArr[i].classList.remove("yellow");
    }
    //add the color
    for (let i = 0; i < idx; i++) {
        starArr[i].classList.add("yellow");
    }
}







