/*Make a function that receives an array of elements and returns an array with only the numbers present in
the array received as parameter.*/


//solution 1
function filterNumbers1(array) {
    const result = [];
    for (let item of array)
        if (typeof item === "number")
            result.push(item);
    return result;
}

const array1 = ['JavaScript', 1, 3, 'Web', 20];
console.log(filterNumbers1(array1));


//solution 2
function filterNumbers2(array) {
    return array.filter(item => typeof item === "number");
}

const array2 = ['b', 1, 'q', 1, 5, "Hello"];
console.log(filterNumbers2(array2));
const array3 = ['a', 'b', 'c'];
console.log(filterNumbers2(array3));