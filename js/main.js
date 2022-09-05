
let RecipeList = [];
let RecipeDetailsList = [];

let navLinks = document.querySelectorAll(".nav-link");
for(let i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", function(e){
    let type = e.target.innerHTML;
    getRecipe(type);
  })
}

/* 
let ItemDetails = document.querySelectorAll(".recipeImg");
for(let i = 0; i < ItemDetails.length; i++){
  ItemDetails[i].addEventListener("click", function(e){
    let recipeId = e.target.innerHTML;
    console.log(recipeId);
    getRecipe(type);
  })
} */


function getRecipe(recipeType = "chickpea"){
    let myHttp = new XMLHttpRequest()
    myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${recipeType}`);
    myHttp.send()
    myHttp.addEventListener("readystatechange", function(){
        if(myHttp.readyState == 4 && myHttp.status == 200){
            RecipeList = JSON.parse(myHttp.response).recipes;
            Display()
            console.log(RecipeList);
            
        }
    })
}

getRecipe()
Display()

function Display(){
    let temp = "";
    RecipeList.forEach((element)=>{
        temp += `<div class="d-flex col-md-3 memberLoader">
        <div class="member d-flex flex-column overflow-hidden">
          <div class="position-relative overflow-hidden">
            <img src="${element.image_url}" alt="" style="width: 100%;" id="itemImage">
            <div class="member-layer d-flex justify-content-center">
              <div class=" w-75 text-white">
                      <div class="social-member-details">
                        <h6 class="p-1">Source URL:</h6>
                        <P class="p-2"><a class=" text-white-50" href="${element.source_url}">${element.source_url}</a></P>
                        <h6>publisher URL:</h6>
                        <p class="p-2"><a class=" text-white-50" href="${element.publisher_url}">${element.publisher_url}</a></p>
                        <h6>Recipe Id:</h6>
                        <p>${element.recipe_id}</p>
                      </div>
              </div>
            </div>
          </div>
          <div class="d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center">
            <h4 class="mt-md-2 text-center">${element.title}</h4>
            <p class="text-muted text-center">${element.publisher}</p>
          </div>
        </div>
      </div>`
    })
    document.getElementById("category-item").innerHTML = temp;
    console.log(RecipeList);
}
