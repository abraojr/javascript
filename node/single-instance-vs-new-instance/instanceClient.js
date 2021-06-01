const counterA = require('./single_instance');
const counterB = require('./single_instance');

const counterC = require('./new_instance')();
const counterD = require('./new_instance')();

counterA.increase();
counterA.increase();
console.log(counterA.value, counterB.value);

counterC.increase();
counterC.increase();
console.log(counterC.value, counterD.value);
