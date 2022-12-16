getData();
async function getData() {
  try {
    let res = await fetch(
      "https://63984241fe03352a94ca27c3.mockapi.io/lifestyleApi/womensTopWear"
    );
    let data = await res.json();
    console.log(data);
    showdata(data);
  } catch (error) {
    console.log(error);
  }
}

function showdata(data) {
  let productList = document.querySelector(".showproducts");
  let newArray = data.map((item) => {
    return `
        <div class="product-card">
              <div><img src=
              \"${item.thumbnail}\" alt="" /></div>
              <div>
                <h4>${item.title}</h4>
                <label>Price: ${item.price}/-</label> <space></space>
                <label>Rating: ${item.rating}⭐</label><br />
                <label>Color: Silver</label><br />
                <label for="">Quantity</label>
                <button class="plusminus" id="minus">➖</button>
                <label id="quantity">3</label>
                <button class="plusminus" id="plus">➕</button>
                <label>Size: M</label><span></span><br />
                <div class="cardbuttons">
                  <button class="removeNview">Remove from Cart</button>
                  <button class="removeNview">View Product Details</button>
                </div>
              </div>
            </div> 
        `;
  });
  console.log(newArray.join(" "));
  productList.innerHTML = newArray.join(" ");
}
