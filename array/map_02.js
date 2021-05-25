const shoppingCart = [
    '{ "name": "Eraser", "price": 3.45 }',
    '{ "name": "Notebook", "price": 13.90 }',
    '{ "name": "Pencil Kit", "price": 41.22 }',
    '{ "name": "Pen", "price": 7.50 }',
]

const toObject = json => JSON.parse(json);
const onlyThePrice = product => product.price;

const result = shoppingCart.map(toObject).map(onlyThePrice);
console.log(result);