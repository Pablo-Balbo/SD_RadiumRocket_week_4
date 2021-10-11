// Create a sum function that receives two numeric values ​​and returns the result. Execute the function and save the result in a variable, showing the value of said variable in the browser console.

function mySum(num1, num2) {
    let result = num1 + num2;
    return result;
}

let sumResult = mySum(6, 8);
console.log(sumResult);

// To the previous sum function, add a validation to control if any of the parameters is not a number, show an alert clarifying that one of the parameters has an error and return the NaN value as a result.

function mySumWithValidation(num1, num2) {
    if(isNaN(num1)) {
        alert('First value is not a number');
        return num1;
    } else if(isNaN(num2)) {
        alert('Second value is not a number');
        return num2;
    }
    let result = num1 + num2;
    return result;
}

// ---------------Tests---------------

let mySumWithValidationTest1 = mySumWithValidation('House', 6);
console.log(mySumWithValidationTest1);

let mySumWithValidationTest2 = mySumWithValidation(10 , 'Dog');
console.log(mySumWithValidationTest2);

let mySumWithValidationTest3 = mySumWithValidation('Tree', 'Cat');
console.log(mySumWithValidationTest3);

let mySumWithValidationTest4 = mySumWithValidation(15, 40);
console.log(mySumWithValidationTest4);

// Create a validate integer function that takes a number as a parameter and returns true if it is an integer.



// To the sum function of exercise 6b) add a call that validates that the numbers are integers. In case there are decimals, show an alert with the error and return the number converted to integer (rounded).



// Convert the validation of exercise 6b) into a separate function and call it within the sum function, testing that everything continues to work the same.