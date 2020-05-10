

var ProductsName = ['Cheese', 'Banana', 'Apple', 'Rice', 'Meat', 'Nutella', 'Green Beans', 'Salad', 'Roast Beef', 'Dried Fruit', 'Pasta','Soap','Toilet Paper','Hamburger','Water','Coca-Cola','Chicken Wings'];
//variable used for setting a product's id
//var id = 0;
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

function randomDate(start, end) 
{
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  
}

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

var weekCount     = 0;
var weekLenght    = 7;
var statusOld     = "Old";
var statusNew     = "New";
var statusValid   = "Valid";
var statusExpired = "Expired";

var startDate = new Date(2020 ,1 , 1);
var endDate   = new Date (2020 , 5 , 10);
var actualDate = startDate;
var days = 7;
var p = [];

var uniqueId = (function() {
    var count = 0;

    return function() {
      ++count;
      return count;
    };
  })();

function generateProduct() {

    var id              = uniqueId();
    var precision       = 100; // 2 decimals
    var randomNameId    = Math.floor(Math.random() * ProductsName.length);
    var randomPrice     = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision); //max price is 5
    var randomWeight    = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision); //max weight is 5
    var initialCheck    = 0;
    var randomData      = randomDate(startDate,endDate);
    var countWeek       = parseData(randomData,actualDate,weekLenght);
    var p               = new Product(id, ProductsName[randomNameId], '', randomData, randomPrice + "$", randomWeight + "g", initialCheck);
    
    if(countWeek >= 0){
      
       p.status = statusNew;
    }

   if(countWeek < 0){
     
    p.status = statusExpired;
    p.check++;
   } 
    console.log(p);
    return p;
 }

function dateCheck(products){

    console.log("DATA di partenza::" , startDate);
    for (var i=0; i< products.length ; i++){
        console.log("DATA Attuale::" , actualDate);
        
      var objDate = new Date(products[i].data) ;
      var countWeek = parseData(objDate , actualDate, weekLenght);
     
   
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

}
for(var k=0 ; k< 5 ; k++){
    p[k] = generateProduct();
}

var a = checkMonth("06/12/2020");
console.log(a);
//generate(id , rn , cs , ps , p , rn , rp , rw, startDate , weekLenght , statusNew , statusExpired);

//var interval = setInterval(dateCheck , 2500 , p);
