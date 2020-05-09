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

 function parseData(dataP , dataA , charSplit,weekLenght){
    var dataPSplit = dataP.split(charSplit);
    var dataASplit = dataA.split(charSplit);
   // console.log(dataASplit + ":::" + dataPSplit);
    dataPSplit[1] =  checkMonth(dataPSplit[1]);
    dataASplit[1] =  checkMonth(dataASplit[1]);


   var dataPformatObject = new Date(""+ dataPSplit[1] + " " + dataPSplit[0] + ","+ dataPSplit[2]);
   var dataAformatObject = new Date(""+ dataASplit[1] + " " + dataASplit[0] + ","+ dataASplit[2]);

   var millisecond = dataPformatObject - dataAformatObject;
  // 86400000 ---> millisecondi in un ora
   var day = (millisecond/86400000)
   var weekCount = day /weekLenght;

   return weekCount;
  // console.log(weekCount);
    }


 function checkMonth(data){

    switch (data){

        case "1" :  return "January"; break;
        
        case "2" :  return "February"; break;
        
        case "3" :  return "March"; break;
        
        case "4" :  return "April"; break;
        
        case "5" :  return "May"; break;
        
        case "6" :  return "June"; break;
        
        case "7" :  return "July"; break;
        
        case "8" :  return "August"; break;
        
        case "9" :  return "September"; break;
        
        case "10" : return "October"; break;
        
        case "11" : return "November"; break;
        
        case "12" : return "December"; break;
    }

 }