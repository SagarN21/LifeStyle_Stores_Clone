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

// drop down list


 let wonmen_list_render = document.querySelector("#women_list_head")
 wonmen_list_render.addEventListener("mouseover" , (e)=>{
  //  e.preventDefault()
   let women_list = document.querySelector("#women_list")
   women_list.style.display = "block"
   women_list.style.display = "flex"

   
   let men_list = document.querySelector("#mens_list")
   men_list.style.display = "none"
   let kids_list = document.querySelector("#kids_list")
   kids_list.style.display="none"
   let beauty_list = document.querySelector("#beauty_list")
   beauty_list.style.display ="none"
   let shoes_bag_list = document.querySelector("#shoes_bag_list")
   shoes_bag_list.style.display = "none"

 })
 
 wonmen_list_render.addEventListener("mouseenter" , ()=>{
   let women_list = document.querySelector("#women_list")
   women_list.style.display = "none"
   let men_list = document.querySelector("#mens_list")
   men_list.style.display = "none"
   let kids_list = document.querySelector("#kids_list")
   kids_list.style.display="none"
   let beauty_list = document.querySelector("#beauty_list")
   beauty_list.style.display ="none"
   let shoes_bag_list = document.querySelector("#shoes_bag_list")
   shoes_bag_list.style.display = "none"

 })

 
 
 let men_list_render = document.querySelector("#men_list_head")
 men_list_render.addEventListener("mouseover" , (e)=>{
  //  e.preventDefault()
   let men_list = document.querySelector("#mens_list")
   men_list.style.display = "block"
   men_list.style.display = "flex"
   let women_list = document.querySelector("#women_list")
   women_list.style.display = "none"
 
   let kids_list = document.querySelector("#kids_list")
   kids_list.style.display="none"
   let beauty_list = document.querySelector("#beauty_list")
   beauty_list.style.display ="none"
   let shoes_bag_list = document.querySelector("#shoes_bag_list")
   shoes_bag_list.style.display = "none"

 })
 men_list_render.addEventListener("mouseenter" , ()=>{
   let women_list = document.querySelector("#women_list")
   women_list.style.display = "none"
   let men_list = document.querySelector("#mens_list")
   men_list.style.display = "none"
   let kids_list = document.querySelector("#kids_list")
   kids_list.style.display="none"
   let beauty_list = document.querySelector("#beauty_list")
   beauty_list.style.display ="none"
   let shoes_bag_list = document.querySelector("#shoes_bag_list")
   shoes_bag_list.style.display = "none"


 })

 
 
 let kid_list_render = document.querySelector("#kids_head")
  kid_list_render.addEventListener("mouseover" , (e)=>{
  //  e.preventDefault()
   let kids_list = document.querySelector("#kids_list")
   kids_list.style.display = "block"
   kids_list.style.display = "flex"

   let women_list = document.querySelector("#women_list")
   women_list.style.display = "none"
   let men_list = document.querySelector("#mens_list")
   men_list.style.display = "none"
   
   let beauty_list = document.querySelector("#beauty_list")
   beauty_list.style.display ="none"
   let shoes_bag_list = document.querySelector("#shoes_bag_list")
   shoes_bag_list.style.display = "none"

  })

  kid_list_render.addEventListener("mouseenter" , ()=>{
   let women_list = document.querySelector("#women_list")
   women_list.style.display = "none"
   let men_list = document.querySelector("#mens_list")
   men_list.style.display = "none"
   let kids_list = document.querySelector("#kids_list")
   kids_list.style.display="none"
   let beauty_list = document.querySelector("#beauty_list")
   beauty_list.style.display ="none"
   let shoes_bag_list = document.querySelector("#shoes_bag_list")
   shoes_bag_list.style.display = "none"


  })

  let shoes_list_render = document.querySelector("#shoes_bag_head")
  shoes_list_render.addEventListener("mouseover" , (e)=>{
  //  e.preventDefault()
   let shoes_bag_list = document.querySelector("#shoes_bag_list")
   shoes_bag_list.style.display = "block"
   shoes_bag_list.style.display = "flex"

   let women_list = document.querySelector("#women_list")
   women_list.style.display = "none"
   let men_list = document.querySelector("#mens_list")
   men_list.style.display = "none"
   let kids_list = document.querySelector("#kids_list")
   kids_list.style.display="none"
   let beauty_list = document.querySelector("#beauty_list")
   beauty_list.style.display ="none"
 
  })
  shoes_list_render.addEventListener("mouseenter" , ()=>{
   let shoes_bag_list = document.querySelector("#shoes_bag_list")
   shoes_bag_list.style.display = "none"

   let kids_list = document.querySelector("#kids_list")
   kids_list.style.display="none"
   let men_list = document.querySelector("#mens_list")
   men_list.style.display = "none"

   let women_list = document.querySelector("#women_list")
   women_list.style.display = "none"
   let beauty_list = document.querySelector("#beauty_list")
   beauty_list.style.display ="none"


  })


  let beauty_list_render = document.querySelector("#beauty_head")
    beauty_list_render.addEventListener("mouseover" ,(el) =>{
    //  el.preventDefault();
   let beauty_list = document.querySelector("#beauty_list")
   beauty_list.style.display ="block"
   beauty_list.style.display= "flex"

   let women_list = document.querySelector("#women_list")
   women_list.style.display = "none"
   let men_list = document.querySelector("#mens_list")
   men_list.style.display = "none"
   let kids_list = document.querySelector("#kids_list")
   kids_list.style.display="none"
  
   let shoes_bag_list = document.querySelector("#shoes_bag_list")
   shoes_bag_list.style.display = "none"


  })
  beauty_list_render.addEventListener("mouseenter" ,  ()=>{
   let beauty_list = document.querySelector("#beauty_list")
   beauty_list.style.display ="none"

   let shoes_bag_list = document.querySelector("#shoes_bag_list")
   shoes_bag_list.style.display = "none"

   let kids_list = document.querySelector("#kids_list")
   kids_list.style.display="none"
   let men_list = document.querySelector("#mens_list")
   men_list.style.display = "none"

   let women_list = document.querySelector("#women_list")
   women_list.style.display = "none"

  }) 

  // let pop_up =document.querySelector("#pop_up")
  // setInterval(() => {
  //   pop_up.style.display="none"
  // }, 2000);

  let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


