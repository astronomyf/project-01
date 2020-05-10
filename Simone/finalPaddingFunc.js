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

/**
 * Function to convert the status from number to string
 * @param {number} status 
 */
function convertStatus(status) {

    switch (status) {
        case 0:
            return 'New';
            break;
        case 1:
            return 'Valid';
            break;
        case 2:
            return 'Old';
            break;
        case 3:
            return 'Expired';
            break;
    }
}


// /**
//  * function to change the status color
//  * @param {number} status 
//  */
// function colorStatus(status) {

//     switch (status) {
//         case 0:
//             return 'yellow';
//             break;
//         case 1:
//             return 'green';
//             break;
//         case 2:
//             return 'purple';
//             break;
//         case 3:
//             return 'red';
//             break;
//     }
// }


/**
 * Function formatting the final output
 * @param {object} products 
 */
function formattedOutput(products) {
    var filler = '*';
    var maxLongLength = 16;
    var maxShortLength = 8;
    var space = ' ';
    for (var i = 0; i < products.length; i++) {

        var idProduct = products[i].id + ':';
        var nameProduct = paddingFunc(products[i].name, filler, maxLongLength);
        var weightProduct = paddingFunc(products[i].weight, filler, maxShortLength);
        var priceProduct = paddingFunc(products[i].price, filler, maxShortLength);
        var dateProduct = products[i].data;
        var statusProduct = paddingFunc(convertStatus(products[i].status), filler, maxLongLength);
        var checkProduct = '[' + products[i].check + ' checks]';

        var finalOutput = idProduct + space + nameProduct + space + weightProduct + space +
            priceProduct + space + dateProduct + space + statusProduct +
            space + checkProduct;

        console.log("%c" + finalOutput, "color: blue");
    }
}