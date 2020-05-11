/**
 * @file custom.js
 * @author Francesco Violante
 * 
 * Extract values from HTML form to customize settings for the printing of the list.
 */

 // aggiungere parametri config default ?

 /**
  * Function hide and display HTML form and buttons on index page.
  */
 function customSettings() {
    var form = document.getElementById("form-settings");
    var buttons = document.getElementById("buttons-index");

    if(form.style.display === "none") {
        form.style.display = "block";
        buttons.style.display = "none";
    } else if(buttons.style.display === "block") {
        form.style.display = "none";
        buttons.style.display = "block";
    } else {
        form.style.display = "none";
        buttons.style.display = "block";
    }
 }

 /**
  * Function hide buttons and shows a message to the user.
  */
 function showRunMessage() {
    var buttons = document.getElementById("buttons-index");
    buttons.style.display = "none";

    var form = document.getElementById("form-settings");
    form.style.display = "none";

    var alert = document.getElementById("run-message");
    alert.style.display = "block";
 }

 /**
  * Function get values from HTML form.
  */
 function getCustomSettings() {

     //get values from HTML form
     var numberOfWeeks = parseInt(document.getElementById("numberOfWeeks").value);
     var weeksBeforeOld = parseInt(document.getElementById("weeksBeforeOld").value);
     var numberOfDays = parseInt(document.getElementById("numberOfDays").value);
     var numberOfNewProducts = parseInt(document.getElementById("numberOfNewProducts").value);
     var numberOfSeconds = parseInt(document.getElementById("numberOfSeconds").value);

     //update settings with custom values
     configSettings.numberOfWeeks = numberOfWeeks;
     configSettings.weeksBeforeOld = weeksBeforeOld;
     configSettings.numberOfDays = numberOfDays;
     configSettings.numberOfNewProducts = numberOfNewProducts;
     configSettings.numberOfSeconds = numberOfSeconds;
 }

 // call functions when the buttons are clicked

 // run program
 var runButton = document.getElementById("run-button");
 runButton.addEventListener("click", function(){
    // da vedere come farlo partire
    showRunMessage();
    runProgram();
 }, false);

 // change settings
 var settingsButton = document.getElementById("settings-button");
 settingsButton.addEventListener("click", function(){
    customSettings();
 }, false);

 // go back
 var backButton = document.getElementById("back-button");
 backButton.addEventListener("click", function(){
    customSettings();
 }, false);

 // get custom settings
 var customButton = document.getElementById("custom-button");
 customButton.addEventListener("click", function(){
    getCustomSettings();
    showRunMessage();
    runProgram();
 }, false);