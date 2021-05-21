//Make a program to find all pairs between 1 and 100.

function findPairs() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

findPairs();