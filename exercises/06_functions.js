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

function validateInteger(num) {    
    return Number.isInteger(num);
}

// ---------------Tests---------------

console.log(validateInteger(3));
console.log(validateInteger(1.5));

// To the sum function of exercise 6b) add a call that validates that the numbers are integers. In case there are decimals, show an alert with the error and return the number converted to integer (rounded).

function mySumWithIntegerValidation(num1, num2) {
    if(isNaN(num1)) {
        alert('First value is not a number');
        return num1;
    } else if(isNaN(num2)) {
        alert('Second value is not a number');
        return num2;
    }

    if(!validateInteger(num1)) {
        alert('First value is not an integer');
        num1 = Math.round(num1);
        console.log(num1);
    }
    if(!validateInteger(num2)) {
        alert('Second value is not an integer');
        num2 = Math.round(num2);
        console.log(num2);
    }

    let result = num1 + num2;
    return result;
}

// ---------------Tests---------------

console.log('mySumWithIntegerValidation(3, 9.3) -> ' + mySumWithIntegerValidation(3, 9.3));
console.log('mySumWithIntegerValidation(4.5, 16) -> ' + mySumWithIntegerValidation(4.5, 16));
console.log('mySumWithIntegerValidation(23.4, 18.9) -> ' + mySumWithIntegerValidation(23.4, 18.9));

// Convert the validation of exercise 6d) into a separate function and call it within the sum function, testing that everything continues to work the same.

function transformToArrayOfIntegers(num1, num2) {
    let arrayOfNumbers = [];
    if(!validateInteger(num1)) {
        alert('First value is not an integer');
        arrayOfNumbers.push(Math.round(num1));
    } else {
        arrayOfNumbers.push(num1);
    }

    if(!validateInteger(num2)) {
        alert('Second value is not an integer');
        arrayOfNumbers.push(Math.round(num2));
    } else {
        arrayOfNumbers.push(num2);
    }
    return arrayOfNumbers;
}

function myNewSum(num1, num2) {
    if(isNaN(num1)) {
        alert('First value is not a number');
        return num1;
    } else if(isNaN(num2)) {
        alert('Second value is not a number');
        return num2;
    }

    let myArray = transformToArrayOfIntegers(num1, num2);
    return myArray[0] + myArray[1];
}

// ---------------Tests---------------

console.log('myNewSum(3, 9.3) -> ' + myNewSum(3, 9.3));
console.log('myNewSum(4.5, 16) -> ' + myNewSum(4.5, 16));
console.log('myNewSum(23.4, 18.9) -> ' + myNewSum(23.4, 18.9));