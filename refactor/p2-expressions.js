/*
    CIT 281 Project 2
    Name: Jia Huang
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Returns a single, random, lowercase letter
const getRandomLetter = function() {
    let randomIndex = getRandomInteger(0, alphabet.length-1)
    return alphabet[randomIndex]
}

// Returns the random length of string
const getRandomString = function(minLength, maxLength) {
    let result = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength+1); i++) {
    result += getRandomLetter();
    }
    return result;
}

// Returns a string in ascending order
const getSortedString = function(string) { return string.split('').sort().join(''); }

// getRandomInteger
console.log(getRandomInteger(5, 25));

// getRandomLetter
console.log(getRandomLetter());

// getRandomString
console.log(getRandomString(10, 20));

// getSortedString
console.log(getSortedString("xpacd"));