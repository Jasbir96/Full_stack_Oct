/****
 * getting all the required elemnnts
 * */
// btns
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const resetBtn = document.getElementById("reset");

// inputs
const minInput = document.getElementById("min");
const hrsInput = document.getElementById("hr");
const secInput = document.getElementById("sec");


/***
 * 
 * add all the listener
  * */
let timeLeft = 0;
startBtn.addEventListener("click", function () {
    console.log("start was clicked");

    /***
     * 1. start 
     *      1. get the input min, hrs, sec ()
     *      2. transforming that 
     *      2. start the timer -> (setInterval)
     *          decrement the count on every one second
     *          a. UI
     *          b. memory 
     *          stop the timer after you reach at the end
     *          a. UI
     *          b. memory 
     * */
    /**** take input**/
    // 1. taking the input
    let mins = minInput.value || 0;
    let hrs = hrsInput.value || 0;
    let secs = secInput.value || 0;

    // converting strings into numbers 
    mins = parseInt(mins);
    hrs = parseInt(hrs);
    secs = parseInt(secs);
    // console.log("mins", mins, "hrs", hrs, "secs", secs);
    timer(hrs, mins, secs);
})

function timer(hrs, mins, secs) {
    // transforming -> into seconds
    let countDownTime = hrs * 3600 + mins * 60 + secs;
    timeLeft = countDownTime
    let countId = setInterval(() => {
        console.log(timeLeft);
        timeLeft--;
        if (timeLeft == -1) {
            clearInterval(countId);
            return;
        }
        updateUI(timeLeft);
    }, 1000);
}

function updateUI(timeLeft) {
    // -> transform the input ui 

    let hrs = Math.floor(timeLeft / 3600);

    let mins = Math.floor((timeLeft % 3600) / 60);
    let secs = timeLeft % 60;
    console.log("hrs", hrs, "mins", mins, "secs", secs);
    if (secs > 0) {
        if (sec == 59) {
            minInput.value = mins < 10 ? `0${mins}` : `${mins}`;
            hrsInput.value = mins < 10 ? `0${mins}` : `${mins}`;
        }
        secs--;
        // 10 -> 9
        secInput.value = secs < 10 ? `0${secs}` : `${secs}`;
        return;
    }

    if (mins > 0) {
        if (sec == 59) {
            hrs.value = mins < 10 ? `0${mins}` : `${mins}`;
        }
        mins--;
        secInput.value = 59;
        minInput.value = mins < 10 ? `0${mins}` : `${mins}`;
        return;
    }
    if (hrs > 0) {
        hrs--;
        minInput.value = 59;
        secInput.value = 59;
        hrsInput.value = hrs < 10 ? `0${hrs}` : `${hrs}`
    }
}










// pauseBtn.addEventListener("click", function () {
//     console.log("pause was clicked")

// })
// continueBtn.addEventListener("click", function () {
//     console.log("continue was clicked")

// })
// resetBtn.addEventListener("click", function () {
//     console.log("resetBtn was clicked")

// })

