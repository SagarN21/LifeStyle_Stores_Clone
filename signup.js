   
  document.querySelector("form").addEventListener("submit", fun);

  let signArr = JSON.parse(localStorage.getItem("sign")) || [];

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
      alert("please enter full details");
    } else {
      signArr.push(obj);
      localStorage.setItem("sign", JSON.stringify(signArr));
      alert("Signup sucessfully");
      window.location.href = "login.html";
    }
  }
