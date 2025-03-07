let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let recipes = document.querySelectorAll(".recipes");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let  recipeName = document.querySelectorAll(".recipeName");




let count = 0;
 
const getData = async (value) =>{
    try{
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
        let jsonData = await data.json()
    
        console.log(jsonData.meals);
        document.querySelector(".showRecipe").innerHTML=""
        jsonData.meals.forEach(function(data){
            console.log(data);
            let div = document.createElement("div");
         div.classList.add("card");
        div.innerHTML=`
        <img src=${data.strMealThumb } alt="">
        <p>${data.strMeal    }</p>
        <button>View More</button>
        `
        document.querySelector(".showRecipe").appendChild(div)
        })   
    }catch(error){
        document.querySelector(".showRecipe").innerHTML="<h1>Recipe Not Found</h1>"
    }
     
}

searchBtn.addEventListener("click", function(){
    let searchValue = searchInput.value ;
    if(searchValue == ""){
        alert("First Serach Value")
    }else{
        getData(searchValue)
    }
})

recipeName.forEach(function(name){
    name.addEventListener("click", function(){
        getData(name.value)
    })
})


// slider
recipes.forEach(function(slide, index){
    slide.style.left=`${index * 100}%`
})

function myFun(){
    recipes.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
}

nextBtn.addEventListener("click", function(){
    count++;
    if(count == recipes.length){
        count=0;
    }
    myFun();
})

prevBtn.addEventListener("click", function(){
    count--;
    if(count == -1){
        count=recipes.length-1;
    }
    myFun();
})