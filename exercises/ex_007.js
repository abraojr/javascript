//Make a function whose goal is to solve Bhaskara's formula.

function bhaskara(a, b, c) {
    let results = [];
    let delta = (b ** 2) - (4 * a * c);
    if (delta < 0) {
        return "Delta is negative";
    }
    let x1 = (-b + Math.sqrt(delta)) / 2 * a;
    let x2 = (-b - Math.sqrt(delta)) / 2 * a;
    results.push(x1);
    results.push(x2);
    return results;
}

console.log(bhaskara(1, 3, 2));
console.log(bhaskara(3, 1, 2));
