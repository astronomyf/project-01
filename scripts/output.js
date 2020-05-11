/**
 * @file output.js
 * @author Francesco Violante, Ivan Meotto, Gaetano Cimino, Simone Resina
 * 
 * Output functions.
 * 
 * Detailed explanation...
 */

var output = (function() {

    return {
        /**
         * Function repeating a string for n times, both string and times are parameters
         * @author Simone Resina
         * @param {string} str a string.
         * @param {number} times a number to multiply.
         * @returns {string} a string repeated.
         */
        repeatString: function(str, times) {
            var repString = '';
            while (times > 0) {
                repString += str;
                times--;
            }
            return repString;
        },
        /**
         * Function substituting spaces with a choosen symbol
         * @author Simone Resina
         * @param {string} str a string.
         * @param {string} filler a symbol.
         * @returns {string} the string substituted.
         */
        fillingSpaces: function(str, filler) {
            for (var i = 0; i < str.length; i++) {
                if (str[i] == ' ') {
                    str = str.slice(0, i).concat(filler).concat(str.slice(i + 1, str.length));
                }
            }
            return str;
        },
        /**
         * Padding function, it formats a string with a specified filler character and a maximum length
         * @author Simone Resina
         * @param {string} str string to modify
         * @param {string} filler symbol to use to fill spaces and to format the string
         * @param {number} maxLength the max length setted to format
         */
        paddingFunc: function(str, filler, maxLength) {
            var str = str.toString();
            var diff = (maxLength - str.length) / 2;
            var stringFiller = output.repeatString(filler, diff);
            var str = stringFiller.concat(str).concat(stringFiller);

            return output.fillingSpaces(str, filler);
        },
        /**
         * Function to convert the status from number to string
         * @author Simone Resina
         * @param {number} status 
         */
        convertStatus: function(status) {
            switch (status) {
                case 0:
                    return 'New';
                case 1:
                    return 'Valid';
                case 2:
                    return 'Old';
                case 3:
                    return 'Expired';
            }
        },
        /**
         * Function prints the final output.
         * @author Simone Resina
         * @param {object} products an array of products.
         */
        formattedOutput: function(products) {
            var filler = '*';
            var maxLongLength = 16;
            var maxShortLength = 8;
            var space = ' ';

            for (var i = 0; i < products.length; i++) {
                var idProduct = utility.idInitializer(products[i].id, configSettings.numberOfZeros) + ':';
                var nameProduct = output.paddingFunc(products[i].name, filler, maxLongLength);
                var weightProduct = output.paddingFunc(products[i].weight, filler, maxShortLength);
                var priceProduct = output.paddingFunc(products[i].price, filler, maxShortLength);
                var dateProduct = utility.formatDate(products[i].expirationDate);
                var statusProduct = output.paddingFunc(output.convertStatus(products[i].status), filler, 10);
                var checkProduct = function() {
                    var word;
                    if (products[i].check == 1) {
                        word = "check ";
                    } else {
                        word = "checks";
                    }
                    return '[' + products[i].check + word + ']';
                };

                var finalOutput = idProduct + space + nameProduct + space + weightProduct + space +
                    priceProduct + space + dateProduct + space + statusProduct +
                    space + checkProduct();

                console.log(finalOutput);
            }
        }
    }
})();