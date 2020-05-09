

var ProductsName = ['Cheese', 'Banana', 'Apple', 'Rice', 'Meat', 'Nutella', 'Green Beans', 'Salad', 'Roast Beef', 'Dried Fruit', 'Pasta','Soap','Toilet Paper','Hamburger','Water','Coca-Cola','Chicken Wings'];
//variable used for setting a product's id
var id = 0;

function randomDate(date1, date2){
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-1970';
    var date2 = date2 || new Date().toLocaleDateString();
    date1 = new Date(date1).getTime();
    date2 = new Date(date2).getTime();
    if( date1>date2){
        return new Date(randomValueBetween(date2,date1)).toLocaleDateString();  
    } else{
        return new Date(randomValueBetween(date1, date2)).toLocaleDateString();  

    }
}

/**
 * This function takes an id parameter and, according to his ciphers' number, writes one or two 0 before it
 * @param i, the id which will be modified
 * @return i, modified with one or two 0
**/
function IdInitializer(i)
{
    if(i.toString().length == 1)
    {
        i = "00" + i;
        i = "00" + i; //if i has 1 cipher, the function returns "00i"
    }
    
    else if(i.toString().length == 2)
    {
        i = "0" + i;
        i = "0" + i; //if i has 2 ciphers, the function returns "0i"
    }
    return i;
    
}

//classe per definire gli oggetti del negozio
//class used for creating the products
class Product
{
    constructor(id, name, status, data, price, weight, check)
    {
        this.id = id; //parametro dell'id
        this.name = name; //parametro del nome
        this.status = status; //parametro dello status
        this.data = data; //parametro della data
        this.price = price; //parametro del costo
        this.weight = weight; //parametro del peso
        this.check = check;
    }
}

var rn = 0; //variabile per i nomi random
var rs = 0; //variabile per gli status random
var ps = 0; //variabile per il peso random
var cs = 0; //variabile per il costo random
var p = []; //array vuoto per i prodotti
var rn = 0; //this variable is used for generating random products' name
var rs = 0; //this variable is used for generating random products' status
var rw = 0; //this variable is used for generating random products' weight
var rp = 0; //this variable is used for generating random products' price
var p = []; //array used for storing all generated products
var initialCheck = 0;

var weekCount     = 0;
var charSplit     = "/";

var weekLenght    = 7;
var statusOld     = "Old";
var statusNew     = "New";
var statusValid   = "Valid";
var statusExpired = "Expired";
var dateToStartFrom = "3 5 , 2020";

var startDate = new Date(dateToStartFrom);
var actualDate = startDate;
var days = 7;



/* 
IMPORTANTE LA FUNZIONE GENERATE DEVE AVERE OBBLIGATORIAMENTE 
var countWeek = parseData(p[j].data , actualDate , charSplit , weekLenght);

    
     if(countWeek >= 0){
       
        p[j].status = statusNew;
       // products[i].check++;
     }

    if(countWeek < 0){
      
     p[j].status = statusExpired;
     p[j].check++;
    } 

    PERCHè COSì I PRODOTTI NUOVI AVRANNO COSì LO STATO SETTATO IMMEDIATAMENTE COME NEW O EXPIRED;

*/
function generate(id , rn , cs , ps , p , rn , rp , rw , actualDate , charSplit , weekLenght , statusNew , statusExpired){


    for(var j = 0; j < 5; j++)
{
    id = IdInitializer(id);
    rn = Math.floor(Math.random() * ProductsName.length); //i diventa un intero casuale tra 0 e la lunghezza dell'array dei nomi dei prodotti
    cs = Math.floor(Math.random() * (10.01 - 1.01) + 1.01); //funzione per il costo random tra 0 e 500
    ps = Math.floor(Math.random() * (10.01 - 1.01) + 1.01); //funzione per il peso random tra 0 e 500
    p[j] = new Product(id, ProductsName[rn], '', randomDate('01-01-2020'), cs + "$", ps + "g");
    rn = Math.floor(Math.random() * ProductsName.length); //rn assumes a random value between 0 and the ProductsName array's length
    rp = Math.floor(Math.random() * (10 - 1) + 1); //rp assumes a random value between 0 and 10, and is then used as price for the product
    rw = Math.floor(Math.random() * (10 - 1) + 1); //rw assumes a random value between 0 and 10, and is then used as weight for the product
    p[j] = new Product(id, ProductsName[rn], '', randomDate('01-01-2020'), rp + "$", rw + "g" , initialCheck); //the j element of the p array becomes the randomly generated product
    
     var countWeek = parseData(p[j].data , actualDate , charSplit , weekLenght);

    
     if(countWeek >= 0){
       
        p[j].status = statusNew;
       // products[i].check++;
     }

    if(countWeek < 0){
      
     p[j].status = statusExpired;
     p[j].check++;
    } 

    id++;
    console.log(p[j]);


} 

}


/** PARTE DI TANO */
/**
 * 
 * La data del prodotto è la data di scadenza. Se è più vecchia il prodotto è già scaduto. 
 * Se la data del prodotto è più avanti vuol dire che non è scaduto
 * 
 * new --> il prodotto è appena arrivato la data del prodotto è maggiore della data di partenza.
 * valid --> il prodotto è entro il range di settimane (esempio 2)
 * 
 * old --> il prodotto supera il range della settimana valid
 * expired --> la data è scaduta
 * 
 * --- Potremmo aggiungere shelf life per capire da quanto tempo un prodotto sta sullo scaffale.
 * 
 * 
 * -- CONVERTIRE LE DATE -- 
 * 
 * BISOGNA CREARE GLI OGGETTI DATA E FORMATTARLI BENE PER POI FARE LE OPERAZIONI.
 * var d = new Date("October 13, 2020");
   var f = new Date("October 26, 2020");
   var st = d - f
   86400000 ---> millisecondi in un ora
   var final = (st/86400000)
   ottengo in final i giorni tra una data e l'altra.
   divido per la lunghezza della settimana e ho trovato il numero di settimane passate.
 * 
 * 
 * 
 * 
 */

//console.log(startSplit);


/*

FUNZIONE CHE RICEVE L'ARRAY DI OGGETTI E FACENDO IL CALCOLO SULLA DATA  ATTUALE CHE SI AGGIORNA IN AUTOMATICO --> actualDate 
SETTA I VALORI DI STATUS COME VALID OLD O EXPIRED
I CONSOLE LOG SONO PER DEBUG E CAPIRE COSA SUCCEDE.
LA FUNZIONE è DIPENDENTE DALL'INCLUSIONE DEL FILE dataParse.js ALTRIMENTI NON FUNZIONA, IDEM PER IL FILE config.js IN QUANTO Lì SI TROVA
LA VARIABILE DEL MAXNUMBEROFWEEK DA AGGIORNARE ASSOLUTAMENTE IN --> DAYBEFOREOLD DATO IL NUOVO CONFIG.

*/


function dateCheck(products){

    console.log("DATA di partenza::" , startDate);
    for (var i=0; i< products.length ; i++){
        console.log("DATA Attuale::" , actualDate);
   
     var countWeek = parseData(products[i].data , actualDate , charSplit , weekLenght);
    
     
   
     if((products[i].status == "New" || products[i].status == "Valid") && countWeek < configSettings.maxNumberOfWeeks){
        products[i].status = statusOld;
        products[i].check++;
     } 
         

     if(products[i].status == "New" && countWeek > configSettings.maxNumberOfWeeks){
     products[i].status = statusValid;
     products[i].check++;
     }

     if((products[i].status == "Valid" || products[i].status == "Old") && countWeek < 0){
         products[i].status = statusExpired;
         products[i].check++;
        }

     console.log(products[i]);
     console.log("Settimane tra attuale e prodotto: " + countWeek);
     console.log("Settimane prima di old: " + configSettings.maxNumberOfWeeks);
   
    } 

   actualDate.setDate(actualDate.getDate()+days);

   // FILTRAGGIO E OUTPUT
   //funzioneDiSimone(product);

}

generate(id , rn , cs , ps , p , rn , rp , rw, startDate , charSplit , weekLenght , statusNew , statusExpired);

var interval = setInterval(dateCheck , 2500 , p);

/*

IN GENERALE QUESTO SCRIPT CON L'APPOGGIO DEGLI ALTRI DUE DATAPARSE E CONFIG, genera gli oggetti che sono stabiliti dal for iniziale e ogni 2500 secondi aggiorna la 
data di una settimana e cambia lo status agli oggetti.

*/