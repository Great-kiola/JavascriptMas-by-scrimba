/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

// Declarations
let calcBtn = document.getElementById("btn");
// console.log(noOfGuest);

function submitBtn(){
  
  let cb = document.getElementById("vegetarian-input");
  let idealDinner = document.querySelector("#food");
  let txtInput = document.getElementById("num-input").value;
  let recipeBtn = document.querySelector(".recipeLink"); 

  let url = document.querySelector("a");
  // let recipeLink = document.querySelector("#recipe");
  
  
  if (cb.checked && txtInput <= 4){
    url.href = "https://www.bbcgoodfood.com/recipes/glazed-gammon";
    idealDinner.innerText = "Ham";

  } else if (cb.checked && txtInput >= 5){
    url.href = "https://www.liveeatlearn.com/vegetable-baked-ziti/";
    idealDinner.innerText = "Vegetable Baked Ziti"; 
    
  } else if (txtInput >= 5){
    url.href = "https://www.bbcgoodfood.com/recipes/next-level-roast-turkey";
    idealDinner.innerText = "Turkey";
  
  } else {
    url.href = "https://sallysbakingaddiction.com/homemade-cheese-bread/";
    idealDinner.innerText = "Bread and cheese"; 
  }

  recipeBtn.style.display = "block";
  
}
    



