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

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
}
  
console.log(randomDate(new Date(2020, 01, 01), new Date(2020, 05, 10)));

//class used for creating the products
class Product {
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
