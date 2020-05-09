/**
 * @file customConfig.js
 * @author Francesco Violante
 * 
 * Extract values from HTML form to customize settings for the printing of the list.
 */

 function customSettings() {
    var form = document.getElementById('form-settings');
    var buttons = document.getElementById('buttons-index');

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