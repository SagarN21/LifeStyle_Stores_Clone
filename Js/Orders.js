// ? ---------------------------------------------------------------------------
window.addEventListener("load", () => {
  setTimeout(() => {
    alertify.success("Welcome back Admin!");
  }, 1000);
  setTimeout(() => {
    alertify.warning("You have some Pending Orders left");
  }, 2500);
});
// ?-----------------------------------------------------------------------------
let Container = document.querySelector(".container");
let FetchSelect = document.getElementById("select");
let tophead = document.getElementById("mainsect");
let allproducts = document.querySelector(".allproducts");
let select = document.getElementById("select");
let LSdata = JSON.parse(localStorage.getItem("Products")) || [];

FetchSelect.addEventListener("change", function () {
  FetchWomenTopWear();
});
async function FetchWomenTopWear() {
  let Database = document.getElementById("select").value;
  if (Database == "") window.location.href = "Orders.html";
  try {
    let res = await fetch(Database);
    let data = await res.json();
    alertify.warning("Some New Products were Edited Recently");
    ShowData(data);
  } catch (error) {
    console.log(error);
  }
}
function ShowData(data) {
  tophead.style.display = "none";
  allproducts.style.display = "block";
  let newArray = data.map((item) => {
    return `
    <div>
    <img
      src=${item.thumbnail}
      alt=""
    />
    <h4>${item.title}</h4>
    <p>Rating : ${item.rating}</p>
    <p>${item.description.substring(0, 100)}...</p>
    <button class="cardbutton" data-id=${item.id} id="addproduct">Add</button>
    <button class="cardbutton" data-id=${item.id} id="removeproduct">
    Remove</button>
  </div>
    `;
  });
  Container.innerHTML = newArray.join(" ");
  let addtoLS = document.querySelectorAll("#addproduct");
  for (let add of addtoLS) {
    add.addEventListener("click", (event) => {
      console.log(event.target.dataset.id);
      let product = GetDataFromId(id);
      LSdata.push(product);
      localStorage.setItem("Products", JSON.stringify(LSdata));
    });
  }
}
async function GetDataFromId(id) {
  // loader.style.display = "block";

  let url = select.value;
  try {
    let res = await fetch(`${url}/${id}`);
    let data = await res.json();
    let obj = data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
