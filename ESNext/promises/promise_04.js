function generateNumber(min, max) {
    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise(resolve => {
        const factor = max - min + 1;
        const random = parseInt(Math.random() * factor) + min;
        resolve(random);
    });
}

generateNumber(1, 60)
    .then(num => num * 10)
    .then(numX10 => `The number generated was ${numX10}`)
    .then(console.log);

