
  document.querySelector("form").addEventListener("submit", login);

  let logArr = JSON.parse(localStorage.getItem("sign")) || [];

  function login(event) {
    event.preventDefault();

    let em1 = document.querySelector("#email").value.trim();
    let pas1 = document.querySelector("#pass").value.trim();
    let flag = false;
    if (em1 && pas1) {
      logArr.forEach(function (ele) {
        if (ele.em == em1 && ele.pas == pas1) {
          localStorage.setItem("token", "loggedin");
          alert("login sucessfull  Welcome To StyleZilla");
          flag = true;
          window.location.href = "index.html";
        }
      });

      !flag && alert("incorrect email & password");
    } else {
      alert("email & Password required");
    }
  }

