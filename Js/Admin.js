//?-----------------------------------------<Global variables>-------------------------------------------------------------------

let loader = document.getElementById("loader");
let AddProductForm = document.getElementById("AddProduct");
let DeleteSelector = document.getElementById("DeleteSelect");
let EditSelector = document.getElementById("EditSelect");
let container2 = document.getElementById("edit-products-list");

//? --------------------------------------Adding Product to Databses>--------------------------------------------------------------------------------

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
  AddProductInDatabase(obj);
});

async function AddProductInDatabase(data) {
  loader.style.display = "block";
  let Database = document.getElementById("Addselect").value;
  try {
    let res = await fetch(Database, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let addedproduct = await res.json();
    console.log("Product Added", addedproduct);
    swal("Done!", "Product Added Successfully!", "success");
    loader.style.display = "none";
  } catch (error) {
    swal("ERROR!", "Cannot Add Product!", "error");
    console.log(error);
    loader.style.display = "none";
  }
}

// ? ------------------------------------------<Deleteting Products Functions>--------------------------------------

DeleteSelector.addEventListener("change", FetchDeleteData);
async function FetchDeleteData() {
  loader.style.display = "block";
  let url = DeleteSelector.value;
  if (url == "") {
    loader.style.display = "none";
    let container = document.getElementById("delete-products-list");
    container.innerHTML = "";
    return;
  }
  try {
    let res = await fetch(url);
    let data = await res.json();
    ProductsListShow(data);
    loader.style.display = "none";
  } catch (error) {
    swal("ERROR!", "Unable to fetch from Server!", "error");
    loader.style.display = "none";
  }
}
function ProductsListShow(data) {
  let container = document.getElementById("delete-products-list");
  container.innerHTML = "";

  let newArray = data.map((item) => {
    return `
    <div class="DeleteProductCard">
        <div id="delete-product-id" data-id="${item.id}"><h1>ID.</h1><label>${
      item.id
    }</label></div>
        <div><img src="${item.thumbnail}" alt=""></div>
        <div><img src="${item.images[0]}" alt=""></div>
        <div><img src="${item.images[1]}" alt=""></div>
        <div id="delete-product-label"><label>${item.title}</label><br>
          <p id="delete-description">${item.description.substring(
            0,
            150
          )}...</p><br>
       </div>
        <div class="delete-infos"><h2>Brand</h2>
        <label>${item.brand}</label></div>
        <div class="delete-infos"><h2>Stock</h2>
        <label>${item.stock}</label></div>
        <div class="delete-infos"><h2>Rating</h2>
        <label>${item.rating}</label><label>⭐</label></div>
        <div class="delete-infos"><h2>Price</h2>
        <label>${item.price}/-</label></div>
        <button data-id="${item.id}" 
        class="product-button" id="delete-product-button">
        Delete</button>
      </div>
    `;
  });

  container.innerHTML = `<div><center><h2 id="delete-product-databse-name"> - PRODUCTS LIST -</h2></center></div>${newArray.join(
    " "
  )}`;
  let Deleters = document.querySelectorAll("#delete-product-button");
  for (let dels of Deleters) {
    dels.addEventListener("click", (event) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          DeleteProduct(event.target.dataset.id);
        } else {
          swal("Your Product file is safe!");
        }
      });
    });
  }
}
async function DeleteProduct(id) {
  loader.style.display = "block";
  let url = DeleteSelector.value;
  try {
    let res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      swal("Done!", "Product Deleted Successfully!", "success");
      FetchDeleteData();
      loader.style.display = "none";
    } else {
      swal("ERROR!", "Something Went Wrong!", "error");
    }
  } catch (error) {
    swal("ERROR!", "Server Error!", "error");
    console.log(error);
  }
}

// ? -------------------------------------------<Edit a Product>-----------------------------------------------------------

EditSelector.addEventListener("change", FetchEditData);
async function FetchEditData() {
  loader.style.display = "block";
  let url = EditSelector.value;
  if (url == "") {
    loader.style.display = "none";
    let container = document.getElementById("edit-products-list");
    container.innerHTML = "";
    return;
  }
  try {
    let res = await fetch(url);
    let data = await res.json();
    ProductsListShow2(data);
    loader.style.display = "none";
  } catch (error) {
    swal("ERROR!", "Unable to fetch from Server!", "error");
    loader.style.display = "none";
  }
}
function ProductsListShow2(data) {
  container2.innerHTML = "";

  let newArray = data.map((item) => {
    return `
    <div class="DeleteProductCard">
        <div id="delete-product-id" data-id="${item.id}"><h1>ID.</h1><label>${
      item.id
    }</label></div>
        <div><img src="${item.thumbnail}" alt=""></div>
        <div><img src="${item.images[0]}" alt=""></div>
        <div><img src="${item.images[1]}" alt=""></div>
        <div id="delete-product-label"><label>${item.title}</label><br>
          <p id="delete-description">${item.description.substring(
            0,
            150
          )}...</p><br>
       </div>
        <div class="infos"><h2>Brand</h2><label>${item.brand}</label></div>
        <div class="infos"><h2>Stock</h2><label>${item.stock}</label></div>
        <div class="infos"><h2>Rating</h2><label>${
          item.rating
        }</label><label>⭐</label></div>
        <div class="infos"><h2>Price</h2><label>${item.price}/-</label></div>
        <button data-id="${
          item.id
        }" class="product-button" id="edit-product-button">Edit</button>
      </div>
    `;
  });

  container2.innerHTML = `<div><center><h2 id="product-databse-name"> - PRODUCTS LIST -</h2></center></div>${newArray.join(
    " "
  )}`;
  let Editors = document.querySelectorAll("#edit-product-button");
  for (let edit of Editors) {
    edit.addEventListener("click", (event) => {
      let id = event.target.dataset.id;
      PatchObjMaker(id);
    });
  }
}
async function PatchObjMaker(id) {
  loader.style.display = "block";
  let url = EditSelector.value;
  try {
    let res = await fetch(`${url}/${id}`);
    let data = await res.json();
    ChangingDetails(data);
  } catch (error) {
    console.log(error);
  }
}
function ChangingDetails(obj) {
  container2.innerHTML = `
  <div class="edit-product-card">
  <div>
    <img
    src=${obj.thumbnail}
    alt=""
  />
  </div>
  <div>
    <div class="details">
      <h4>${obj.title}</h4>
  <p>Rating : ${obj.rating}⭐</p>
  <p>Brand : ${obj.brand}</p>
  <p>Stock : ${obj.stock}</p>
  <p>Stock : ${obj.price}/-</p>
  <p>${obj.description}</p>
  <br>
  <hr>
    </div>
    
  <div class="changers">
    <form id="changeDataForm">
    <label>Change Product Title<br>
  <textarea id="changetitle" type="text"  rows="2" cols="30" placeholder="Enter 
  Product Title" required/>${obj.title}</textarea>
  </label>
<label>Change Product Description<br>
<textarea id="changedescription" type="text" rows="2" cols="30" 
placeholder="Enter Product Description" required/>${obj.description}</textarea>
</label>
</label>
<label>Change Product Price<br>
<input id="changeprice" type="number" data-id=${obj.id} value=${obj.price}
 placeholder="Enter Product Price" required />
</label>
<label>Change Product Discount<br>
<input id="changediscountPercentage" value=${obj.discountPercentage} type="number"
 placeholder="Enter Product DiscountPercentage" required />
</label>
<label>Change Product Rating<br>
<input id="changerating" type="number" value=${obj.rating} min="0" step="0.1" 
placeholder="Enter Product Rating" required />
</label>
<label>Change Product Stock<br>
<input id="changestock" type="number" value=${obj.stock} 
placeholder="Enter Product Stock" required />
</label>
<label>Change Product Brand<br>
<input id="changebrand" type="text" value=${obj.brand} 
placeholder="Enter Product Brand" required/>
</label>
<label>Change Product Category<br>
<input id="changecategory" type="text" value=${obj.category} 
placeholder="Enter Product Category" required/>
</label>
<label>Change Product Thumbnail<br>
<input id="changethumbnail" type="text" value=${obj.thumbnail} 
placeholder="Enter ThumbnailURL" required />
</label>
<label>Change Product Image 1<br>
<input id="changeimage1" type="text" value=${obj.images[0]} 
placeholder="Enter ImageUrl" required />
</label>
<label>Change Product Image 2<br>
  <input id="changeimage2" type="text" value=${obj.images[1]} 
  placeholder="Enter ImageUrl" required />
  </label>
  <input type="submit" data-id=${obj.id} class="cardbutton" 
  id="viewproduct" value="Save Changes">
</form>
</div>
  </div>
</div>`;
  loader.style.display = "none";
  let savebutton = document.getElementById("viewproduct");
  savebutton.addEventListener("click", function (event) {
    event.preventDefault();
    let id = event.target.dataset.id;
    let title = document.getElementById("changetitle").value;
    let description = document.getElementById("changedescription").value;
    let price = document.getElementById("changeprice").value;
    let discountPercentage = document.getElementById(
      "changediscountPercentage"
    ).value;
    let rating = document.getElementById("changerating").value;
    let stock = document.getElementById("changestock").value;
    let brand = document.getElementById("changebrand").value;
    let category = document.getElementById("changecategory").value;
    let thumbnail = document.getElementById("changethumbnail").value;
    let image1 = document.getElementById("changeimage1").value;
    let image2 = document.getElementById("changeimage2").value;

    let newobj = {
      id: id,
      title: title,
      description: description,
      price: price,
      discountPercentage: discountPercentage,
      rating: rating,
      stock: stock,
      brand: brand,
      category: category,
      thumbnail: thumbnail,
      images: [image1, image2],
    };
    PatchPUT(newobj);
  });
}
async function PatchPUT(obj) {
  loader.style.display = "block";
  let url = EditSelector.value;
  let id = +obj.id;
  try {
    let res = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (res.ok) {
      let data = await res.json();
      console.log("Product Details Changing Success", data);
      loader.style.display = "none";
      swal("Done!", "Changes Saved Successfully!", "success");
      FetchEditData();
    }
  } catch (error) {
    console.log(error);
  }
}
