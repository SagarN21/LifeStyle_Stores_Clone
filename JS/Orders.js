// ?-------------------------------<Global Variables>----------------------------------------------
let Container = document.querySelector(".container");
let FetchSelect = document.getElementsByClassName("select");
let tophead1 = document.querySelector(".mainsect1");
let loader = document.getElementById("loader");
let allproducts = document.querySelector(".allproducts");
let select = document.getElementById("select");
let FetchValue = ""
let LSdata = JSON.parse(localStorage.getItem("cart")) || [];
let ManagePayment = document.getElementsByClassName("manage-payments");

// ? ---------------------------------<Manage OrderPage functions>-----------------------------------------

window.addEventListener("load", () => {
  setTimeout(() => {
    swal("Welcome Admin 👤");
  }, 1000);
  CheckLSData();
});
function CheckLSData() {
  loader.style.display = "block";
  setTimeout(() => {
    let LSdata = JSON.parse(localStorage.getItem("cart")) || [];
    if (LSdata.length == 0) {
      swal("No orders to manage today ✅");
      loader.style.display = "none";
    } else {
      ManageProduct();
      swal("There are some pending orders left 🔽");
    }
  }, 2000);
}
function ManageProduct() {
  ShowDataonManage(LSdata);
}
function ShowDataonManage(data) {
  let ordersContainer = document.querySelector(".orders-container");
  ordersContainer.innerHTML = "";
  let total = +localStorage.getItem("TotalPrice");
  if (total == 0) {
    for (let k of LSdata) {
      total += +k.price;
    }
  }
  let newArray = data.map((item) => {
    return `
  <div class="DeleteProductCard">
  <div id="delete-product-id" data-id="${item.id}">
  <h1>🔘</h1></div>
  <div id="delete-product-label">
  <h5>${item.title}</h5>
  <label id="x">Product-ID : </label><label id="y">
  #SZ${Math.random().toFixed(5)} .</label>
  <label id="x">Quantity :</label><label id="y">1</label>
  <label id="x">Stock Left : </label><label id="y">${item.stock} .</label>
  <label id="x">Price :</label> <label id="y">${item.price}/-</label>
  <label id="x">Brand : </label><label id="y">${item.brand} .</label>
  <label id="x">Category : </label><label id="y">${item.category} .</label>
  <label id="x">Rating : </label><label id="y">${item.rating}<label>⭐</label>
 </div>
 <div><img src="${item.thumbnail}" alt=""></div>
 <div><img src="${item.images[0]}" alt=""></div>
 <div><img src="${item.images[1]}" alt=""></div>
</div>`;
  });
  ordersContainer.innerHTML = `
  <label id="customername"> (1) Customer Xyz </label><label>Ordered For</label>
${newArray.join(" ")}
<div id="buttonsDiv">
<div><h1>Total Price: ₹${total}</h1><label>including all discounts and taxes*</label></div>
<div><button id="ClearCart">Verify</button><button id="ClearCart2">Reject</button></div>
</div>
  `;
  loader.style.display = "none";
  let clearCart = document.querySelector("#ClearCart");
  clearCart.addEventListener("click", () => {
    swal({
      title: "Verify this Order?",
      text: "To proceed for package and delivery.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.setItem("cart", JSON.stringify(""));
        swal("Done! Order Verified", {
          icon: "success",
        });
        setTimeout(() => {
          window.location.href = "Orders.html";
        }, 1000);
      } else {
        swal("Order Request Status: Pending");
      }
    });
  });
  let clearCart2 = document.querySelector("#ClearCart2");
  clearCart2.addEventListener("click", () => {
    swal({
      title: "Reject this Order?",
      text: "Are you sure you want to Reject this order?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.setItem("cart", JSON.stringify(""));
        swal("Order Rejected", {
          icon: "success",
        });
        setTimeout(() => {
          window.location.href = "Orders.html";
        }, 1000);
      } else {
        swal("Order Request Status: Pending");
      }
    });
  });
}

// ?----------------------------------<All Products Functions>--------------------------------------------

for (let i = 0; i < FetchSelect.length; i++) {
  FetchSelect[i].addEventListener("change", () => {
    loader.style.display = "block";
    FetchValue = FetchSelect[i].value
    FetchWomenTopWear();
  })
}

async function FetchWomenTopWear() {
  let Database = FetchValue
  if (Database == "") window.location.href = "Orders.html";
  try {
    let res = await fetch(Database);
    let data = await res.json();
    ShowData(data);
  } catch (error) {
    console.log(error);
  }
}
function ShowData(data) {
  tophead1.style.display = "none";
  allproducts.style.display = "block";
  let newArray = data.map((item) => {
    return `
    <div>
    <img
      src=${item.thumbnail}
      alt=""
    />
    <h4>${item.title}</h4>
    <p>Price : ${item.price}/-</p>
    <p>Brand : ${item.brand}</p>
    <button class="cardbutton" data-id=${item.id} id="addproduct">Add</button>
    <button class="cardbutton" data-id=${item.id} id="removeproduct">
    Remove</button>
  </div>
    `;
  });
  Container.innerHTML = newArray.join(" ");
  loader.style.display = "none";
  let addtoLS = document.querySelectorAll("#addproduct");
  for (let add of addtoLS) {
    add.addEventListener("click", async (event) => {
      loader.style.display = "block";
      let id = event.target.dataset.id;
      let product = await GetDataFromId(id);
      LSdata.push(product);
      localStorage.setItem("cart", JSON.stringify(LSdata));
      swal("Added to Basket", "", "success");
      loader.style.display = "none";
    });
  }
}
async function GetDataFromId(id) {
  // loader.style.display = "block";
  let url = select.value;
  try {
    let res = await fetch(`${url}/${id}`);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
