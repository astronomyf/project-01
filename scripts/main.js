/**
 * @file main.js
 * @author Francesco Violante, Ivan Meotto, Gaetano Cimino, Simone Resina
 * 
 * Main file project.
 * 
 * Detailed description...
 */

// global variables for the run function
var duration = Math.floor(Math.random() * (configSettings.maxSeconds - configSettings.minSeconds + 1)) + configSettings.minSeconds; // random duration of seconds 
var actualDate = configSettings.startDate();
var weekCounter = 0;
var weekIntervalId;
var weeklyList = [];

function start() {
   var header = "Week of " + utility.formatDate(actualDate) + 
                "\n------------------------------------------------------------------";
   console.log(header);

   // generate new products to insert in the list
   for(var i = 0; i < configSettings.numberOfNewProducts; i++) {
       var product = generator.generateProduct(actualDate, weeklyList);
       weeklyList.push(product);
   }

   // print the products
   output.formattedOutput(weeklyList);

   var filterHeader = "Filtered\n--------------";
   console.log(filterHeader);

   // filter products
   for(var i = 0; i < weeklyList.length; i++) {
       weeklyList = weeklyList.filter(utility.filterProducts);
   }

   // print the filtered products
   output.formattedOutput(weeklyList);

   // update checks and status of the products
   utility.updateStatus(weeklyList, actualDate, configSettings.weeksBeforeOld);

   // update the current date to a new week
   actualDate = utility.addDaysToDate(actualDate, "+", configSettings.daysOfWeek);

   // check if the program has reached the maximum number of weekly runs
   if(weekCounter >= configSettings.numberOfWeeks) {
       clearInterval(weekIntervalId);
   }
   weekCounter++;
}

function runProgram() {
    //print and update the list each week
    weekIntervalId = setInterval(start, duration);
}