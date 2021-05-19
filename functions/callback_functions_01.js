const carMakers = ['Mercedes', 'Audi', 'BMW'];

function print(name, index) {
    console.log(`${index + 1}. ${name}`);
}

carMakers.forEach(print);
carMakers.forEach(carMakers => console.log(carMakers));