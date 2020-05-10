/**
 * @file config.js
 * @author Francesco Violante
 * 
 * Config file for the manager's settings and products object.
 */

 // config object with default settings
 var configSettings = {

    weeksBeforeOld: 3,
    numberOfNewProducts: 4,
    numberOfDays: 5,
    numberOfWeeks: 6,
    numberOfSeconds: 7,
    numberOfZeros: 2
 }

// used to create a product
class Product {
    constructor(id, name, status, date, price, weight, check) {
        this.id = id;
        this.name = name; 
        this.status = status;
        this.expirationDate = date; 
        this.price = price;
        this.weight = weight; 
        this.check = check;
    }
}