async function getAllData() {
    try {
        let responce = await fetch("https://63984241fe03352a94ca27c3.mockapi.io/lifestyleApi/MensFormals")
        let secondData = await fetch("https://63984241fe03352a94ca27c3.mockapi.io/lifestyleApi/MensCasuals")
        if (responce.ok == true || secondData.ok==true) {
            let secData = await secondData.json() 
            // console.log(secData)
            let allData = await responce.json()
            // console.log(allData)
            let data = allData.map((item) => {
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
                `
            })
            let secondAllData = secData.map((item) => {
                // console.log(item)
                return `
                <div id="product" >
                <img src="${item.images[0]}" data-id=${item.id}a class="clickImage" alt="">
                <p class="price"><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>${item.price}</p>
                <p>${item.title}</p>
                <div class="basket">
                <button data-id=${item.id}>ADD TO BASKET</button>
                </div>
                </div>
                `
            })
            let allFirstAndSecondData = [...data, ...secondAllData]
            let show = document.querySelector("#showProducts")
            show.innerHTML = allFirstAndSecondData.join("")
            let showCount = document.querySelector(".showCount")
            showCount.innerText = `${allFirstAndSecondData.length} Products`
            // console.log(allData.length)
            let allProductId = document.querySelectorAll(".clickImage")
            for(let oneProductId of allProductId ){
                oneProductId.addEventListener("click", ()=>{
                    let id = oneProductId.dataset.id
                    sessionStorage.setItem("productId", id)
                    window.location.href = "oneImageDetail.html"
                })
            }
            let btn = document.querySelectorAll(".basket>button")
            let allArrData = JSON.parse(localStorage.getItem("cart"))||[]
            for (let button of btn) {
                button.addEventListener("click", () => {
                    let id = button.dataset.id
                    let data = allData.filter((item) => {
                        return item.id == id
                    })
                    let storeData = JSON.parse(localStorage.getItem("cart"))
                    if (storeData == null) {
                        let obj = data[0]
                        allArrData.push(obj)
                    } else {
                        let flag = "no"
                        for (let key of storeData) {
                            if (key.id == id) {
                                flag = "yes"
                                break
                            }
                        }
                        if (flag == "no") {
                            let obj = data[0]
                            allArrData.push(obj)
                        }else{
                            swal("hello")
                        }
                    }
                    localStorage.setItem("cart", JSON.stringify(allArrData))
                })
            }
        }
    } catch (error) {
        alert("Data not found")
    }
}
getAllData()





