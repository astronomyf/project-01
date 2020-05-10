/**
 * @file main.js
 * @author Francesco Violante, Ivan Meotto, Gaetano Cimino, Simone Resina
 * 
 * Main file project.
 * 
 * Detailed description...
 */

// global variables for the run function
var duration = configSettings.numberOfSeconds * 1000;
var weekCounter = 0;
var weeklyList = [];

function runProgram() {
   var currentDate = addDaysToDate(new Date(), "+", configSettings.numberOfDays);

   var header = "Week of " + currentDate + 
                "\n-----------------------------------";
   console.log(header);

   // qui si richiamano le funzioni principali e si stampa la lista
   for(var i = 0; i < configSettings.numberOfNewProducts; i++) {
       var product = generateProduct();
       weeklyList.push(product);
   }

   if(weekCounter != 0) { // se è la prima settimana non vanno eseguiti check
       // esegui i check
   }

   // rimuovere prodotti scaduti che sono presenti da almeno una settimana
   // aggiornare gli stati dei prodotti

   // stampare lista settimanale

   // stampare lista dei prodotti filtrata
   var filterHeader = "Filtered\n--------------";
   console.log(filterHeader);

   // dopo tutte le operazioni incrementiamo il counter del num di settimane
   weekCounter++;
   if(weekCounter >= configSettings.numberOfWeeks) {
       clearInterval(weekIntervalId);
   }
}

//print and update the list each week
var weekIntervalId = setInterval(runProgram, duration);