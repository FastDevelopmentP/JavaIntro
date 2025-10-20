console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let foods = ["Pizza", "Beef Soup", "Burrito Bowls", "Ice Cream", "Burgers", "Steak"];


// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let i = 0; i < foods.length; i++) {
    console.log("One of my favorite foods is " + foods[i] + ".");
}



// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.

console.log("My #1 favorite food is " + foods[5] + ".");
console.log("My #2 favorite food is " + foods[1] + ".");
console.log("My #3 favorite food is " + foods[4] + ".");
console.log("My #4 favorite food is " + foods[3] + ".");
console.log("My #5 favorite food is " + foods[2] + ".");
console.log("My #6 favorite food is " + foods[0] + ".");




// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."

function printFoodRecommendation(foodName) {
    console.log("Have you ever tried " + foodName + "?");
    console.log("I always recommend " + foodName + " to friends.");
    console.log("Trust me — " + foodName + " is delicious.");
}


// 4b. Call the function at least 3 times

printFoodRecommendation("Tripas");
printFoodRecommendation("Squid");
printFoodRecommendation("Tacos");


// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.

/// 5. Print only foods that have an "a" (case-insensitive)

let foodsWithA = [];

for (let i = 0; i < friendFavorites.length; i++) {
  const name = friendFavorites[i];                   // grab the current food
  if (name.toLowerCase().includes("a")) {           // normalize to lowercase
    console.log(name);   
    foodsWithA.push(name);      // Step 6: collect it                            // print matches
  }
}



// 6. Store the result in an array called foodsWithA. Print out the array.
console.log("foodsWithA:", foodsWithA);
console.log("count:", foodsWithA.length);

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.

// 7. Foods with names longer than 6 characters
let longFoodNames = [];

for (const name of friendFavorites) {
  if (name.length > 6) {
    longFoodNames.push(name);
  }
}

console.log("longFoodNames:", longFoodNames);
console.log("long count:", longFoodNames.length);




// 8. Create another array shortFoodNames for foods 6 characters or shorter.



// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."


// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
