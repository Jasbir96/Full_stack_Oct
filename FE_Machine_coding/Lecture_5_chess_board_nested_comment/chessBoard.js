// console.log("script attached ")
// you want your chessboard to be build after css is already there 


// document.addEventListener('DOMContentLoaded', function () {
//     console.log('DOMContentLoaded event fired');
//     // DOM manipulation or other actions can go here
// });

// window.addEventListener('load', function () {
//     console.log('Load event fired');
//     // Code that relies on all resources being loaded can go here
//     // css , js , images 
// });

window.addEventListener('load', function () {
    console.log('Load event fired');
    const table = document.querySelector("#table");
    let boxesArr = document.getElementsByClassName("box");
    // optimization that we did
    const tableFragment = document.createDocumentFragment();
    // 8*8
    for (let ri = 0; ri < 8; ri++) {
        let white = ri % 2 == 0 ? true : false;
        let tr = document.createElement("tr");
        for (let ci = 0; ci < 8; ci++) {
            // create that element
            let cell = document.createElement("td");
            // style that element
            cell.setAttribute("class", `box ${white ? "white" : "black"}`);
            // set some text if you want 
            // cell.textContent = `${ri}-${ci}`;
            cell.setAttribute("data-index", `${ri}-${ci}`)
            tr.appendChild(cell);
            white = !white;
        }
        tableFragment.appendChild(tr);
    }
    // optimize the code 
    table.appendChild(tableFragment);

    // event listeners-> event delegation 
    table.addEventListener("mouseover", function (e) {
        const element = e.target;
        if (element == table) {
            return;
        }

        // console.log(element);
        // 1. we have identify the cell
        const idx = element.dataset.index;
        let [cRi, cCi] = idx.split("-");
        //  `box ${white ? "white" : "black"}`);
        //2. remove from all the prev highlighted spaces
        removeHighlight();
        // 3. identify all the directions -> logic
        // object -> possible cells
        let storage = {};
        // ri-ci

        // console.log(storage);
        storage[idx] = true;

        findTopLeft(cRi, cCi, storage)
        findTopRight(cRi, cCi, storage)
        findBottomLeft(cRi, cCi, storage)
        findBottomRight(cRi, cCi, storage);
        // console.log(storage);


        // 3. highlight all the possible steps 
        highlighter(storage);
    })
    // when you move out of chess board
    table.addEventListener("mouseleave", function () {
        removeHighlight();
    })

    function highlighter(storage) {
        // loop thorugh all the cells
        for (let i = 0; i < boxesArr.length; i++) {
            let cDataIndex = boxesArr[i].dataset.index;
            if (storage[cDataIndex] == true) {
                // color it 
                boxesArr[i].classList.add("yellow");
            }
        }
    }

    function removeHighlight() {
        for (let i = 0; i < boxesArr.length; i++) {
            boxesArr[i].classList.remove("yellow");
            // console.log(boxesArr[i]);
        }
    }
});




/*******************identifocation of all the  steps *********************/
// dsa part 
function findTopLeft(cRi, cCi, storage) {
    cRi--;
    cCi--;
    while (cRi >= 0 && cCi >= 0) {
        let dataIndex = `${cRi}-${cCi}`;
        storage[dataIndex] = true;
        cRi--;
        cCi--;
    }

}

function findTopRight(cRi, cCi, storage) {
    cRi--;
    cCi++;
    while (cRi >= 0 && cCi <= 7) {
        let dataIndex = `${cRi}-${cCi}`;
        storage[dataIndex] = true;
        cRi--;
        cCi++;
    }

}

function findBottomLeft(cRi, cCi, storage) {
    cRi++;
    cCi--;
    while (cRi <= 7 && cCi >= 0) {
        let dataIndex = `${cRi}-${cCi}`;
        storage[dataIndex] = true;
        cRi++;
        cCi--;
    }

}
function findBottomRight(cRi, cCi, storage) {
    cRi++;
    cCi++;
    while (cRi <= 7 && cCi <= 7) {
        let dataIndex = `${cRi}-${cCi}`;
        storage[dataIndex] = true;
        cRi++;
        cCi++;
    }

}
