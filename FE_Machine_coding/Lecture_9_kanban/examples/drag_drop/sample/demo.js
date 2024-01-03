const containers = document.querySelectorAll('.container');
let draggedBox = null;

containers.forEach(container => {
    // starting of the drag event, get the element you are dragging
    container.addEventListener('dragstart', (event) => {
        draggedBox = event.target;
        event.target.style.opacity = '0.5';
    });
    // dragging is finishes 
    container.addEventListener('dragend', (event) => {
        event.target.style.opacity = '1';
    });
    // to make sure the dragged element is perfectly dropped 
    container.addEventListener('dragover', (event) => {
        // to remove that cross button
        event.preventDefault();
    });

    container.addEventListener('drop', (event) => {
        event.preventDefault();
        if (draggedBox) {
            // Append the dragged box to the end of the target container
            container.appendChild(draggedBox);
            draggedBox = null;
        }
    });
});