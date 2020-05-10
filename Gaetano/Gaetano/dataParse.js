/* BISOGNA CREARE GLI OGGETTI DATA E FORMATTARLI BENE PER POI FARE LE OPERAZIONI.
 * var d = new Date("October 13, 2020");
   var f = new Date("October 26, 2020");
   var st = d - f
   86400000 ---> millisecondi in un ora
   var final = (st/86400000)
   ottengo in final i giorni tra una data e l'altra.
   divido per la lunghezza della settimana e ho trovato il numero di settimane passate.
 * 
 */

 function parseData(dataP , dataA ,weekLenght){
 
  var millisecond = dataP - dataA;

   var day = (millisecond/86400000)
   var weekCount = day /weekLenght;

   return Math.round(weekCount);

    }




 function checkMonth(data){

  var split = data.split("/");
  
    switch (split[1]){

        case "1" :  split[1] = "Jan"; break;
        
        case "2" :  split[1] =  "Feb"; break;
        
        case "3" :  split[1] =  "Mar"; break;
        
        case "4" :  split[1] =  "Apr"; break;
        
        case "5" :  split[1] =  "May"; break;
        
        case "6" :  split[1] =  "Jun"; break;
        
        case "7" :  split[1] =  "Jul"; break;
        
        case "8" :  split[1] =  "Aug"; break;
        
        case "9" :  split[1] =  "Sep"; break;
        
        case "10" : split[1] =  "Oct"; break;
        
        case "11" : split[1] =  "Nov"; break;
        
        case "12" : split[1] =  "Dec"; break;
    }

    var dString = split[0]+"-"+split[1]+ "-"+ split[2];
    return dString;
 } 