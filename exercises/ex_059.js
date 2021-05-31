/* Make a function that takes the base and the height of a triangle and returns the area of that triangle.
The precision must be two decimal places, rounding if necessary.*/

function triangleArea(base, height) {
    const area = (base * height) / 2;
    return area.toFixed(2);
}

console.log(triangleArea(10, 15));
console.log(triangleArea(7, 9));
console.log(triangleArea(9.25, 13.1));