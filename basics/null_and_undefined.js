let value; // uninitialized
console.log(value);

value = null; // lack of value
console.log(value);
// console.log(value.toString()); -> Error

const product = {};
console.log(product.price);
console.log(product);

product.price = 3.50;
console.log(product); //OUTPUT: { price: 3.5 }

product.price = undefined; // avoid assigning undefined
console.log(!!product.price); //OUTPUT: false
console.log(product);

product.price = null; // without price
console.log(!!product.price); //OUTPUT: false
console.log(product);