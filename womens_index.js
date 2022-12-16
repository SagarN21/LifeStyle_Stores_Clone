async function get_data(){
    try{
          let res = await fetch("https://63984241fe03352a94ca27c3.mockapi.io/lifestyleApi/womensTopWear");
          let data =await res.json();
          console.log(data);
          render_data(data)
    }

    catch{
              console.log(error);
    }
}

let slot = document.getElementById("container");



get_data()


function render_data(data)
{   console.log(data);
    let new_data = data.map((item)=>{
          return `<img src = "${item.images[0]}">
          <h6 id ="price"> ${item.price}</h6>
          <h6 id ="desc"> ${item.description}</h6>  `
    })

    return slot.innerHTML = new_data;
}