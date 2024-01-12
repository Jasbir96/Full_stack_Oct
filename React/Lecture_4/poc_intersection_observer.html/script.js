// 1. Observer:
// 1. root ELement: the area in which we want to see that it is visible or not -> document
// 2. threshold: how much of the traget should be visble
// 3. root margin: it is used to shorten area of observation in observer
// 2. Target -> which we will observe
document.addEventListener('DOMContentLoaded', function () {
    // Select the target element to observe
    const target = document.querySelector('.observer-target');
    const options = {
        threshold: .5
    }
    const observer = new IntersectionObserver(cb, options);
    function cb(entries, observer) {
        let entry = entries[0];
        // Check if the target element is in the viewport
        if (entry.isIntersecting) {
            console.log('Target is in view!');
            // Perform actions when the target is in view
        } else {
            console.log('Target is out of view!');
            // Perform actions when the target is out of view
        }

    }
    // you attach the observer to all the target
    observer.observe(target);

})