/**
 * @file customConfig.js
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