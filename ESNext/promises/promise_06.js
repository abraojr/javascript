function generateNumber(min, max, time) {
    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise(resolve => {
        setTimeout(function () {
            const factor = max - min + 1;
            const random = parseInt(Math.random() * factor) + min;
            resolve(random);
        }, time);

    });
}

function generateMultipleNumbers() {
    return Promise.all([
        generateNumber(1, 60, 4000),
        generateNumber(1, 60, 1000),
        generateNumber(1, 60, 500),
        generateNumber(1, 60, 3000),
        generateNumber(1, 60, 1500)
    ]);
}

console.time('promise');

generateMultipleNumbers()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    });