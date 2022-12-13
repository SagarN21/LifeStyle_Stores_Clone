// Check ReadME once

let BaseUrl = "http://localhost:3000/Products";
async function getData() {
  try {
    let res = await fetch(BaseUrl);
    let data = await res.json(res);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
