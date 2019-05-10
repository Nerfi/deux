// this navbar is located in the new.html.erb, is not a partial

window.onscroll = function() { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navbar.classList.add("blue")
    } else {
        navbar.classList.remove("sticky");
    }
}

export { myFunction };
