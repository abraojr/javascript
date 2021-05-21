/* Create a program to inform which and how many bills are necessary to deliver the minimum number of bills for
a given value informed by the user considering bills of R$100, R$50, R$10, R$5, and R$1. Your program should 
show only the used notes. For example, when requesting R$18, the program should inform only the following
information (note that no information is shown for the other bills): 1 bill(s) of R$ 10. 1 bill(s) of R$ 5.
3 bill(s) of R$ 1.*/

function withdraw(withdrawAmount) {
    let counter100 = 0;
    let counter50 = 0;
    let counter10 = 0;
    let counter5 = 0;
    let counter1 = 0;
    let billValue = calculateBillValue(withdrawAmount);
    while (withdrawAmount >= billValue) {
        switch (billValue) {
            case 100:
                withdrawAmount -= 100;
                counter100++;
                break;
            case 50:
                withdrawAmount -= 50;
                counter50++;
                break;
            case 10:
                withdrawAmount -= 10;
                counter10++;
                break;
            case 5:
                withdrawAmount -= 5;
                counter5++;
                break;
            case 1:
                counter1++;
                withdrawAmount -= 1;
                break;
        }

        billValue = calculateBillValue(withdrawAmount);

    }
    return result(counter100, counter50, counter10, counter5, counter1);
}

function calculateBillValue(withdrawAmount) {
    if (withdrawAmount >= 100) {
        return 100;
    } else if (withdrawAmount >= 50) {
        return 50;
    } else if (withdrawAmount >= 10) {
        return 10;
    } else if (withdrawAmount >= 5) {
        return 5;
    } else if (withdrawAmount >= 1) {
        return 1;
    }
}

function result(counter100, counter50, counter10, counter5, counter1) {
    let result = '';

    if (counter100 > 0) {
        result += `${counter100} note(s) of R$ 100. `;
    }

    if (counter50 > 0) {
        ;
        result += `${counter50} note(s) of R$ 50. `;
    }

    if (counter10 > 0) {
        result += `${counter10} note(s) of R$ 10. `;
    }

    if (counter5 > 0) {
        result += `${counter5} note(s) of R$ 5. `;
    }

    if (counter1 > 0) {
        result += `${counter1} note(s) of R$ 1. `;
    }

    return result;
}

console.log(withdraw(153));
console.log(withdraw(18));