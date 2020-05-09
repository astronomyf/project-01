/**
 * @file paddingFunc.js
 * @author Resina Simone
 * 
 * Padding strings
 */




/**
 * Function filler, it takes a string and format it with a symbol
 * @param {string} - string to modify
 */
function paddingFunc(str) {
    var filler = '*';
    var maxLength = 20;

    var str = str.toString();
    var diff = (maxLength - str.length) / 2;
    str = str.padStart((diff + str.length), filler).padEnd(maxLength, filler);

    return str;
}

// TO REMOVE

// console.log(paddingFunc("Hello"));
// console.log(paddingFunc(23));
// console.log(paddingFunc('Hola chica!'));
