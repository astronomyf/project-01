/**
 * @file utility.js
 * @author Francesco Violante, Ivan Meotto, Gaetano Cimino, Simone Resina
 * 
 * Utilities functions.
 */

/**
 * Function takes an id parameter and, according to his ciphers' number, places zeros before it.
 * @author Ivan Meotto
 * @param {number} i the id which will be modified
 * @return {string} i modified with one or two 0
 */
function idInitializer(i) {

  for (var j = 0; j < configSettings.numberOfZeros; j++) {
      i = "0" + i;
  }
  return i;
}

/**
* Function returns an array of products' ids with a valid state.
* @author Francesco Violante
* @param {object} products an array of products.
*/
function filterProducts(products) {
  var size = products.length;
  var arrayId = [];

  for (var i = 0; i < size; i++) {
      if (products[i].state == 0 || products[i].state == 1) {
          arrayId.push(products[i].id);
      }
  }
  return arrayId;
}

/**
* Function returns a date with days added or subtracted.
* @author Francesco Violante
* @param {object} date a date.
* @param {string} operator an operator "+" or "-".
* @param {number} days a number of days.
*/
function addDaysToDate(date, operator, days) {
  if (operator == "+") {
      return date.setDate(date.getDate() + days);
  } else {
      return date.setDate(date.getDate() - days);
  }
}

/**
* Function returns the difference between the actual date and the produtc date.
* @author Gaetano Cimino
* @param {object} productDate product date.
* @param {object} actualDate actual date.
* @param {number} weekLength length of weeks.
*/
function getDateDifference(productDate, actualDate, weekLength) {
  var milliseconds = productDate - actualDate;
  var day = (milliseconds / 86400000);
  var weekCount = day / weekLength;

  return Math.round(weekCount);
}

/**
* Function returns a date formatted.
* @author Francesco Violante
* @param {object} date a date.
*/
function formatDate(date) {
  var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getYear();

  if (day < 10) {
      day = "0" + day;
  }

  return day + "-" + months[month] + "-" + year;
}

/**
* Function update the status of a product and the number of check.
* @author Gaetano Cimino
* @param {object} products an array of products.
*/
function updateStatus(products) {
  for (var i = 0; i < products.length; i++) {
      var countWeek = getDateDifference(products[i].expirationDate, actualDate, weekLenght);

      if ((products[i].status == 0 || products[i].status == 1) && countWeek < configSettings.weeksBeforeOld) {
          products[i].status = 2;
          products[i].check++;
      }

      if (products[i].status == 0 && countWeek > configSettings.weeksBeforeOld) {
          products[i].status = 1;
          products[i].check++;
      }

      if ((products[i].status == 1 || products[i].status == 2) && countWeek < 0) {
          products[i].status = 3;
          products[i].check++;
      }
  }
}

// manca funzione per rimuovere prodotti scaduti