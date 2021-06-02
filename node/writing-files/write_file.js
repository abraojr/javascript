const fs = require('fs');

const product = {
    name: 'iPhone X',
    price: 5000.00,
    discount: 0.15
};

fs.writeFile(__dirname + '/fileGenerated.json', JSON.stringify(product), error => {
    console.log(error || 'File  was saved!');
});