// Create an array containing 5 words and loop through the array using a JavaScript for loop to display an alert using each word.

const forArray = ['football', 'basquetball', 'tennis', 'swimming', 'judo'];

for(i = 0; i < 5; i++){
    alert(forArray[i]);
}

// To the above array, convert the first letter of each word to uppercase and show an alert for each modified word.

for(i = 0; i < 5; i++){
    let capitalizeArray = forArray[i].charAt(0).toUpperCase() + forArray[i].slice(1);
    forArray[i] = capitalizeArray;

    alert(forArray[i]);
}

// Create a variable called "sentence" that has an empty string, then to the array of point a), go through it with a for loop to save each word inside the sentence variable. At the end show a single alert with the complete chain.

let sentence = '';

for(i = 0; i < 5; i++){
    sentence += forArray[i] + ', ';
}
sentence = sentence.substring(0, sentence.length -2);

alert(sentence);

// Create an empty array with a for loop of 10 repetitions. Fill the array with the repetition number, that is, at the end of the execution of the for loop there should be 10 elements within the array, from number 0 to number 9. Show the final array through the browser console (use console .log).

let emptyArray = [];

for(i = 0; i < 10; i++){
    emptyArray.push(i);
}
console.log(emptyArray);