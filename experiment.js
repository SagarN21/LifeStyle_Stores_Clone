//? ------------------------------APIs Links!!-----------------------------------
//
let WomensTopWear =
  "https://63984241fe03352a94ca27c3.mockapi.io/lifestyleApi/womensTopWear";
let WomensEthnicWear =
  "https://63984241fe03352a94ca27c3.mockapi.io/lifestyleApi/WomenEthnicWear";
let MensFormals =
  "https://63984241fe03352a94ca27c3.mockapi.io/lifestyleApi/MensFormals";
let MensCasuals =
  "https://63984241fe03352a94ca27c3.mockapi.io/lifestyleApi/MensCasuals";
let KidsWear =
  "https://63987962044fa481d69ed8cc.mockapi.io/stylezilla/KidsWear";
let BeautyProducts =
  "https://63987962044fa481d69ed8cc.mockapi.io/stylezilla/BeautyProducts";
let Shoes = "https://63987962044fa481d69ed8cc.mockapi.io/stylezilla/Shoes";
let Bags = "https://63987962044fa481d69ed8cc.mockapi.io/stylezilla/Bags";

// ? ---------------------------------------------------------------------------

let FetchButon = document.getElementById("fetchproducts");
FetchButon.addEventListener("click", function () {
  FetchWomenTopWear();
});
async function FetchWomenTopWear() {
  let Database = document.getElementById("select").value;
  try {
    let res = await fetch(Database);
    let data = await res.json();
    ShowData(data);
  } catch (error) {
    console.log(error);
  }
}
function ShowData(data) {
  console.log(data);
  let Container = document.querySelector(".container");
  Container.innerHTML = data;
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
    <button class="cardbutton" id="viewproduct">View</button>
    <button class="cardbutton" id="removeproduct">Remove</button>
  </div>
    `;
  });
  Container.innerHTML = newArray.join(" ");

  //? let Array10 = [];
  //? for (let i = 0; i < 4; i++) {
  //?   Array10.push(newArray.join(" "));
  //? }
  //? Container.innerHTML = Array10.join(" ");
}
