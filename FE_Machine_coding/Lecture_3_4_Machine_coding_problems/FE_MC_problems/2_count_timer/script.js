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
let countId;
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

    // validation 
    // console.log("mins", mins, "hrs", hrs, "secs", secs);

    // * validation
    //     * Negative values.
    // * extra time they can enter
    // * Hours should not be greater than 24 hours.
    // 
    //     * input can only be numbers
    const res = validatedInputs(mins, hrs, secs);
    if (res == false)
        return;
    // tranform our input for first render
    // just tranforming for the first render 
    const { transformedSecs,
        transformedMins,
        transformedHrs
    } = tranformInputs(secs, mins, hrs);
    console.log(transformedSecs, transformedMins, transformedHrs);
    // running the timer 
    hrsInput.value = transformedHrs;
    minInput.value = transformedMins;
    secInput.value = transformedSecs;

    timer(transformedHrs, transformedMins, transformedSecs);
})

function tranformInputs(secs, mins, hrs) {
    // /handle seconds
    if (secs >= 60) {
        secs = secs - 60;
        mins++;
    }
    if (mins >= 60) {
        mins = mins - 60;
        hrs++;
    }
    return {
        transformedSecs: secs,
        transformedMins: mins,
        transformedHrs: hrs
    };
}


function timer(hrs, mins, secs) {
    // transforming -> into seconds
    let countDownTime = hrs * 3600 + mins * 60 + secs;
    timeLeft = countDownTime;
    // updateUI(timeLeft);
    // initial render and then update your timer 
    countId = setInterval(() => {
        //23:00:00 -> 22:59:59
        timeLeft--;
        updateUI(timeLeft);
    }, 200);
}

// specifically -> to update the UI
function updateUI(timeLeft) {
    if (timeLeft == 0) {
        // console.log("Timer Finished");
        // stop the timer
        clearInterval(countId);
        return;
    }
    // -> transform the input ui 
    // memory level 
    let hrs = Math.floor(timeLeft / 3600);
    let mins = Math.floor((timeLeft % 3600) / 60);
    let secs = timeLeft % 60;
    console.log("hrs", hrs, "mins", mins, "secs", secs);

    // if time has ran out 
   
    //5:00
    // when secs are there update secs and return //59
    if (secs > 0) {
        secs--;
        secInput.value = secs < 10 ? `0${secs}` : `${secs}`;
        minInput.value = mins < 10 ? `0${mins}` : `${mins}`;
        hrsInput.value = hrs < 10 ? `0${hrs}` : `${hrs}`;
        // 10 -> 9
        return;
    }
    
    // when mins are there -> decrement  the mins and set secs to 59
    if (mins > 0) {
        mins--;
        secInput.value = 59;
        minInput.value = mins < 10 ? `0${mins}` : `${mins}`;
        hrsInput.value = hrs < 10 ? `0${hrs}` : `${hrs}`
        return;
    }

    // mins, secs -> 0 , update your hrs, mins and secs
    if (hrs > 0) {
        hrs--;
        minInput.value = 59;
        secInput.value = 59;
        hrsInput.value = hrs < 10 ? `0${hrs}` : `${hrs}`;
    }
}





function validatedInputs(mins, hrs, secs) {
    //   a. checked for neg 
    if (mins < 0 || secs < 0 || hrs < 0) {
        alert("negative value's / hrs >24 is not valid");
        return false;
    }
    return true;
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

