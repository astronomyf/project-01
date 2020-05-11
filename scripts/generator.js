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
         */
        generateProduct: function(actualDate, arrayProducts) {
            var id = generator.uniqueId(arrayProducts);
            var precision = 10; // 1 decimal
            var randomNameId = Math.floor(Math.random() * productsNames.length);
            // creare una funzione che genera i valori random
            var randomPrice = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision); //max price is 5
            var randomWeight = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision); //max weight is 5
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