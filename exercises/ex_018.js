/*Implement a function that takes as parameters the code of the item ordered, the quantity, and calculates the
amount to be paid for that snack. Consider that at each execution only one item will be calculated. Use the 
switch command. Create a default case for a non-existent product.*/

function calculateSale(codeProduct, qnty) {
    switch (codeProduct) {
        case 100:
            return qnty * 3
        case 200:
            return qnty * 4
        case 300:
            return qnty * 5.5
        case 400:
            return qnty * 7.5
        case 500:
            return qnty * 3.5
        case 600:
            return qnty * 2.8
        default:
            return "Product doesn't exist."
    }
}

console.log(calculateSale(100, 2));
console.log(calculateSale(200, 2));
console.log(calculateSale(300, 2));
console.log(calculateSale(400, 2));
console.log(calculateSale(500, 2));
console.log(calculateSale(600, 2));
console.log(calculateSale(700, 2));