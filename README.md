# Project 01: Expiry list

1. Introduction
2. Project Description
3. Usage and Configuration
4. Files And Project Structure
5. Code Snippets
6. Authors
7. Features Delivered
8. Browser Compatibility
9. Changelog and Version History
10. Code validation
11. License

## 1. Introduction

First of all, our team met on `Skype®` to discuss about the assignement and its main points. After the first analysis, we decided to prioritize the main aspect of the program, so that we could establish the program's structure. We did a bit of **Brainstorming** while everyone spoke about their abilities, so that the Team Leader could assign everyone to a fitting role. After everything was set-up, we started coding and writing the documentation to help every member of the team understand the other team members' work, until we reached the end.

## 2. Project description 

This project generates a list of products in a supermarket. Each of these products has an expiry date, and every week the program discards the expired goods. This program generates a constant amount of new products each week, until it reaches a predetermined number of weeks. 

#### Appendix 1.1
> The user can modify some parameters: 
> * number of weeks the program should run
> * the number of products that are shipped each week
> * the day from which the program starts
> * the number of weeks after which a program is declared 'OLD'
> * the number of seconds after which a new set of products is generated, skipping the current week

A product has 8 properties:
* `id`, which uniquely identifies the product
* `name`, the name of the product, which is randomly selected from an array of pre-established names
* `status`, the status of the product, which can be 1 of 4 status:
    * 0 (*New*), the product has arrived this week
    * 1 (*Valid*), the product isn't new, but it has been on the shelf for less than N weeks (customizable by the manager)
    * 2 (*Old*), the product isn't expired, but it has been on the shelf for more than N weeks (customizable by the manager)
    * 3 (*Expired*), the item is past his expiry date and should be removed from the shelf
* `expirationDate`, the date after which the product is declared *Expired*
* `price`, the price of the item
* `weight`, the weight of the item
* `check`, the number of times the program has checked this item to see if it is expired or not

## 3. Usage and Configuration

1. To launch the program, the user must launch the `index.html` file
2. When `index.html` is opened, the user is greeted with a title and two buttons: *Run* and *Change Settings*;
   * If the user clicks on *Run*, the program will start with the default values for the customizable variables (`Appendix 1.1`)
   * If the user clicks on *Change Settings*, a fillable form appears. The user can then proceed by filling the fields with the values he wants and then he can click on *Run* or *Go back*, if he wants to run the program with default values
   > If no value is inserted into the fields, the program runs with default values
3. To check the results of the execution, the user must perform this actions:
   * **Google Chrome**: `Mouse-Right-Click > "Inspect" > "Console" tab`
   * **Internet Explorer 11**: `Mouse-Right-Click > Inspect Element > "Console" tab` or `"Settings" button (top-right corner) > "Developer Tools F12"`;
   * **Mozilla Firefox**: `Mouse-Right-Click > "Analize Element > "Console" Tab`
   * **Microsoft Edge**: `Mouse-Right-Click > "Inspect Element" > "Console" Tab`
   * **Opera**: `Mouse-Right-Click > "Inspect Element" > "Console" Tab`
   > You can also open the Console before clicking on the *Run* button. In this case, you can see every step of the execution from the beginning instead of seeing it from a certain point
4. The execution stops automatically. If you want to restart the program, simply press `F5` on the keyboard or click the `Reload that page` button in the top-left corner.

## 4. Files and Project Structure

The project is structured as it follows:
* One main directory with the following files:
   * A folder named *CSS* that contains:
      * `style.css`
   * A folder named *scripts* that contains:
      * `config.js`, with the variables specified in the `Appendix 1.1`, along with a function that determines useful dates, everything packed in the IIFE named `configSetting` and the class `Product` used for the items generation
      * `custom.js`, used for extracting values from the HTML form and then used for customize settings
      * `generator.js`, with the array `ProductsName` containing all the possible names for an item, and the function `generateProduct()`, which takes two parameters: the `actualDate`, which is the current date in the program, and `arrayProducts`, the array of generated products. It also includes two function: `randomDate()`, used for generating a random date, and `UniqueID()`, used to verify if an item's id is unique and never used again for another product
      * `main.js`, the main file of the program. This file contains a function named `start()`, which uses other files' functions and variables to generate an output in the console, visible to the user. It is called in the function `runProgram()`, which contains a `setInterval()` instruction that execute `start()` every N seconds (this parameter is customizable by the user)
      * `output.js`, this file contains an IIFE called `output` in which we wrote a lot of functions used to give the output a style, like a padding for the product's name, a format for the ID and other fancy details
      * `utility.js`, this file contains all the useful functions used in other files. In this file we wrote functions that are used for formatting the date, updating the `check` parameter in the product and even filtering the expired products. This file is probably the most important one of them all, with `main.js`
   * The `index.html` file
   * This `readme.md` file

## 5. Code Snippets 

* `config.js`/ class `Product`

> This class is used for creating and manipulating the items that will be randomly created during the program's life cycle.

```javascript
class Product {
    constructor(id, name, status, date, price, weight, check, daysOnShelf) {
        this.id = id;
        this.name = name; 
        this.status = status;
        this.expirationDate = date; 
        this.price = price;
        this.weight = weight; 
        this.check = check;
    }
}
```

* `generator.js`

> This file is used for generating the items. It has an array with names and a function for creating every attribute (randomly generated and/or selected). 

```javascript
 var generator = (function() {

    // array of usable products' names
    var productsNames = ['Cheese', 'Banana', 'Apple', 'Rice', 'Meat', 
                         'Nutella', 'Green Beans', 'Salad', 'Roast Beef', 
                         'Dried Fruit', 'Pasta','Soap','Toilet Paper','Hamburger',
                         'Water','Coca-Cola','Chicken Wings','Carrots','Avocado',
                         'Oranges', 'Potatoes', 'Fresh Loaf', 'Bagels', 'Turkey',
                         'Pork', 'Bacon', 'Sausage', 'Smoked Salmon', 'Tofu', 'Soy Milk',
                         'Hummus', 'Macaroni', 'Soup', 'Tuna', 'Cookies', 'Pretzels',
                         'Butter', 'Eggs', 'Sour Cream', 'Tobasco', 'Whip Cream', 'Coffee',
                         'Tea', 'Pepper', 'Mayo', 'Peanut Butter', 'Mustard', 'Flour', 'Coconut',
                         'Beer', 'Wax Paper', 'Hand Soap', 'Bleach', 'Nuggets', 'Ice Cream', 'Waffles', 'Wine', 'Vodka', 'Rhum', 'Gin']; 

    return {
        /**
         * Function generates a new object of product.
         * @author Francesco Violante, Ivan Meotto, Gaetano Cimino
         */
        generateProduct: function(actualDate, arrayProducts) {
            var id = generator.uniqueId(arrayProducts);
            var precision = 10; // 1 decimal
            var randomNameId = Math.floor(Math.random() * productsNames.length);
            // creare una funzione che genera i valori random
            var randomPrice = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 *  precision) / (1 * precision); //max price is 5
            var randomWeight = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision); //max weight is 5
            var initialCheck = 0;
            var expirationDate = generator.randomDate(configSettings.minExpDate, configSettings.maxExpDate());
            var initialStatus;

            if(expirationDate < actualDate) {
                initialStatus = 3;
            } else {
                initialStatus = 0;
            }

            return new Product(id, productsNames[randomNameId], initialStatus, expirationDate, randomPrice + "$", randomWeight + "g", initialCheck);
        },
        /**
         * Function returns a random date between two dates.
         * @author Ivan Meotto
         * @param {object} start a start date 
         * @param {object} end an end date
         */
        randomDate: function(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        },
        /**
         * Function returns a unique id.
         * @author Francesco Violante
         * @returns {number} count a unique id
         */
        uniqueId: function(arrayProducts) {
            var id;
            var len = arrayProducts.length;
            if(len == 0) {
                id = 1;
            } else {
                id = arrayProducts[len-1].id + 1;
            }
            return id;
        }
    }
 })();
 ```
* `output.js`/ `formattedOutput` function:

> This file is used for formatting and styling the output in the console. It has functions for changing the date format, updating the check parameter and much more

```javascript
        /**
         * Function prints the final output.
         * @author Simone Resina
         * @param {object} products an array of products.
         */
        formattedOutput: function(products) {
            var filler = '*';
            var maxLongLength = 16;
            var maxShortLength = 8;
            var space = ' ';

            for (var i = 0; i < products.length; i++) {
                var idProduct = utility.idInitializer(products[i].id, configSettings.numberOfZeros) + ':';
                var nameProduct = output.paddingFunc(products[i].name, filler, maxLongLength);
                var weightProduct = output.paddingFunc(products[i].weight, filler, maxShortLength);
                var priceProduct = output.paddingFunc(products[i].price, filler, maxShortLength);
                var dateProduct = utility.formatDate(products[i].expirationDate);
                var statusProduct = output.paddingFunc(output.convertStatus(products[i].status), filler, 10);
                var checkProduct = function() {
                    var word;
                    if (products[i].check == 1) {
                        word = "check ";
                    } else {
                        word = "checks";
                    }
                    return '[' + products[i].check + word + ']';
                };

                var finalOutput = idProduct + space + nameProduct + space + weightProduct + space +
                    priceProduct + space + dateProduct + space + statusProduct +
                    space + checkProduct();

                console.log(finalOutput);
            }
        }
```

## 6. Authors

* ### Francesco Violante (*Team Leader*) 
  Developed the following functions and files:
   * `config.js`/ `configSettings`
   * `custom.js`
   * `generator.js`/ `generateProduct` (co-author), `uniqueId`, `randomDecimal`
   * `main.js` (co-author)
   * `utility.js`/ `filterProducts`, `addDaysToDate`, `formatDate`
   * `style.css`
   * `index.html`
* ### Gaetano Cimino: (*Programmer*) 
  Developed the following functions and files:
   * `generator.js`/ `generateProduct` (co-author)
   * `main.js` (co-author)
   * `utility.js`/ `updateStatus`
* ### Ivan Meotto: (*Programmer*) 
  Developed the following functions and files:
   * `config.js`/ `Product` class
   * `generator.js`/ `generateProduct` (co-author), `randomDate`
   * `main.js` (co-author)
   * `utility.js`/ `idInitializer`
* ### Simone Resina: (*Programmer*)
  Developed the following functions and files:
   * `main.js` (co-author)
   * `output.js`/ `repeatString`, `fillingSpaces`, `paddingFunc`, `convertStatus`, `formattedOutput`

## 7. Features delivered

* Randomly generated products
* Different products after each program's iteration
* Almost infinite products' combinations
* Easy-to-read console output
* Easy-to-use and easy-to-learn user interface
* Fully customizable experience
* Different colors in the output

## 8. Browser Compatibility

This program has been tested and works properly on the following browsers:

* **Google Chrome**
* **Mozilla Firefox**
* **Opera**
* **Microsoft Edge**
* **Safari**

#### Compatibility with IE 11

One of the requirement of the project's compatibility was to make it work properly in IE 11. Unfortunately, given our use of the `class` method  to generate a product easily, without the use of an object this compatibility couldn't be meeted. Classes were introduced in **Ecmascript 2015** and IE does not support them. 

A solution proposed was to use a javascript library, [Babel.js](https://babeljs.io/) which is made exactly for these situations. Problem is, it doesn't work client-side and it needs a server-side enviroment (like Node). If we could have used a web server this program could easily be made compatible with IE 11 and even older versions.

## 9. Changelog and Version History

> **Version 1.0**
> 
> * Created the `ProductsName` array
> * Created the class `Product`
> * Created a first working prototype of the random generation algorythm

> **Version 1.1**
> 
> **CSS and `Index.html` Update**
> 
> * Created `style.css`
> * Extended functionalities for the `index.html` (Buttons, animations, title, ...)
> * Created a first version of the `custom.js` file
> * Created `config.js`
> * Created `main.js`

> **Version 1.2**
>
> * Added functions for converting dates and checking status
> * Created the following functions: `IdInizializer`, `UniqueId`, `updateStatus`, `randomDate`
> * Extended functionalities for the generation of the random product with the inclusion of an algorythm for a better date generation and control
> * General bug-fixing

> **Version 1.3**
>
> **Styling Update**
>
> * Created the file `output.js`
> * Created the following functions: `repeatString`, `fillingSpaces`, `paddingFunc`, `convertStatus`, `formattedOutput`;
> * General bug-fixing;

> **Version 1.4**
>
> **Cleaning Update**
>
> * Re-organized the whole code
> * Now the following functions have been allocated in the `utility.js` file:
>    * `idInitializer`
>    * `filterProducts`
>    * `addDaysToDate`
>    * `formatDate`
>    * `updateStatus`
> * Added comments and documentation to all the functions and variables;
> * Created the `generator.js` file, which contains the random generation part of the code;
> * Cleaned the `main.js` file
> * General bug-fixing

> **Version 1.5 - Current Build**
>
> * Added documentation for the project
> * General bug-fixing

## 10. Code validation

HTML and CSS files have been validated using the following tools:
[HTML Validator](https://validator.w3.org/) and [CSS Validator](https://jigsaw.w3.org/css-validator/)

## 11. License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
