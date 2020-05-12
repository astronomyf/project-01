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
    daysToAdd: 5,
    numberOfWeeks: 6,
    minSeconds: 2,
    maxSeconds: 7,
    numberOfZeros: 2,
    daysOfWeek: 7,
    filler: '*',
    minExpDate: new Date(),
    startDate: function() {
       return utility.addDaysToDate(this.minExpDate, "+", this.daysToAdd);
    },
    maxExpDate: function() {
       return utility.addDaysToDate(this.minExpDate, "+", (this.numberOfWeeks * this.daysOfWeek));
    }
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