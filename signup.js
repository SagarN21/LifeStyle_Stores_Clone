document.querySelector("form").addEventListener("submit", fun);

let signArr = JSON.parse(localStorage.getItem("sign")) || {};

function fun(event) {
  event.preventDefault();
  let nam = document.querySelector("#name").value.trim();
  let em = document.querySelector("#email").value.trim();
  let pas = document.querySelector("#pass").value.trim();

  let obj = {
    nam,
    em,
    pas,
  };
  console.log(obj);
  if (obj.nam == "" || obj.em == "" || obj.pas == "") {
    swal("please enter full details");
  } else if (obj.nam == "") {
    swal("please enter Full Name");
  } else if (obj.em == "") {
    swal("please enter Email");
  } else if (obj.pas == "") {
    swal("please enter Password");
  } else {
    signArr = obj;

    localStorage.setItem("sign", JSON.stringify(signArr));

    swal("Signup Sucessfully!", "", "success");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 4000);
  }
}
