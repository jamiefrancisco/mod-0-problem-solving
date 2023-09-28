// Start with an array of hobbies. Print out only the words that end in "ing".

// Overall goal: create array of strings with some ending in "ing" and some not. Print only the elements that end in "ing".
// 1. Create an array with strings where some end in "ing" and some don't.
// 2. Create a for loop to cycle through the array.
// 3. Create an if statement within the for loop and use the endsWith() method to evaluate whether the final characters of each element is "ing".
// 4. Print each element that evaluates to true inside the conditional statement.

var hobbies = ["Golfing", "Pottery", "Basketball", "Fencing"]

for (i = 0; i < hobbies.length; i++) {
  if (hobbies[i].endsWith('ing')) {
    console.log(hobbies[i])
  }
}