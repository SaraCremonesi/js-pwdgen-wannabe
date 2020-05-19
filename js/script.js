// Questions to ask the user
var userName = prompt('What is your name?');
var userSurname = prompt('What is your surname?');
var favouriteColor = prompt('What is your favourite color?');

// Printing screen the generated password
var password =  userName + userSurname + favouriteColor + "19";
document.getElementById('pwdgen').innerHTML = 'Hi ' + userName + ', your password is: ' + password;
