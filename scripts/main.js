/**
 * @file main.js
 * @author Francesco Violante, Ivan Meotto, Gaetano Cimino, Simone Resina
 * 
 * Main js file.
 * 
 * File contains the main function to be called to start the program.
 */

 /**
  * Main function to call to run the program.
  * Function is called in custom.js after a click of a button.
  */
function startProgram() {

    // global variables for the run function
    var duration = (Math.floor(Math.random() * (configSettings.maxSeconds - configSettings.minSeconds + 1)) + configSettings.minSeconds) * 1000; // random duration of seconds 
    var actualDate = configSettings.startDate();
    var weekCounter = 0; // number of weeks
    var weekIntervalId; // id of the setIinterval
    var weeklyList = []; // array of products

    /**
     * Function contains the program itself.
     * Called from the below setInterval.
     */
    function run() {
        var header = "Week of " + utility.formatDate(actualDate);
        console.log("%c" + header, "color:blue; background-color:floralWhite; padding:10px 50px");
        
        // generate new products to insert in the list
        for(var i = 0; i < configSettings.numberOfNewProducts; i++) {
            var product = generator.generateProduct(actualDate, weeklyList);
            weeklyList.push(product);
        }
        
        // print the products
        output.formattedOutput(weeklyList, configSettings.filler);
        
        console.log("%c Filtered", "color:blue; background-color:floralWhite; padding:10px 50px");
        
        // filter products
        for(var i = 0; i < weeklyList.length; i++) {
            weeklyList = weeklyList.filter(utility.filterProducts);
        }
        
        // print the filtered products
        output.formattedOutput(weeklyList, configSettings.filler);
        
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

    // print and update the list each week after a duration
    weekIntervalId = setInterval(run, duration);
}

