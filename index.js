
let BASE_URL = "http://localhost:3000/fruits/";



class Fruit{
    id; genus; name; family; order; nutritions;
    constructor(id, genus, name, family, order, nutritions) {
        this.id = id;
        this.genus = genus;
        this.name = name;
        this.family = family;
        this.order = order;
        this.nutritions = nutritions;
    }
}


document.addEventListener('DOMContentLoaded', ()=>{
  getFruits();
  loadFruit("1");
  submitForm();


  document.getElementById("reset-form").addEventListener("click", (e)=>{
    e.preventDefault();
    document.getElementById("new-fruit").reset();
  })


  document.getElementById("add-comment").addEventListener("submit", (e)=>{
    e.preventDefault();
    let comment = document.getElementById("comment").value;
  })


  document.getElementById("reset-comment").addEventListener("click", (e)=>{
    e.preventDefault();
    let comment = document.getElementById("comment").value = ""; 
  })
  


})


function getFruits(){

  let fruitHeadear = document.getElementById("fruits");
  
  fetch(BASE_URL)
    .then( response => response.json() )
    .then( (result) => {
  
      result.forEach(
        (fruit) => {
          let fruitInfo = new Fruit(fruit.id, fruit.genus, fruit.name, fruit.family, fruit.order, fruit.nutritions);

          let fruitName = document.createElement("li");
          fruitName.classList.add("itemName");
          fruitName.style.color = "darkgreen"
          fruitName.style.cursor = "pointer"
          fruitName.innerText = fruitInfo.name;
          fruitHeadear.append(fruitName);
          fruitName.addEventListener("click", ()=>{
            loadFruit(fruitInfo.id);
          })
  
        }
      )
  
    }).catch( error => {throw error});
  
}


function loadFruit(id){
  fetch(BASE_URL+id)
  .then( response => response.json() )
  .then( (fruit) => {
    let fruitInfo = new Fruit(fruit.id, fruit.genus, fruit.name, fruit.family, fruit.order, fruit.nutritions);
    document.getElementById("name").innerText = fruitInfo.name;
    document.getElementById("genus").innerText = fruitInfo.genus;
    document.getElementById("family").innerText = fruitInfo.family;
    document.getElementById("order").innerText = fruitInfo.order;
    document.getElementById("carbohydrates").innerText = fruitInfo.nutritions.carbohydrates;
    document.getElementById("protein").innerText = fruitInfo.nutritions.protein;
    document.getElementById("fat").innerText = fruitInfo.nutritions.fat;
    document.getElementById("calories").innerText = fruitInfo.nutritions.calories;
    document.getElementById("sugar").innerText = fruitInfo.nutritions.sugar;
           
            
  }
  )
  .catch( error => {throw error});
}


function submitForm (handleSubmit) {
  document.getElementById("add-new-fruit").addEventListener("submit", handleSubmit)
}


function handleSubmit(e) {
  e.preventDefault()


  let genus = document.getElementById("new-genus");
  let name = document.getElementById("new-name");
  let id = document.getElementById("new-id");
  let family = document.getElementById("new-family");
  let order = document.getElementById("new-order");
  let carbohydrates = document.getElementById("new-carbohydrates");
  let protein = document.getElementById("new-protein");
  let fat = document.getElementById("new-fat");
  let calories = document.getElementById("new-calories");
  let sugar = document.getElementById("new-sugar");

      
  let fruitObj = {
    genus: genus.value, 
    name: name.value,
    id: id.value, 
    family: family.value, 
    order: order.value, 
    nutritions: {
      carbohydrates: carbohydrates.value, 
      protein: protein.value, 
      fat: fat.value, 
      calories: calories.value, 
      sugar: sugar.value,
      }};

        adoptFruit(fruitObj)
    }


    function adoptFruit (fruitObj) {
      fetch("http://localhost:3000/fruits", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json"
        },
        body: JSON.stringify(fruitObj),
     })
     .then(response => response.json())
     .then(fruit => {
      console.log(fruit);
     })
     .catch((error) => {
      console.error('Error:', error);
     })


    }










