/* Write a function that receives two parameters. The first parameter is the element that will repeat, while 
the second is the number of times it will repeat. An array will be returned.*/

//solution 1
function repeat1(item, qnty) {
    let result = [];
    for (let i = 0; i < qnty; i++) {
        result.push(item);
    }
    return result;
}

console.log(repeat1('code', 2));

//solution 2
function repeat2(item, qnty) {
    return Array(qnty).fill(item);
}

console.log(repeat2(7, 3));