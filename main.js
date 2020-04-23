 var nomiProdotti = ['Cheese', 'Banana', 'Apple', 'Rice', 'Meat', 'Nutella', 'Green Beans', 'Salad', 'Roast Beef', 'Dried Fruit', 'Pasta','Soap','Toilet Paper','Hamburger','Water','Coca-Cola','Chicken Wings'];
 var i = Math.floor(Math.random() * nomiProdotti.length); //funzione per un intero random
 /*console.log(nomiProdotti[i]);
 document.write(nomiProdotti[i]);*/

 //classe per definire gli oggetti del negozio
 class Item
 {
     constructor(nome, status)
     {
         this.nome = nome; //parametro nome
         this.status = status; //parametro status
     }
 }

 var p = []; //array vuoto
 var j = 0; //variabile per il for
 for(j=0; j<10; j++)
 {
    i = Math.floor(Math.random() * nomiProdotti.length); //i diventa un intero casuale tra 0 e la lunghezza dell'array dei nomi dei prodotti
    p[j] = new Item(nomiProdotti[i], 'new');
    console.log(p[j]);
 }
