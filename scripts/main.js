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
var startDate = new Date();
var weeklyList = [];

function run() {
   var currentDate = formatDate(addDaysToDate(startDate, "+", configSettings.numberOfDays));

   var header = "Week of " + currentDate + 
                "\n-----------------------------------";
   console.log(header);

   // qui si richiamano le funzioni principali e si stampa la lista
   for(var i = 0; i < configSettings.numberOfNewProducts; i++) {
       var product = generator.generateProduct();
       weeklyList.push(product);
   }

   if(weekCounter != 0) {
       // update product status and checks
       updateStatus(weeklyList);
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
var weekIntervalId = setInterval(run, duration);