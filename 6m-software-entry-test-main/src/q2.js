/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Add code here
//Initiating Array to store patients name
var patientList = []

function addPatient(patientName){
    // Task 2: Add code here
    //Push Patient into Array
    console.log('we are adding patient:',patientName)
    patientList.push(patientName)
    //Checking if Patient is added?
    console.log('List of patients currently in Database:', patientList)
}

// Task 3: Add code here

function listPatient() {
    return patientList
}

addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]