document.querySelector("form").addEventListener("submit", login);

function login(event) {
  event.preventDefault();

  let name = document.querySelector("#username").value.trim();
  let password = document.querySelector("#pass").value.trim();
  if (name === "admin" && password === "admin") {
    // "warning","success","error","info"
    swal("Login Succss!", "", "success");

    setTimeout(() => {
      window.location.href = "Admin.html";
    }, 2000);
  } else {
    // "warning","success","error","info"
    swal("Wrong Credentials", "", "error");
  }
}

function store_credentials() {
  localStorage.setItem("username", "admin");
  localStorage.setItem("password", "admin");
}

store_credentials();
