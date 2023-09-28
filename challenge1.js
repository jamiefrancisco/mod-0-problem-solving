// Given an array of strings, print only the strings that have exactly 4 characters.

// Overall goal: take an array of strings, and print to the console only the elements that have exactly four characters.
// 1. Create array with string elements.
// 2. Create for loop to cycle through elements of array
// 3. Under the for loop, create if statement to determine if each element's character length is stricly equal to "4".
// 4. Log to console the elements that evaluate to true.

var fruits = ["Apple", "Plum", "Banana", "Blueberry", "Kiwi"];

for (i = 0; i < fruits.length; i++) {
  if (fruits[i].length === 4) {
    console.log(fruits[i]);
  }
}