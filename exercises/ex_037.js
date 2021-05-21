/*Write a function that receives two parameters start and end. This function should print all that are between
these values. By default the values should be 0 for start and 100 for end. Watch out for to correct the order
of the parameters in case the function receives the higher value before the lower value.*/

function printOdd(begin = 0, end = 100) {
    if (begin > end) {
        begin = end + begin;
        end = begin - end;
        begin = begin - end;
    }

    for (let i = begin; i <= end; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}

printOdd(19, 3);
console.log('---------------------------------');
printOdd(0, 25);
