// Write a method or function that removes all instances of the letter <strong>s</strong> in a string. The method or function should accept a string as an argument and return the same string with every instance of the letter <strong>s</strong> removed.

// Overall goal: Use a function to remove all instances of "s" in a given string and return the same string with those characters removed.
// 1. Create a string variable containing a sentence with multiple instances of "s" character.
// 2. Write a function that accepts a string as parameter.
// 3. Within the function, define a local variable called newString and assign its value to the string without the "s" characters. 
// 4. To do this, research methods that allow us to remove all instances of a certain character (both upper and lowercase) in a string.
// 5. Print to console the newString variable within the function.
// 6. Run the function.

var string = "Sally sold seashells by the seashore"

function sRemove(string) {
  var newString = string.replace(/s/gi, "");
  console.log(newString);
}

sRemove(string);