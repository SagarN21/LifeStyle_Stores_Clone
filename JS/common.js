window.onscroll = function () {
    scrollFunction();
};
let mybutton = document.getElementById("myBtn")
let navigationBar = document.getElementById("nav")
let CredsName = document.getElementById("CredsName")
let login_head = document.getElementById("login_head")
let EmptyNavSpace = document.getElementById("EmptyNavSpace")
let yellopatti = document.getElementById("yellopatti")
if (yellopatti) {
    yellopatti.addEventListener("click", () => {
        window.location.href = "mensAllProducts.html"
    })
}
let creds = JSON.parse(localStorage.getItem("sign"))
console.log(creds);
if (CredsName) {
    if (creds) {
        CredsName.innerHTML = "🧑🏼‍🦰" + creds.nam.split(" ")[0].substring(0, 10)
        CredsName.classList.add("CredsName2")
    } else {
        CredsName.innerHTML = "Signup/Signin"
        CredsName.classList.remove("CredsName2")
    }
}
if (login_head) {
    if (creds) {
        login_head.addEventListener("click", () => {
            swal({
                title: "Logout",
                text: "You will be logged out of the session.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        localStorage.clear()
                        window.location.href = "index.html"
                    } else {
                        null
                    }
                });
        })


    } else {
        login_head.addEventListener("click", () => {
            window.location.href = "signup.html"
        })

    }
    // console.log("hello");
}

function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (navigationBar) navigationBar.classList.add("stickky")
        if (EmptyNavSpace) EmptyNavSpace.style.display = "block"
        if (mybutton) mybutton.style.display = "block";
    } else {
        if (navigationBar) navigationBar.classList.remove("stickky")
        if (EmptyNavSpace) EmptyNavSpace.style.display = "none"
        if (mybutton) mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}