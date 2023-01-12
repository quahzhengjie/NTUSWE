/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

//Test Cases
var x = 1
var y = 4
console.log ('Initial Variable X & Y:',x,y)

// Global function to check variable type
function isNumeric(value) {
    // Regex to test negative and positive numbers.
    if(/^-?\d+$/.test(value) ===  true){
    console.log(value,'is numeric')
    //returns true if pass regex check.
    // no need to handle false as it is boolean type
    return true
    };
}

//Main Function for task
function swap(x, y){
    console.log (typeof x)
    console.log (typeof y)
    if (isNumeric (x) && isNumeric (y))
    {
        [x,y] = [y,x]
        console.log('swapped values',x,y)
        return
    } 
    console.log  ('not number return -1')
    return -1
}

// Task 2: Add code here
swap (x,y)
//module.exports = swap;
