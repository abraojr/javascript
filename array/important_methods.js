const racingDrivers = ['Vettel', 'Alonso', 'Raikkonen', 'Mass'];
racingDrivers.pop(); // remove the last one
console.log(racingDrivers);

racingDrivers.push('Verstappen');
console.log(racingDrivers);

racingDrivers.shift(); // remove the first one
console.log(racingDrivers);

racingDrivers.unshift('Hamilton');
console.log(racingDrivers);

//splice can add or remove elements

//adding
racingDrivers.splice(2, 0, 'Bottas', 'Massa');
console.log(racingDrivers);

//removing
racingDrivers.splice(3, 1);
console.log(racingDrivers);

const somePilots1 = racingDrivers.slice(2); // return new array
console.log(somePilots1);

const somePilots2 = racingDrivers.slice(1, 4);
console.log(somePilots2);