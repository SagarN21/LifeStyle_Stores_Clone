let womens = document.querySelector("#womens_top_btn")
let mens = document.querySelector("#mens_top_btn")
let kids= document.querySelector("#kids_top_btn")
let shoes = document.querySelector("#shoes_top_btn")
let beauty = document.querySelector("#beauty_top_btn")
mens.style.background = "pink"
let women_img = document.querySelector("#womens_in_top_category")
women_img.style.display="none"
let men_img = document.querySelector("#mens_in_top_category")

let kids_img = document.querySelector("#kids_in_top_category")
kids_img.style.display="none"
let shoes_img = document.querySelector("#shoes_in_top_category")
shoes_img.style.display="none"
let beauty_img = document.querySelector("#beauty_in_top_category")
beauty_img.style.display="none"
womens.addEventListener("click" , ()=>{
   women_img.style.display = "block"
   men_img.style.display="none"
   kids_img.style.display="none"
   shoes_img.style.display="none"
   beauty_img.style.display="none"
   womens.style.background = "pink"
   mens.style.background = "aliceblue"
   kids.style.background = "aliceblue"
  shoes.style.background = "aliceblue"
 beauty.style.background = "aliceblue"

})
mens.addEventListener("click" , ()=>{
    men_img.style.display = "block"
    women_img.style.display="none"
    kids_img.style.display="none"
   shoes_img.style.display="none"
   beauty_img.style.display="none"
    mens.style.background = "pink"
   
    kids.style.background = "aliceblue"
   shoes.style.background = "aliceblue"
  beauty.style.background = "aliceblue"
  womens.style.background = "aliceblue"
 })

 kids.addEventListener("click" , ()=>{
kids_img.style.display = "block"
men_img.style.display="none"
women_img.style.display="none"
   shoes_img.style.display="none"
   beauty_img.style.display="none"
   kids.style.background = "pink"
   mens.style.background = "aliceblue"
   
  shoes.style.background = "aliceblue"
 beauty.style.background = "aliceblue"
 womens.style.background = "aliceblue"
  
 })

shoes.addEventListener("click" , ()=>{
   shoes_img.style.display = "block"
   men_img.style.display="none"
women_img.style.display="none"
kids_img.style.display="none"
   beauty_img.style.display="none"
  shoes.style.background = "pink"
  mens.style.background = "aliceblue"
  kids.style.background = "aliceblue"
 
beauty.style.background = "aliceblue"
womens.style.background = "aliceblue"
  
 })
 beauty.addEventListener("click" , ()=>{
   beauty_img.style.display = "block"
   men_img.style.display="none"
   women_img.style.display="none"
   kids_img.style.display="none"
   shoes_img.style.display="none"
  beauty.style.background = "pink"
  mens.style.background = "aliceblue"
  kids.style.background = "aliceblue"
 shoes.style.background = "aliceblue"

womens.style.background = "aliceblue"
 })