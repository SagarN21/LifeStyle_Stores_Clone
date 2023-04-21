let CartItems = JSON.parse(localStorage.getItem("cart"));
showdata(CartItems);
localStorage.setItem("TotalPrice", 0);
UpdateTotal(CartItems);

//? <!----------------------------------- <Updating Total Function> ----------------------------------------------->

function UpdateTotal(data, minus = 0, plus = 0) {
  console.log(data, minus, plus);
  let total = +JSON.parse(localStorage.getItem("TotalPrice")) || 0;
  if (total == 0) {
    for (let key of data) {
      total += Number(key.price);
    }
  }
  total += Number(plus);
  total -= Number(minus);
  localStorage.setItem("TotalPrice", JSON.stringify(total));
  let Total = document.getElementsByClassName("Total");
  let total1 = document.querySelector(
    " #totals > div:nth-child(1) > label:nth-child(2)"
  );
  total1.innerText = `₹${total}`;
  Total[1].innerText = `₹${total}`;
}
//? <!-------------------------------------<ShowData on Checkout Page> ----------------------------------------------->

function showdata(data) {

  let productList = document.querySelector(".showproducts");
  let newArray = data.map((item) => {
    return (item["quantity"] = 1);
  });
  let count = 0;
  newArray = data.map((item) => {
    return `
        <div class="product-card">
              <div><img src=
              \"${item.thumbnail}\" alt="" /></div>
              <div>
                <h4>${item.title}</h4>
                <label>Price:<a> ${item.price}</a>/-</label> <space></space>
                <label>Rating: ${item.rating}⭐</label><br />
                <label>Color: Silver</label><br />
                <label for="">Quantity</label>
                <button class="plusminus" id="minus">➖</button>
                <input id="quantity" data-id=${item.id} value="1">
                <button class="plusminus" id="plus">➕</button>
                <label>Size: M</label><span></span><br />
                <div class="cardbuttons">
                  <button class="removeNview" data-num="${count++}" id="remove">Remove from Cart</button>
                  <button class="removeNview"  id="view">View Product Details</button>
                </div>
              </div>
            </div> 
        `;
  });
  productList.innerHTML = newArray.join(" ");

  // ?------------------------------------<Remove From Cart>------------------------------------------------

  let allremove = document.querySelectorAll("#remove");
  for (const remove of allremove) {
    remove.addEventListener("click", function (event) {
      let index = event.target.dataset.num;
      swal({
        title: "Remove Item from cart?",
        text: "Item will be removed from basket.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          localStorage.setItem("cart", JSON.stringify(""));
          swal("Item Removed", {
            icon: "success",
          });
          CartItems.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(CartItems));
          setTimeout(() => {
            showdata(CartItems);
            localStorage.setItem("TotalPrice", 0);
            UpdateTotal(CartItems);
          }, 1000);
        } else {
          swal("Item is in the Basket ✅");
        }
      });
    });
  }

  // ?------------------------------------<Decrease Quantity and Update Total>------------------------------------------------

  let Allminus = document.querySelectorAll("#minus");
  for (const minus of Allminus) {
    minus.addEventListener(
      "click",
      (UpdateQuantity = (event) => {
        if (event.target.parentElement.children[9].value == 1) return;
        event.target.parentElement.children[9].value--;
        let minus = +event.target.parentElement.children[1].children[0].innerText
        // let minus = +event.target.parentElement.children[9].value * price;
        UpdateTotal(CartItems, minus, 0);
      })
    );
  }
  // ?------------------------------------<Increase Quantity and Update Total>------------------------------------------------

  let Allplus = document.querySelectorAll("#plus");
  for (const plus of Allplus) {
    plus.addEventListener(
      "click",
      (UpdateQuantity = (event) => {
        // console.log(event.target.parentElement.children);

        event.target.parentElement.children[9].value++;
        let plus = +event.target.parentElement.children[1].children[0].innerText
        // console.log(price);
        // let plus = +event.target.parentElement.children[9].value * price;
        UpdateTotal(CartItems, 0, plus);
      })
    );
  }
}
//? <!----------------------------------------------- Extra Function ----------------------------------------------->
// .Check Delivery
let check = document.getElementById("checkbutton");
check.addEventListener("click", () => {
  let pincode = document.getElementById("delievery-input").value;
  swal(
    "Yup!",
    `These products are available in your locations! \n Pincode :${pincode}`,
    "success"
  );
  document.getElementById("delievery-input").value = "";
});

//? <!----------------------------------------------- < extra> ----------------------------------------------->

let checkout = document.getElementById("Checkout");
checkout.addEventListener("click", () => {
  window.location.href = "address.html";
});
