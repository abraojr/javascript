/* Make a function that takes a number (from 1 to 12 and returns the corresponding month as a string. For 
example, if the input is 2, the function should return "February", since this is the 2nd month.*/

// solution 1
function returnMonth1(number) {
    switch (number) {
        case 1:
            return "january";
        case 2:
            return "february";
        case 3:
            return "march";
        case 4:
            return "april";
        case 5:
            return "may";
        case 6:
            return "june";
        case 7:
            return "july";
        case 8:
            return "august";
        case 9:
            return "september";
        case 10:
            return "october";
        case 11:
            return "november";
        case 12:
            return "december";
    }
}

console.log(returnMonth1(1));

// solution 2
function returnMonth2(number) {
    const mapping = ['january', 'february', 'march', 'april', 'may', 'june', 'july',
        'august', 'september', 'october', 'november', 'december'];
    return mapping[--number];
}

console.log(returnMonth2(4));