window.onscroll = function () {
    scrollFunction();
};
let mybutton = document.getElementById("myBtn")
let navigationBar = document.getElementById("nav")
let EmptyNavSpace = document.getElementById("EmptyNavSpace")
function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navigationBar.classList.add("stickky")
        EmptyNavSpace.style.display = "block"
        if (mybutton) mybutton.style.display = "block";
    } else {
        navigationBar.classList.remove("stickky")
        EmptyNavSpace.style.display = "none"
        if (mybutton) mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}