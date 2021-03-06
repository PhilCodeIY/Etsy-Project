// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let sum = (0);
  let price = (0);
  for (let i = 0; i < data.length; i++){
    sum += (data[i].price);
  }
  return sum/data.length;
}
console.log(question1())



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
let newList = [];
for (let i=0; i < data.length; i++){
  if (data[i].price >= 14  && data[i].price <= 18){
    newList.push(data[i]);
  }
}
return newList;
}
console.log(question2());

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  //Answer:

let GBP = "";
 for (let i=0; i < data.length; i++){
   if (data[i].currency_code === "GBP" ){
      GBP += data[i].title + " " + data[i].price;
   }
 }
console.log(GBP + " pounds");
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer: materials field


  let wood = data.filter(function(item){
    for (let i=0; i < item.materials.length; i++){
      if (item.materials[i] === 'wood'){
        return true;
      }
    }
  })
  console.log (wood)
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
let mats = data.filter(function(item){
   for (let i=0; i < item.materials.length; i++){
    if (item.materials[i] >= item.materials.length > 8)
    return item.materials[i]

  }

})

console.log(mats + " items are made with wood")
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:


let i_did = "";
 for (let i=0; i < data.length; i++){
   if (data[i].who_made === "i_did" ){
      i_did += data[i].title;
      return i_did
   }
 }
console.log(i_did)
}
