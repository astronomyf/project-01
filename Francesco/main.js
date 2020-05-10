/**
 * @file main.js
 * @author Francesco Violante
 * 
 * Main file for our project.
 */

var duration = configSettings.numberOfSeconds * 1000;
var weekCounter = 0;
var weeklyList = [];

function runProgram() {
   var currentDate; // chiamare una funzione per la data corrente
   var header = "Week of " + currentDate + 
                "\n-----------------------------------";
   console.log(header);

   // qui si richiamano le funzioni principali e si stampa la lista
   for(var i = 0; i < configSettings.numberOfNewProducts; i++) {
       var prodotto = generateProduct();
       weeklyList.push(prodotto);
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