

 document.querySelector("#continue_button").addEventListener("click", payment);

 let PayArr = [];
 function payment(event) {
   event.preventDefault();

   let Name = document.querySelector("#name").value;
   let Pincode = document.querySelector("#pincode").value;
   let state = document.querySelector("#State").value;
   let street= document.querySelector("#Street").value;
   let Number = document.querySelector("#number").value;
   let city = document.querySelector("#City").value;
   let Building= document.querySelector("#building").value;
  let landmark= document.querySelector("#Landmark").value;
  
  let Home_address=document.querySelector("#home_address").value;
  let Office=document.querySelector("#office").value;
   let obj = {
     Name,
     Pincode,
     state,
     street,
     Number,
     city,
     Building,
     landmark,
     Office,
     Home_address
   };

   console.log(obj);
   if( Name=="") {
    swal("Opps!","Please Enter Full Name");
   }
   else if(Pincode == ""){
    swal("Opps!","Please Enter Pincode");

   }
   else if(state ==""){
    swal("Opps!","Please Enter State");
   }
   else if(street==""){
    swal("Opps!","Please Enter Street name or number");
    
   }
   else if(city==""){
    swal("Opps!","Please Enter City");
   }
   else if(Building==""){
    swal("Opps!","Please Enter Building name or number");
   }
   
   else {
     PayArr.push(obj);
     localStorage.setItem("credit", JSON.stringify(obj));

     swal("THANK YOU", "Address Saved", "success");

     setTimeout(() => {
       window.location.href = "payment.html";
     }, 3000);
   }
   console.log(obj);
 }