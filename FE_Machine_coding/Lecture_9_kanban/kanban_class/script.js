/***
 * Filtering: 
 *  1. click -> show/hide the tickets
 *  2. dbClick-> show all the tickets
 * **/
// live HTML collection
const allTickets = document.getElementsByClassName("ticket-cont");
const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");
const addBtn = document.querySelector(".add-btn");
const mainContainer = document.querySelector(".main_cont");
// modal 
const modal = document.querySelector(".modal-cont");
// textarea
const textArea = modal.querySelector(".textarea-cont");
// container -> to get the current color
const prioritySetModal = modal.querySelector(".priority-color-cont");

// to make active feature also work
const priorityColorArray = modal.querySelectorAll(".priority-color");


/********************variables*******************************/

let currentColor = "green";
const uid = new ShortUniqueId();
/************************************************************/
toolBoxPriorityContainer.addEventListener("click", function (e) {
    if (e.target == e.currentTarget) {
        return;
    }
    // btn 
    const curentColorelem = e.target;
    // btn color
    const cColor = curentColorelem.classList[1];
    for (let i = 0; i < allTickets.length; i++) {
        const ticketColorElem = allTickets[i].querySelector(".ticket-color");
        let cTicketsColor = ticketColorElem.classList[1];
        if (cTicketsColor !== cColor) {
            // hide 
            allTickets[i].style.display = "none";
        } else {
            // show
            allTickets[i].style.display = "block";
        }
    }

})


toolBoxPriorityContainer.addEventListener("dblclick", function (e) {
    if (e.target == e.currentTarget) {
        return;
    }
    // make everyone visible
    for (let i = 0; i < allTickets.length; i++) {
        allTickets[i].style.display = "block";
    }
})

/*****
 * Tickets -> life cycle
 *  1. creation (related UI constrution)
 *      a. click on plus -> Opening Modal
 *      b. Take text input + color input[default selection]
 *      c. Enter is pressed -> 
 *          *) Modal should disappear
 *          *) The UI should be created 
 *              -> text, color
 *              -> id is missing (??)
 *              -> lock and unlock button 
 *      d. hide that modal , empty the content
 *      Note : On creation you have to add all the features
 *              related to it's deletion and updation
 *    * features-> 
 *          * add listeners + 
 *         *  handlers to implement the different features
 * 2. updation
 *      a.) color
 *      b.) text
 * 3. Deletion 
 * */

/**
 * creation of ticket
 * * Tickets -> life cycle
 *  1. creation (related UI constrution)
 *      a. click on plus -> Opening Modal
 *      b. Take text input + color input[default selection]
 *      c. Enter is pressed -> 
 *          *) Modal should disappear
 *          *) The UI should be created 
 *              -> text, color
 *              -> id is missing (??)
 *              -> lock and unlock button 
 *      d. hide that modal , empty the content
 * **/

//1 
addBtn.addEventListener("click", function () {
    // display's modal
    modal.style.display = "flex";
})
// 2. the color change should work
prioritySetModal.addEventListener("click", function (e) {
    if (e.target == e.currentTarget) {
        return;
    }

    currentColor = e.target.classList[1];
    ;    // remove active  -> all
    for (let i = 0; i < priorityColorArray.length; i++) {
        priorityColorArray[i].classList.remove("active")
    }

    // add active to required element
    e.target.classList.add("active");
})

// 3. when someon presse enter -> 
modal.addEventListener("keypress", function (e) {
    if (e.key !== "Enter") {
        return;
    }
    // take content
    const content = textArea.value;
    createTicket(content, currentColor);

    // reset it's existence 
    textArea.value = "";
    currentColor = "green";
    modal.style.display = "none";

})

function createTicket(content, color) {
    //  *) Adding UI
    //         * -> text, color
    //         * -> id is missing(??)
    //             * -> lock and unlock button
    //     *    * features ->
    //  *          * add listeners +
    //  *         * handlers to implement the different features
    //         * 2. updation
    //            * a.) color
    //            * b.) text
    //          * 3. Deletion
    // create a static UI with an Id
    console.log("value", content, "color", color);


    if (content == "")
        return;

    const id = uid.rnd();

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-cont");
    /***
     * instead of it use document.createElement -> 
     * because parsing is very slow
     * **/
    ticketContainer.innerHTML = `<div class="ticket-cont">
            <div class="ticket-color ${color}"></div>
            <div class="ticket-id">#${id}</div>
            <div class="ticket-area">${content}</div>
            <div class="lock-unlock">
                <i class="fa-solid fa-lock"></i>
            </div>
        </div>`;
    mainContainer.appendChild(ticketContainer);

    // delete Feature
    // update content 
    // update color
}


