//! APIs Links!!

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

//? Admin==>   <Adding data to product>

let AddProductForm = document.getElementById("AddProduct");
AddProductForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let AllInputTagsValue = document.querySelectorAll("#AddProduct input");
  let obj = {};
  for (let i = 0; i < AllInputTagsValue.length - 3; i++) {
    obj[AllInputTagsValue[i].id] = AllInputTagsValue[i].value;
  }
  obj[AllInputTagsValue[9].id] = [
    AllInputTagsValue[9].value,
    AllInputTagsValue[10].value,
  ];
  //? Womens Top Wear
  AddProductInDatabase(obj);
});

async function AddProductInDatabase(data) {
  let Database = document.getElementById("select").value;
  try {
    let res = await fetch(Database, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let addedproduct = await res.json();
    console.log(res);
    console.log(addedproduct);
    swal("Done!", "Product Added Successfully!", "success");
  } catch (error) {
    swal("ERROR!", "Cannot Add Product!", "error");
    console.log(error);
  }
}
