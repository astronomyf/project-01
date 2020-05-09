/**
 * @file main.js
 * @author Francesco Violante
 * 
 * Main file for our project.
 */

 var timerId = setInterval(function(configSettings){
    if(count > configSettings.numberOfWeeks) {
        clearInterval(timerId);
    }
    //else 
    //print list and update it
 }, seconds);