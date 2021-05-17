console.log(typeof Object); //OUTPUT: function
console.log(typeof new Object); //OUTPUT: object

const Client = function () { };
console.log(typeof Client); //OUTPUT: function
console.log(typeof new Client); //OUTPUT: object

class Product { }; // ES 2015 (ES6)
console.log(typeof Product); //OUTPUT: function
console.log(typeof new Product); //OUTPUT: object


