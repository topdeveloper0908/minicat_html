// Sticky Header

window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var header_wrapper = document.getElementById("myHeader-wrapper");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > 128) {
        header.classList.add("sticky-header");
        header_wrapper.style.height = "128px";
        
    } else {
        header.classList.remove("sticky-header");
        header_wrapper.style.height = "auto";
    }
}

window.onload = (event) => {
    myFunction();
    const observer = lozad();
    observer.observe();
};