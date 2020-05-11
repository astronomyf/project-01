/**
 * @file utility.js
 * @author Francesco Violante, Ivan Meotto, Gaetano Cimino, Simone Resina
 * 
 * Utilities functions.
 */

var utility = (function() {

  return {
      /**
       * Function takes an id parameter and, according to his ciphers' number, places zeros before it.
       * @author Ivan Meotto
       * @param {number} i the id which will be modified.
       * @param {number} nZeros number of zeros to add.
       * @return {string} i modified with one or two 0.
       */
      idInitializer: function(i, nZeros) {
          for (var j = 0; j < nZeros; j++) {
              i = "0" + i;
          }
          return i;
      },
      /**
       * Function returns a valid or new product.
       * @author Francesco Violante
       * @param {object} products a product object.
       * @returns {object} a valid product.
       */
      filterProducts: function(product) {
          if(product.status == 0 || product.status == 1) {
            return product;
          }
      },
      /**
       * Function returns a date with days added or subtracted.
       * @author Francesco Violante
       * @param {object} date a date.
       * @param {string} operator an operator "+" or "-".
       * @param {number} days a number of days.
       * @returns {object} a modified date.
       */
      addDaysToDate: function(date, operator, days) {
          var finalDate = new Date(date);
          if (operator == "+") {
              return new Date(finalDate.setDate(finalDate.getDate() + days));
          } else {
              return new Date(finalDate.setDate(finalDate.getDate() - days));
          }
      },
      /**
       * Function returns a date formatted.
       * @author Francesco Violante
       * @param {object} date a date.
       * @returns {string} a formatted date.
       */
      formatDate: function(date) {
          var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
          var day = date.getDate();
          var month = date.getMonth();
          var year = date.getFullYear();

          if (day < 10) {
              day = "0" + day;
          }

          return day + "-" + months[month] + "-" + year;
      },
      /**
       * Function updates the status of a product and the number of check.
       * @author Gaetano Cimino
       * @param {object} products an array of products.
       */
      updateStatus: function(products, actualDate, weeksBeforeOld) {
          for (var i = 0; i < products.length; i++) {
              products[i].check++;

              if(products[i].status == 0) {
                  products[i].status = 1;
                  //products[i].check += 1;
              }

              if(products[i].check > weeksBeforeOld) {
                  products[i].status = 2;
                  //products[i].check += 1;
              }
              
              if(products[i].expirationDate < actualDate) {
                  products[i].status = 3;
              }
          }
      }
  }
})();

// manca funzione per rimuovere prodotti scaduti