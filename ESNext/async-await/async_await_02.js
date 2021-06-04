function generateNumber(min, max, bannedNumbers) {
    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise((resolve, reject) => {
        const factor = max - min + 1;
        const random = parseInt(Math.random() * factor) + min;
        if (bannedNumbers.includes(random)) {
            reject('Repeated number!');
        } else {
            resolve(random);
        }
    });
}

async function generateLottery(qntyOfNumbers, attempts = 1) {
    try {
        const numbers = [];
        for (let _ of Array(qntyOfNumbers).fill()) {
            numbers.push(await generateNumber(1, 60, numbers));
        }
        return numbers;
    } catch (e) {
        if (attempts > 10) {
            throw "'It didn't work out'"
        } else {
            return generateLottery(qntyOfNumbers, attempts + 1);
        }
    }
}

generateLottery(25)
    .then(console.log)
    .catch(console.log);
