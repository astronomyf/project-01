var ProductsName = ['Cheese', 'Banana', 'Apple', 'Rice', 'Meat', 'Nutella', 'Green Beans', 'Salad', 'Roast Beef', 'Dried Fruit', 'Pasta','Soap','Toilet Paper','Hamburger','Water','Coca-Cola','Chicken Wings'];
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

function IdInitializer(i)
{
    if(i.toString().length == 1)
    {
        i = "00" + i;
    }
    else
    {
        i = "0" + i;
    }
    return i;
}

//classe per definire gli oggetti del negozio
class Product
{
    constructor(id, name, status, data, price, weight)
    {
        this.id = id; //parametro dell'id
        this.name = name; //parametro del nome
        this.status = status; //parametro dello status
        this.data = data; //parametro della data
        this.price = price; //parametro del costo
        this.weight = weight; //parametro del peso
    }
}

var rn = 0; //variabile per i nomi random
var rs = 0; //variabile per gli status random
var ps = 0; //variabile per il peso random
var cs = 0; //variabile per il costo random
var p = []; //array vuoto per i prodotti
for(var j = 0; j < 30; j++)
{
    id = IdInitializer(id);
    rn = Math.floor(Math.random() * ProductsName.length); //i diventa un intero casuale tra 0 e la lunghezza dell'array dei nomi dei prodotti
    cs = Math.floor(Math.random() * (10.01 - 1.01) + 1.01); //funzione per il costo random tra 0 e 500
    ps = Math.floor(Math.random() * (10.01 - 1.01) + 1.01); //funzione per il peso random tra 0 e 500
    p[j] = new Product(id, ProductsName[rn], '', randomDate('01-01-2020'), cs + "$", ps + "g");
    id++;
    console.log(p[j]);
}