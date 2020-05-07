/**
 * @file filter.js
 * @author Francesco Violante
 * 
 * Filter for the weekly print of produtcs.
 */

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