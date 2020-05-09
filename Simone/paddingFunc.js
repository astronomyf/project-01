/**
 * @file paddingFunc.js
 * @author Resina Simone
 *
 */


/**
 * Function repeating a string for n times, both string and times are parameters
 * @param {string} str 
 * @param {number} times 
 */
function repeatString(str, times) {
    var repString = '';
    while (times > 0) {
        repString += str;
        times--;
    }
    return repString;
}

/**
 * Function substituting spaces with a choosen symbol
 * @param {string} str 
 * @param {string} filler 
 */
function fillingSpaces(str, filler) {
    // var indexSlice = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            str = str.slice(0, i).concat(filler).concat(str.slice(i + 1, str.length));
        }
    }
    return str;
}


/**
 * Padding function, it formats a string with a specified filler character and a maximum length
 * @param {string} str - string to modify
 * @param {string} filler - symbol to use to fill spaces and to format the string
 * @param {number} maxLength - the max length setted to format
 */
function paddingFunc(str, filler, maxLength) {

    var str = str.toString();

    var diff = (maxLength - str.length) / 2;
    var stringFiller = repeatString(filler, diff);
    var str = stringFiller.concat(str).concat(stringFiller);

    return fillingSpaces(str, filler);
}


// PRINTING TEST! ==> REMEMBER TO REMOVE THEM
console.log(paddingFunc('Frenzisco ama Giartina', '#', 50));
console.log(paddingFunc(23, '-', 20));
console.log(paddingFunc(0023, '#', 15), 'it is wrong! The number was 23...'); //returns 19, don't know why
console.log(paddingFunc('Io sono un gran piciu, e mi piace tanto perdere tempo ! ! !', '*', 80));