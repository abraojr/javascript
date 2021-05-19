/*closure is created when a function is declared
This scope allows the function to access and manipulate variables outside the function*/

const x = 'Global';

function outside() {
    const x = 'Local';
    function inside() {
        return x;
    }
    return inside;
}

const myFunction = outside();
console.log(myFunction());