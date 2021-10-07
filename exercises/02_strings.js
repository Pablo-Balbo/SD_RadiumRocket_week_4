// Create a string variable with at least 10 characters and convert all text to uppercase (use toUpperCase).

let longString = 'welcome to the Radium Rocket Software Developer course';

console.log(longString.toUpperCase());

// Create a variable of type string with at least 10 characters and generate a new string with the first 5 characters, saving the result in a new variable (use substring).

let seekAndDestroyString = 'We are scanning the scene in the city tonight';
let substringFirstCharacters = seekAndDestroyString.substring(0,5);

console.log(substringFirstCharacters);

// Create a variable of type string with at least 10 characters and generate a new string with the last 3 characters, saving the result in a new variable (use substring).

let nerdString = 'You are the css of my html';
let substringLastCharacters = nerdString.substring(23,26);

console.log(substringLastCharacters);

// Create a variable of type string with at least 10 characters and generate a new string with the first letter in uppercase and the others in lowercase. Save the result in a new variable (use substring, toUpperCase, toLowerCase, and the + operator).

let vilasMovie = 'you will be what you should be of you will be nothing';

let substringFirstLetter = vilasMovie.substring(0,1);
let restOfSentence = vilasMovie.substring(1,53);

let capitalize = substringFirstLetter.toUpperCase();
let restOfSentenceLowercase = restOfSentence.toLowerCase();

console.log(capitalize + restOfSentenceLowercase);

// Create a variable of type string with at least 10 characters and some blank space. Find the position of the first whitespace and save it to a variable (use indexOf).

let theBeatles = 'Yesterday, all my troubles seemed so far away';
let firstWhiteSpace = theBeatles.indexOf(' ');

console.log(firstWhiteSpace);

// Create a string variable with at least 2 long words (10 characters and some space in between). Use the methods of the previous exercises to generate a new string that has the first letter of both words in uppercase and the other letters in lowercase (use indexOf, substring, toUpperCase, toLowerCase and the operator +).