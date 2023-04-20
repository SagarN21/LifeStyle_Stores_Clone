let functionalityData = [];

async function getAllData() {
  try {
    let responce = await fetch(
      "https://63984241fe03352a94ca27c3.mockapi.io/lifestyleApi/MensFormals"
    );
    let secondData = await fetch(
      "https://63984241fe03352a94ca27c3.mockapi.io/lifestyleApi/MensCasuals"
    );
    if (responce.ok == true || secondData.ok == true) {
      let secData = await secondData.json();
      let allData = await responce.json();
      let allMensClothesData = [...allData, ...secData];
      // console.log(allMensClothesData)
      showDataOnPage(allMensClothesData);
      functionalityData = [...allMensClothesData];
      sortByPrice(allMensClothesData);
      discount(allMensClothesData);
      // console.log(allMensClothesData)
    }
  } catch (error) {
    console.log(error);
    // alert("Data not found");
  }
}
getAllData();

//search funcinality
function searchProduct() {
  let search = document.querySelector("#productName").value;
  let newData = functionalityData.filter(function (elem) {
    return elem.title.toLowerCase().includes(search.toLowerCase());
  });
  showDataOnPage(newData);
}

//sort by discount
function discount(data) {
  let dis = document.querySelector("#discount");
  dis.addEventListener("change", () => {
    let dis = document.querySelector("#discount").value;
    dis = +dis;
    if (dis != 0) {
      let discountData = data.filter((item) => {
        let discount = +item.discountPercentage;
        return discount == dis;
      });
      showDataOnPage(discountData);
    } else {
      showDataOnPage(data);
    }
  });
}

// sort by price
function sortByPrice(data) {
  let change = document.querySelector("#sortByPrice");
  change.addEventListener("change", () => {
    let num = document.querySelector("#sortByPrice").value;
    num = +num;
    if (num == 0) {
      showDataOnPage(data);
    } else if (num == 1001) {
      let arr = data.filter((item) => {
        // console.log(typeof item.price)
        let price = +item.price;
        return price > num;
      });
      showDataOnPage(arr);
    } else {
      let arr = data.filter((item) => {
        console.log(typeof item.price);
        let price = +item.price;
        return price < num;
      });
      showDataOnPage(arr);
    }
  });
}

function showDataOnPage(allClothes) {
  document.querySelector("#showProducts").innerHTML = "";
  let data = allClothes.map((item) => {
    // console.log(item)

    return `
        <div id="product" >
        <img src="${item.images[0]}" data-id=${item.id} class="clickImage" alt="">
        <p class="price"><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>${item.price}</p>
        <p>${item.title}</p>
        <div class="basket">
        <button data-id=${item.id}>ADD TO BASKET</button>
        </div>
        </div>
        `;
  });
  //    console.log(data)
  let show = document.querySelector("#showProducts");
  show.innerHTML = data.join("");

  //count of all products
  let showCount = document.querySelector(".showCount");
  showCount.innerText = `${data.length} Products`;

  //click on image
  let allProductId = document.querySelectorAll(".clickImage");
  for (let oneProductId of allProductId) {
    oneProductId.addEventListener("click", () => {
      let id = oneProductId.dataset.id;
      sessionStorage.setItem("productId", id);
      window.location.href = "oneImageDetail.html";
    });
  }

  //click to add in basket
  let btn = document.querySelectorAll(".basket>button");
  let allArrData = JSON.parse(localStorage.getItem("cart")) || [];
  for (let button of btn) {
    button.addEventListener("click", () => {
      let id = button.dataset.id;
      let data = allClothes.filter((item) => {
        return item.id == id;
      });
      let storeData = JSON.parse(localStorage.getItem("cart"));
      if (storeData == null) {
        let obj = data[0];
        allArrData.push(obj);
      } else {
        let flag = "no";
        for (let key of storeData) {
          if (key.id == id) {
            flag = "yes";
            break;
          }
        }
        if (flag == "no") {
          let obj = data[0];
          allArrData.push(obj);
          swal("Added to Basket!", "", "success");
        } else {
          // "warning","success","error","info"
          swal("Already in Basket", "", "info");
        }
      }
      localStorage.setItem("cart", JSON.stringify(allArrData));
    });
  }
}
