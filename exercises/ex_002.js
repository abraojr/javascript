/*Triangles can be classified into three types according to the size of their sides: Equilateral: All three 
sides are equal. Isosceles: Two sides are equal. Scalene: All sides are different. Create a function that 
takes the lengths of the three sides of a triangle and returns its length classification. (In this example
you must abstract the mathematical conditions for the existence of a triangle).*/

function triangle(a, b, c) {
    if (a == b && a == c) {
        return console.log('Equilateral Triangle');
    } else if (a == b || a == c || c == b) {
        console.log('Isosceles Triangle');
    } else {
        console.log('Scalene Triangle');
    }
}

triangle(3, 3, 3);
triangle(3, 2, 2);
triangle(4, 4, 3);
triangle(5, 4, 5);
triangle(5, 4, 3);
triangle(3, 4, 5);
triangle(4, 3, 5);