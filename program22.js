// Array methods
// you have already learned about pop(),push(),concat()

// Shifting is equivalent to popping, working on the first element instead of the last.
var names = ["Anis", "Mitu", "Kalam"];
console.log("names are : " + names)
names.shift();
console.log("After shifting names are : " + names);


// The unshift() method adds a new element to an array (at the beginning),
names.unshift("Kolpona");
console.log("After unshifting names are : " + names);

// The splice() method can be used to add new items to an array: 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.


// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // Removes the first element of fruits 


//The slice() method slices out a piece of an array into a new array.
// The slice() method creates a new array. It does not remove any elements from the source array.
// This example slices out a part of an array starting from array element 1 ("Orange"):
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);