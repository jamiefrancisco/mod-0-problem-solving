// Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!" 

// Overall goal: Take an array of multple strings and sort them alphabetically. Then print them one by one in a sentence using string interpolation.
// 1. Create an array with strings that are not in alphabetical order.
// 2. Use a method to assign a new value to the array with the strings sorted alphabetically.
// 3. Create a for loop to cycle through the array.
// 4. Within the for loop, log to the console a sentence and use string interpolation to embed each element of the array.

var destinations = ["Portugal", "Colorado", "New Zealand", "Bali"]

destinations.sort()

for (i = 0; i < destinations.length; i++) {
  console.log(`The next place I want to visit is ${destinations[i]}`)
}