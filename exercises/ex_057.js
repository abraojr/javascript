/*Create a function that takes an array of products and returns the total expenses.*/

//solution 1
function totalExpenses1(items) {
    var total = 0;
    for (let item of items)
        total += item.price;
    return total;
}

const array1 = [
    { name: 'Online newspaper', category: 'Information', price: 89.99 },
    { name: 'Cinema', category: 'Entertainment', price: 150 }
];

console.log(totalExpenses1(array1));

//solution 2
function totalExpenses2(items) {
    return items
        .map(item => item.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
}

const array2 = [
    { name: 'Galaxy S20', category: 'Eletronics', price: 3599.99 },
    { name: 'Macbook Pro', category: 'Eletronics', price: 30999.90 }
];

console.log(totalExpenses2(array2));

//solution 3
function totalExpenses3(items) {
    return items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
}

const array3 = [
    { name: 'iPhone X', category: 'Eletronics', price: 6500 },
    { name: 'Xbox Series X', category: 'Eletronics', price: 5500 }
]

console.log(totalExpenses3(array3));