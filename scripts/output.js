/**
 * @file output.js
 * @author Francesco Violante, Ivan Meotto, Gaetano Cimino, Simone Resina
 * 
 * Output functions.
 * 
 * Functions output the result to the console which is styled accordingly
 * to the project's requests.
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
         * @param {string} str string to modify.
         * @param {string} filler symbol to use to fill spaces and to format the string.
         * @param {number} maxLength the max length setted to format.
         * @returns {string} the string formatted.
         */
        paddingFunc: function (str, filler, maxLength) {
            var str = str.toString();
            var diff = (maxLength - str.length) / 2;
            var stringFillerEven = output.repeatString(filler, diff);
            var stringFillerOdd = output.repeatString(filler, (diff - 1));

            if ((str.length % 2) == 0) {
                var str = stringFillerEven.concat(str).concat(stringFillerEven);
            } else if ((str.length % 2) == 1) {
                var str = stringFillerEven.concat(str).concat(stringFillerOdd);
            }

            return output.fillingSpaces(str, filler);
        },
        /**
         * Function to convert the status from number to string
         * @author Simone Resina
         * @param {number} status the numeric status of a product.
         * @returns {string} the status name.
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
         * Function returns a color from the status value
         * @author Simone Resina
         * @param {number} status 
         */
        statusColor: function (status) {
            switch (status) {
                case 'New':
                    return 'green';
                case 'Valid':
                    return 'cornflowerBlue';
                case 'Old':
                    return 'orange';
                case 'Expired':
                    return 'red';
            }
        },
        /**
         * Function prints the final output.
         * @author Simone Resina
         * @param {object} products an array of products.
         */
        formattedOutput: function(products, filler) {
            var space = ' ';

            for (var i = 0; i < products.length; i++) {
                var idProduct = utility.idInitializer(products[i].id, configSettings.numberOfZeros) + ':';
                var nameProduct = output.paddingFunc(products[i].name, filler, 18);
                var weightProduct = output.paddingFunc(products[i].weight, filler, 10);
                var priceProduct = output.paddingFunc(products[i].price, filler, 8);
                var dateProduct = utility.formatDate(products[i].expirationDate);
                var statusProduct = output.paddingFunc(output.convertStatus(products[i].status), filler, 10);
                var checkProduct = function() {
                    var word;
                    if (products[i].check == 1) {
                        word = "check ";
                    } else {
                        word = "checks";
                    }
                    return '[' + products[i].check + space + word + ']';
                };

                var color = output.statusColor(output.convertStatus(products[i].status));

                var outputString = idProduct + space + nameProduct + space + weightProduct + space +
                    priceProduct + space + dateProduct;

                console.log(outputString + space +
                    "%c" + statusProduct, "color:" + color, checkProduct());
            }
        }
    }
})();