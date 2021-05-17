// Function in JS is First-Class Object (Citizen)
//Higher-order function

//create in literal form
function func1() { }

//store in a variable
const func2 = function () { }

//store in an array
const array = [function (a, b) { return a + b }, func1, func2];
console.log(array[0](2, 3));

//store in an attribute of an object
const obj = {};
obj.talk = function () { return 'Hello' }
console.log(obj.talk());


// functions as parameters
function run(func3) {
    func3();
}

run(function () { console.log('Running...') });


//a function can return/contain another function
function sum(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

sum(2, 3)(4);

