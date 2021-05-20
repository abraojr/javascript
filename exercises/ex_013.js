/* Create a conditional switch structure that receives a string with the name of a fruit and has three cases: 
Case apple, return on the console, "We don't sell this fruit here". If kiwi, return: "We are short of kiwis".
If watermelon, return: "Here it is, it's 3 reais a kilo". Test with these three options. Also create a default,
which will return an error message to the console.*/

function sellFruit(fruit) {
    switch (fruit.toUpperCase()) {
        case 'APPLE':
            console.log("We don't sell this fruit here.");
            break;
        case 'KIWI':
            console.log("We are short of kiwi fruit.");
            break;
        case 'WATERMELON':
            console.log('Here it is, it costs R$3.00 a kilo.');
            break;
        default:
            console.log('Error, invalid fruit.');
    }
}

sellFruit('apple');
sellFruit('kiwi');
sellFruit('watermelon');
sellFruit('steak');