window.onscroll = function () { myfunction() }; var nav = document.querySelector("nav"), features = document.querySelector(".features"); function myfunction() { var e = window.pageYOffset; e > features.offsetTop ? nav.classList.add("sticky") : e < features.offsetTop && nav.classList.remove("sticky") }



