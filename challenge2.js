// Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

// Overall goal: Create array with strings that are a mix of upper and lowercase. Print all of the elements but with all lowercase lettering.
// 1. Create array with string elements that contain a mx of upper and lowercase letters.
// 2. Create a for loop to cycle through the elements.
// 3. Within the for loop, use the toLowerCase() method and print each element.

var fruits = ["ApPle", "PLum", "BaNaNa", "BlueBeRry", "KiWi"];

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i].toLowerCase());
}