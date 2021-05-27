/*Create a function that returns the string "Hello, " concatenated with a text argument (to be passed to the function) and with an exclamation 
mark "!" at the end.*/


// solution 1
function greet1(name) {
    const greeting = "Hello";
    return [greeting, name].join(', ').concat("!");
}

console.log(greet1('Abrão'));

//solution 2
function greet2(name) {
    return "Hello, " + name + "!";
}

console.log(greet2('Daniel'));

// solution 3
function greet3(name) {
    return `Hello, ${name}!`;
}

console.log(greet3('John'));