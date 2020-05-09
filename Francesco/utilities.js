/**
 * @file utilities.js
 * @author Francesco Violante
 * 
 * Utilities functions.
 */

/**
 * Function takes an id parameter and, according to his ciphers' number, places zeros before it.
 * @param {number} i the id which will be modified
 * @return {string} i modified with one or two 0
 */
 function idInitializer(i) {
    if(i.toString().length == 1) {
        i = "00" + i;
    } else if(i.toString().length == 2) {
        i = "0" + i;
    }

    return i;
 }

 /**
  * Function returns an array of products' ids with a valid state.
  * @param {object} products an array of products.
  */
 function filterProducts(products) {
    var size = products.length;
    var arrayId = [];

    for(var i = 0; i < size; i++) {
        if(products[i].state == 0 || products[i].state == 1) {
            arrayId.push(products[i].id);
        }
    }
    return arrayId;
 }

 /**
  * Function returns a unique id.
  * @param {object} arrayProducts array with products.
  * @returns {number} id a unique id
  */
 function generateId(arrayProducts) {
    var len = arrayProdotti.length;
    var id;

    if(len == 0) {
        id = 1;
    } else {
        id = arrayProdotti[len-1].id + 1;
    }
    return id;
 }

 /**
  * Function generates a new object of product.
  * @param {object} currentWeekDate current week date.
  */
 function generateProduct(currentWeekDate) {
    var id = generateId(listaSettimanale);
    var precision = 100; // 2 decimals
    var randomNameId = Math.floor(Math.random() * productsName.length);
    var randomPrice = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision); //max price is 5
    var randomWeight = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision); //max weight is 5
    var randomDate = randomDate(currentWeekDate + 14, configSettings.minDateRange);
    var productStatus;

    // da rivedere insieme a Gaetano, sistemare la funzione dataParse
    if(randomDate < currentWeekDate) {
        productStatus = 3; // expired
    } else {
        productStatus = 0; // new
    }

    return new Product(id, productsName[randomNameId], productStatus, randomDate, randomPrice + "$", randomWeight + "g");
 }