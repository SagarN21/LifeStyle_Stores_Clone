
  document.querySelector("form").addEventListener("submit", login);

  //let logArr = JSON.parse(localStorage.getItem("sign")) || [];

  function login(event) {
    event.preventDefault();

    let  name = document.querySelector("#username").value.trim();
    let password = document.querySelector("#pass").value.trim();
    let registerd_name = localStorage.getItem("username");
    let register_password = localStorage.getItem("password");
    if(name===registerd_name&&password===register_password)
    {
        swal("login success")
    }

    else{
        swal("check your credentials")
    }
   
   

  }

  function store_credentials(){

    localStorage.setItem("username","admin");
    localStorage.setItem("password","admin");


}


store_credentials()