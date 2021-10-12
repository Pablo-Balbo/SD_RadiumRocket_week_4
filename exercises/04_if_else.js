// Create a random number between 0 and 1 using the Math.random () function, if the value is greater than or equal to 0.5 show an alert with the message “Greater than 0.5” and if not an alert with the message “Lower than 0.5 ".

let number = Math.random();
if(number >= 0.5){
    alert('Greater than 0.5')
} else {
    alert('Lower than 0.5')
};

console.log(number);

// Create an "Age" variable that contains an integer between 0 and 100 and displays the following alert messages:
    // - "Baby" if the age is less than 2 years;
    // - "Child" if the age is between 2 and 12 years;
    // - "Adolescent" between 13 and 19 years old;
    // - “Young” between 20 and 30 years old;
    // - “Adult” between 31 and 60 years old;
    // - “Senior adult” between 61 and 75 years old;
    // - "Elderly" if you are older than 75 years.

let age = Math.random() * (101);

if(age < 2){
    alert(age + ' - Baby')
} else if(age < 12){
    alert(age + ' - Child')
} else if(age < 19){
    alert(age + ' - Adolescent')
} else if(age < 30){
    alert(age + ' - Young')
} else if(age < 60){
    alert(age + ' - Adult')
} else if(age < 75){
    alert(age + ' - Senior adult')
} else {
    alert(age + ' - Elderly')
};