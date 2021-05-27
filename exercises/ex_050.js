/*Make a function that takes an array and returns the first and last element of that array as a new array*/

//solution 1
function firstAndLast1(elements) {
    const firstIndexElement = 0;
    const lastIndexElement = elements.length - 1;
    const firstElement = elements[firstIndexElement];
    const lastElement = elements[lastIndexElement];
    return [firstElement, lastElement];
}

console.log(firstAndLast1([7, 14, 'Hello']));

// solution 2
function firstAndLast2(elements) {
    const firstElement = elements.shift();
    const lastElement = elements.pop();
    return [firstElement, lastElement];
}

console.log(firstAndLast2([9, 'Abrão', {}, 356]));

//solution 3
function firstAndLast3([firstElement, ...remainingElements]) {
    const lastElement = remainingElements.pop();
    return [firstElement, lastElement];
}

console.log(firstAndLast3([7, "hello", 356, 'Abrão', 7]));