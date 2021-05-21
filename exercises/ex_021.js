/* Create a function to calculate the annual membership fee for an association. The function receives as 
parameter an integer that represents the month (1 - January, 2 - February...) that was paid and the value of 
the annuity. An annuity must be paid in the month of January. Per month, 5% interest is charged (on a compound
 interest). The return must be the amount to be paid for the respective month chosen.*/

function calculateValue(month, value) {
    if (month > 0 && month < 13) {
        delay = month - 1;
        return (value * ((1 + (5 / 100)) ** delay)).toFixed(2);
    } else {
        return 'Invalid Month.';
    }
}

console.log(calculateValue(4, 100));
console.log(calculateValue(12, 1000));