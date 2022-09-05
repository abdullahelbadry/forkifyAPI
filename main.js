

let RecipeList = [];

function getRecipe(recipeType = "pizza"){
    let myHttp = new XMLHttpRequest()
    myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${recipeType}`);
    myHttp.send()
    myHttp.addEventListener("readystatechange", function(){
        if(myHttp.readyState == 4 && myHttp.status == 200){
            RecipeList = JSON.parse(myHttp.response).recipes;
            /* Display() */
            console.log(RecipeList);
            
        }
    })
}

/* getRecipe() */

function Display(){
    let temp = "";
    RecipeList.forEach((element)=>{
        temp += `<div class="d-flex col-md-3" id="category-item">
        <div class="member d-md-flex flex-md-column justify-content-md-center align-items-md-center">
          <div class="position-relative overflow-hidden">
            <img src="images/member-1.jpg" alt="" style="width: 100%;">
            <div class="member-layer d-flex justify-content-center">
              <div class="social-member w-75">
                <a href=""><i class="fab fa-twitter text-white"></i></a>
                <a href=""><i class="fab fa-facebook text-white"></i></a>
                <a href=""><i class="fab fa-linkedin text-white"></i></a>
                <a href=""><i class="fab fa-dribbble text-white"></i></a>
              </div>
            </div>
          </div>
          <div class="d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center">
            <h4 class="mt-md-2">Michael Broad</h4>
            <p class="text-muted">Web Designer</p>
          </div>
        </div>
      </div>`
    })
    document.getElementById("rowData").innerHTML = temp;
}

