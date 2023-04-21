let logArr = JSON.parse(localStorage.getItem("sign")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.querySelector("#email").value.trim();
  let pas1 = document.querySelector("#pass").value.trim();
  if (email == logArr.em && pas1 == logArr.pas) {
    // "warning","success","error","info"
    swal("Login Successful!!", "", "success");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  } else {
    // "warning","success","error","info"
    swal("Error!", "Wrong Credentials", "error");
  }
});
