/***
 * Filtering: 
 *  1. click -> show/hide the tickets
 *  2. dbClick-> show all the tickets
 * **/
// live HTML collection
const allTickets = document
    .getElementsByClassName("ticket-cont");
const toolBoxPriorityContainer =
    document.querySelector(".toolbox-priority-cont");


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
 * Creation of The tickets
 * */ 