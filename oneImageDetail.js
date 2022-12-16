async function getData() {
    try {
        let responce = await fetch("https://63984241fe03352a94ca27c3.mockapi.io/lifestyleApi/MensFormals")
        if (responce.ok) {
            let allData = await responce.json()
            let getId = sessionStorage.getItem("productId")
            let oneData = allData.filter((item) => {
                return item.id == getId
            })
            // console.log(oneData[0].images)
            let image = document.querySelector(".image")
            image.innerHTML = ` <img src="${oneData[0].images[0]}" alt="">
            <img src="${oneData[0].images[1]}" alt="">
            `
            let smallImage = document.querySelector(".smallImage")
            smallImage.innerHTML = `<img src="${oneData[0].images[0]}" alt="">`
            let p = document.querySelector(".price")
            p.innerText = oneData[0].price
            let basket = document.querySelector(".basket")
            basket.addEventListener("click", () => {
                // let getData = JSON.parse(localStorage.getItem("cart"))
                let localData = JSON.parse(localStorage.getItem("cart"))||[]
                if (localData == null) {
                    localData.push(oneData[0])
                } else {
                    let flag = "no"
                    for (let allObj of localData) {
                        if (allObj.id == getId) {
                            flag = "yes"
                            break
                        }
                    }
                    if(flag=="no"){
                        alert("hello")
                        localData.push(oneData[0])
                    }else{
                        alert("data is allready in basket")
                    }
                }
                localStorage.setItem("cart", JSON.stringify(localData))
            })
            showallData(allData)
           
        }
    } catch (error) {
        alert("Data is not found")
    }
}
getData()


function showallData(allData){
   let data = allData.map((item)=>{
    // console.log(item)
    if(item.id!=1 && item.id!=5 && item.id!=2 && item.id!=7 && item.id!=9 && item.id!=15){
        return `
    <div class="individula">
        <img src="${item.images[0]}" alt="">
        <p><i class="fa-solid fa-indian-rupee-sign"></i>${item.price}</p>
        <p>${item.title}</p>
    </div>
    `
    }
    
   })
   let showData = document.querySelector("#someImage")
   showData.innerHTML = data.join("")
}





