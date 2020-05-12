/**
 * @file custom.js
 * @author Francesco Violante
 * 
 * Extract values from HTML form to customize settings for the printing of the list.
 */

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
  * Function get values from HTML form and updates the config object.
  */
 function getCustomSettings() {

     //get values from HTML form
     var numberOfWeeks = parseInt(document.getElementById("numberOfWeeks").value) || configSettings.numberOfWeeks;
     var weeksBeforeOld = parseInt(document.getElementById("weeksBeforeOld").value) || configSettings.weeksBeforeOld;
     var numberOfDays = parseInt(document.getElementById("numberOfDays").value) || configSettings.daysToAdd;
     var numberOfNewProducts = parseInt(document.getElementById("numberOfNewProducts").value) || configSettings.numberOfNewProducts;
     var minSeconds = parseInt(document.getElementById("minSeconds").value) || configSettings.minSeconds;
     var maxSeconds = parseInt(document.getElementById("maxSeconds").value) || configSettings.maxSeconds;
     var daysOfWeek = parseInt(document.getElementById("daysOfWeek").value) || configSettings.daysOfWeek;
     var numberOfZeros = parseInt(document.getElementById("numberOfZeros").value) || configSettings.numberOfZeros;
     var getSelect = document.getElementById("filler");
     var filler = getSelect.options[getSelect.selectedIndex].value.toString() || configSettings.filler; 
     //var expirationDate = new Date(document.getElementById("expirationDate").value) || configSettings.minExpDate;
     var expirationDate = $("#expirationDate").data("datepicker").getDate();
      
     //update settings with custom values
     configSettings.numberOfWeeks = numberOfWeeks;
     configSettings.weeksBeforeOld = weeksBeforeOld;
     configSettings.numberOfDays = numberOfDays;
     configSettings.numberOfNewProducts = numberOfNewProducts;
     configSettings.minSeconds = minSeconds;
     configSettings.maxSeconds = maxSeconds;
     configSettings.daysOfWeek = daysOfWeek;
     configSettings.numberOfZeros = numberOfZeros;
     configSettings.filler = filler;
     configSettings.minExpDate = expirationDate;
 }

 // call functions when the buttons are clicked
 // check if addEventListener can be used, otherwise (in IE) use attachEvent

 // run program with default settings
 var runButton = document.getElementById("run-button");
 if(runButton.addEventListener) {
   runButton.addEventListener("click", function() {
      showRunMessage();
      startProgram();
   }, false);
 } else {
   runButton.attachEvent('onclick', function() {
      showRunMessage();
      startProgram();
   });
 }

 // change settings
 var settingsButton = document.getElementById("settings-button");
 if(settingsButton.addEventListener) {
   settingsButton.addEventListener("click", function() {
      customSettings();
   }, false);
 } else {
   settingsButton.attachEvent('onclick', function() {
      customSettings();
   });
 }

 // go back
 var backButton = document.getElementById("back-button");
 if(backButton.addEventListener) {
   backButton.addEventListener("click", function() {
      customSettings();
   }, false);
 } else {
   backButton.attachEvent('onclick', function() {
      customSettings();
   });
 }

 // get custom settings and run program
 var customButton = document.getElementById("custom-button");
 if(customButton.addEventListener) {
   customButton.addEventListener("click", function() {
      getCustomSettings();
      showRunMessage();
      startProgram();
   }, false);
 } else {
   customButton.attachEvent('onclick', function() {
      getCustomSettings();
      showRunMessage();
      startProgram();
   });
 }