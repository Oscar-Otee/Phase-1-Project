
const BASE_URL = "http://localhost:3000/fruits/";



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





  document.getElementById("add-new-fruit").addEventListener("submit", (e)=>{
    e.preventDefault();
    // const data = {};
    // data["genus"] = document.getElementById("new-genus").value
    // data["name"] = document.getElementById("new-name").value;
    // data["family"] = document.getElementById("new-family").value;
    // data["order"] = document.getElementById("new-order").value;
    // data["carbohydrates"] = document.getElementById("new-carbohydrates").value;
    // data["protein"] = document.getElementById("new-protein").value;
    // data["fat"] = document.getElementById("new-fat").value;
    // data["calories"] = document.getElementById("new-calories").value;
    // data["sugar"] = document.getElementById("new-sugar").value;
    // data["comment"] = document.getElementById("new-comment").value;

    document.getElementById("new-fruit").value;





//     fetch(BASE_URL, {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(getData()),
//    })
//    .then(response => response.json())
//    .then(data => {
//     console.log('Success:', data);
//    })
//    .catch((error) => {
//     console.error('Error:', error);
//   });
 

})

  document.getElementById("reset-form").addEventListener("click", (e)=>{
    e.preventDefault();
    
    document.getElementById("new-fruit").reset();

  
    
  })


  document.getElementById("add-comment").addEventListener("submit", (e)=>{
    e.preventDefault();
    let comment = document.getElementById("comment").value

    //console.log("DATA")
  })


  document.getElementById("delete-comment").addEventListener("click", (e)=>{
    e.preventDefault();
    let comment = document.getElementById("comment").value = ""

    //console.log("DATA")
  })
  
})




function getFruits(){

  const fruitHeadear = document.getElementById("fruits");
  
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
        //let availableTickets = filmInfo.capacity - filmInfo.tickets_sold;
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





  function getFormData() {
    document.getElementById("new-fruit").reset();
  }


