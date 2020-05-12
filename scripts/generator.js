/**
 * @file generator.js
 * @author Francesco Violante, Ivan Meotto, Geatano Cimino, Simone Resina
 * 
 * Function to generate.
 * 
 * These functions are used as generators for different scopes. 
 */

 var generator = (function() {

    // array of usable products' names
    var productsNames = ['Cheese', 'Banana', 'Apple', 'Rice', 'Meat', 
                         'Nutella', 'Green Beans', 'Salad', 'Roast Beef', 
                         'Dried Fruit', 'Pasta','Soap','Toilet Paper','Hamburger',
                         'Water','Coca-Cola','Chicken Wings','Carrots','Avocado',
                         'Oranges', 'Potatoes', 'Fresh Loaf', 'Bagels', 'Turkey',
                         'Pork', 'Bacon', 'Sausage', 'Smoked Salmon', 'Tofu', 'Soy Milk',
                         'Hummus', 'Macaroni', 'Soup', 'Tuna', 'Cookies', 'Pretzels',
                         'Butter', 'Eggs', 'Sour Cream', 'Tobasco', 'Whip Cream', 'Coffee',
                         'Tea', 'Pepper', 'Mayo', 'Peanut Butter', 'Mustard', 'Flour', 'Coconut',
                         'Beer', 'Wax Paper', 'Hand Soap', 'Bleach', 'Nuggets', 'Ice Cream', 'Waffles',
                         'Wine', 'Vodka', 'Rhum', 'Gin']; 

    return {
        /**
         * Function generates a new object of product.
         * @author Francesco Violante, Ivan Meotto, Gaetano Cimino
         * @param {object} actualDate the current date of the program.
         * @param {object} arrayProducts an array of products.
         * @returns {object} a randomly generated product item.
         */
        generateProduct: function(actualDate, arrayProducts) {
            var id = generator.uniqueId(arrayProducts);
            var randomNameId = Math.floor(Math.random() * productsNames.length);
            var randomPrice = generator.randomDecimal(6, 1, 100);
            var randomWeight = generator.randomDecimal(999, 1, 10);
            var initialCheck = 0;
            var expirationDate = generator.randomDate(configSettings.minExpDate, configSettings.maxExpDate());
            var initialStatus;

            if(expirationDate < actualDate) {
                initialStatus = 3;
            } else {
                initialStatus = 0;
            }

            return new Product(id, productsNames[randomNameId], initialStatus, expirationDate, randomPrice + "$", randomWeight + "g", initialCheck);
        },
        /**
         * Function returns a random date between two dates.
         * @author Ivan Meotto
         * @param {object} start a start date. 
         * @param {object} end an end date.
         * @returns {object} a random date.
         */
        randomDate: function(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        },
        /**
         * Function returns a random decimal number between a range.
         * @author Francesco Violante
         * @param {number} max max value of range.
         * @param {number} min min value of range.
         * @param {number} precision a start date.
         * @returns {number} a random decimal number.
         */
        randomDecimal: function(max, min, precision) {
            return (Math.floor(Math.random() * (max * precision - min * precision) + min * precision) / (min * precision)).toFixed(2);
        },
        /**
         * Function returns a unique id.
         * @author Francesco Violante
         * @param {object} arrayProducts an array of products.
         * @returns {number} a unique id.
         */
        uniqueId: function(arrayProducts) {
            var id;
            var len = arrayProducts.length;
            if(len == 0) {
                id = 1;
            } else {
                id = arrayProducts[len-1].id + 1;
            }
            return id;
        }
    }
 })();