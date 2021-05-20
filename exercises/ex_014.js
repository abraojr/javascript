/* A man has decided to go to a dealership to buy a car. He wants to buy a hatchback car, and the dealership 
has, besides hatch cars, sedans, motorcycles and pickup trucks. Using a switch structure, if the the buyer 
wants the hatch, return: "Purchase successful". For the other options, return: "Are you sure you don't prefer
this model? If a model is specified that is not available, return on the console: "We do not work with this 
type of car here".*/

function chooseCar(model) {
    switch (model) {
        case 'hatch':
            return 'Purchase made successfully.'
        case 'sedan':
        case 'motorcycle':
        case 'pickup truck':
            return "Are you sure you don't prefer this model?"
        default:
            return 'We do not work with this type of vehicle.'
    }
}

console.log(chooseCar('hatch'));
console.log(chooseCar('motorcycle'));
console.log(chooseCar('sedan'));
console.log(chooseCar('pickup truck'));
console.log(chooseCar('jetski'));