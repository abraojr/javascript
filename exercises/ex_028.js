/*Using the for-repeat structure, make a function that goes through an array and counts how many numbers of 
this array are in the range [10,20] (notice that the range is closed, i.e., it includes 10 and 20) and how 
many of them are outside the range, and write down this information.*/

function Interval(vect) {
    qntyNumbersInInterval = 0;
    qntyNumbersOutInterval = 0;
    for (let i = 0; i < vect.length; i++) {
        if (vect[i] >= 10 && vect[i] <= 20) {
            qntyNumbersInInterval++;
        }
        if (vect[i] < 10 || vect[i] > 20) {
            qntyNumbersOutInterval++;
        }
    }
    return `${qntyNumbersInInterval} numbers inside the range. ${qntyNumbersOutInterval} numbers out of range.`;
}

vect = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21];

console.log(Interval(vect));