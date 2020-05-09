/**
 * @file main.js
 * @author Francesco Violante
 * 
 * Main file for our project.
 */

 var duration = configSettings.numberOfSeconds * 1000;

 function runProgram() {
    //qui si richiamano le funzioni principali e si stampa la lista
    var dayId = setInterval(function(){
        var aWeek = duration;
    }, 1000);
 }

 //print and update list each week
 var weekId = setInterval(runProgram, duration);