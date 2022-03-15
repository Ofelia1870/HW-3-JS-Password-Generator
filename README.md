# HW-3-JS-Password-Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- View GitHub [Repo](https://github.com/Ofelia1870/HW-3-JS-Password-Generator)
- View [Webpage](https://ofelia1870.github.io/HW-3-JS-Password-Generator/)

## Table of Contents

- [About the Assignment](https://github.com/Ofelia1870/HW-3-JS-Password-Generator/#about-the-assignment)
- [Required Acceptance Criteria](https://github.com/Ofelia1870/HW-3-JS-Password-Generator/#required-acceptance-criteria)
- [MIT License](https://github.com/Ofelia1870/HW-3-JS-Password-Generator/#mit-license)
- [My Contact Info](https://github.com/Ofelia1870/HW-3-JS-Password-Generator/#my-contact-info)

## About the Assignment

This is my third assignment for Full Stack Web Development. For this assignment I was asked to add on to the JavaScript file code, while leaving the starting HTML, and CSS files alone. After looking over the original code and running it in the browser, it was apparrent that the function for generatePassword was not defined, so that becasme the task. In order for the website to generate a random  password in the text box , I needed to first interepret the user prefrences, by creating window prompt and confirm boxes to narrow down the user's password criteria. After creating the criteria, I created 4 seperate arrays containing each of the criteria types (i.e. lowercase letters, uppercase letters, special characters, and numerical values). After creating a set of "buckets" for the criteria types, I created a passowrdArray variable where I was then able to create a condition where if the user selected OK in the window boxes it could select from any of the desired characters by grouping all of the array values together. I then created a password varriable as an empty string so that the desired character types could be included in the password generator. I then created a for loop so that based off of the desired password criteria a random password could be generated. Finally, I returned the password string. 

## Required Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## MIT License

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

![Final-Webpage-Copy](images/Untitled_%20Mar%2015%2C%202022%202_27%20PM.gif)



## My Contact Info

Email: ofeliasanchez30@gmail.com

GitHub Page: https://github.com/Ofelia1870 

Link to project : https://github.com/Ofelia1870/HW-3-JS-Password-Generator