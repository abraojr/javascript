function printGrade(grade) {
    if (grade >= 7) {
        console.log('Approved with ' + grade);
    }
}

printGrade(8.1);
printGrade(6.1);

function printOnlyTheTrueOnes(value) {
    if (value) {
        console.log(`It's true... ` + value);
    }
}

printOnlyTheTrueOnes();
printOnlyTheTrueOnes(null);
printOnlyTheTrueOnes(undefined);
printOnlyTheTrueOnes(NaN);
printOnlyTheTrueOnes('');
printOnlyTheTrueOnes(0);
printOnlyTheTrueOnes(-1); //true
printOnlyTheTrueOnes(' '); //true
printOnlyTheTrueOnes('?'); //true
printOnlyTheTrueOnes([]); //true
printOnlyTheTrueOnes([1, 2]); //true
printOnlyTheTrueOnes({}); //true