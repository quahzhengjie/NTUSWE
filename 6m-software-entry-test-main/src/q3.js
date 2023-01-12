/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/

//KVP object initiated.
const dog = {
    petName:"Bobby"
}

// Task 1: Add code here
//Added a breed property by chaining with value poodle
dog.breed = "Poodle"

// Task 2: Add code here
// For in Loop, loops through KVP to list info of dog.
for (const key in dog) {
    console.log(`${key}: ${dog[key]}`);
}
