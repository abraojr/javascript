Number.prototype.between = function (start, end) {
    return this >= start && this <= end;
}

const printResult = function (grade) {
    if (grade.between(9, 10)) {
        console.log('Very good');
    } else if (grade.between(7, 8.99)) {
        console.log('Good');
    } else if (grade.between(4, 6.99)) {
        console.log('Bad');
    } else if (grade.between(0, 3.99)) {
        console.log('Very bad');
    } else {
        console.log('Invalid grade');
    }
}

printResult(10);
printResult(8.9);
printResult(6.55);
printResult(2.3);
printResult(-1);
printResult(11);