/**
 * @file: ObjectGeneration.js
 * @author: Ivan Meotto
 * Purpose of file:
 *
 * This file allows to create the object "Product", with
 * his attributes Id, Name, Price, Weight and Status.
 * Every property is randomized and selected from a pre-initialized
 * array.
**/

//array of usable products' names
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
        i = "00" + i; //if i has 1 cipher, the function returns "00i"
    }
    else if(i.toString().length == 2)
    {
        i = "0" + i; //if i has 2 ciphers, the function returns "0i"
    }
    return i; //if i has more than 2 ciphers, the function will just return "i"
}

//class used for creating the products
class Product
{
    constructor(id, name, status, data, price, weight)
    {
        this.id = id; 
        this.name = name; 
        this.status = status; 
        this.data = data;
        this.price = price;
        this.weight = weight;
    }
}

var p = []; //array used for storing all generated products

for(var j = 0; j < 30; j++)
{
    id = IdInitializer(id);
    var rn = Math.floor(Math.random() * ProductsName.length); //rn assumes a random value between 0 and the ProductsName array's length
    var rp = Math.floor(Math.random() * (10 - 1) + 1); //rp assumes a random value between 0 and 10, and is then used as price for the product
    var rw = Math.floor(Math.random() * (10 - 1) + 1); //rw assumes a random value between 0 and 10, and is then used as weight for the product
    p[j] = new Product(id, ProductsName[rn], '', randomDate('01-01-2020'), rp + "$", rw + "g"); //the j element of the p array becomes the randomly generated product
    //Qua dovremmo aggiungere il controllo sulla data per mettere lo status
    id++;
    console.log(p[j]);
}
