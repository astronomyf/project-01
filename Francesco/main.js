/**
 * @file main.js
 * @author Francesco Violante
 * 
 * Main file for our project.
 */

 var duration = configSettings.numberOfSeconds * 1000;
 var listaSettimanale = [];

 function runProgram() {
    //qui si richiamano le funzioni principali e si stampa la lista
    for(var i = 0; i < numberOfNewProducts; i++) {
        var prodotto = generateProduct();
        listaSettimanale.push(prodotto);
    }
 }

 //print and update list each week
 var weekId = setInterval(runProgram, duration);