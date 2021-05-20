/*Make a function so that it takes a value like 0.30000000000000004 and returns R$0.30 
(notice the comma and dot).*/

function formatDecimalValue(value) {
    valueInReal = `R$ ${value.toFixed(2).toString().replace('.', ',')}`;
    console.log(valueInReal);
}

formatDecimalValue(0.1 + 0.2);