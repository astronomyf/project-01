/**
 * @file generator.js
 * @author Francesco Violante, Ivan Meotto, Geatano Cimino, Simone Resina
 * 
 * These functions are used as generator for different scopes. 
 */

 var generator = (function() {

    // array of usable products' names
    var productsNames = ['Cheese', 'Banana', 'Apple', 'Rice', 'Meat', 
                         'Nutella', 'Green Beans', 'Salad', 'Roast Beef', 
                         'Dried Fruit', 'Pasta','Soap','Toilet Paper','Hamburger',
                         'Water','Coca-Cola','Chicken Wings','Carrots','Avocado']; 

    return {
        /**
         * Function generates a new object of product.
         * @author Francesco Violante, Ivan Meotto, Gaetano Cimino
         */
        generateProduct: function(startDate, endDate, actualDate, weekLength) {
            var id = uniqueId();
            var precision = 100; // 2 decimals
            var randomNameId = Math.floor(Math.random() * productsNames.length);
            var randomPrice = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision); //max price is 5
            var randomWeight = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision); //max weight is 5
            var initialCheck = 0;
            var expirationDate = randomDate(startDate, endDate);
            var weeksDifference = getDateDifference(expirationDate, actualDate, weekLength);
            var initialStatus;

            if(weeksDifference >= 0) {
                initialStatus = 0;
            } else {
                initialStatus = 3;
            }

            return new Product(id, productsNames[randomNameId], initialStatus, expirationDate, randomPrice + "$", randomWeight + "g", initialCheck);
        },
        /**
         * Function returns a random date between two dates.
         * @author Ivan Meotto
         * @param {object} start a start date 
         * @param {object} end an end date
         */
        randomDate: function(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        },
        /**
         * Function returns a unique id.
         * @author Francesco Violante
         * @returns {number} count a unique id
         */
        uniqueId: function() {
            var count = 0;
            return function() {
                ++count;
                return count;
            }
        }
    }
 })();