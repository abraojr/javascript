/*Write a function that receives a boolean or numeric value. If the parameter supplied is boolean, the function
returns the opposite. For example, if the input is false, it will return true. If the parameter is numeric, the
return will be the inverse number. For example, if 1 is supplied, the return will be -1. If the input parameter
is of none of the above types, return "boolean or number expected, but parameter is of type ...".*/

function invert(value) {
    const type = typeof value;
    if (type == "boolean") return !value;
    else if (type == "number") return -value;
    else
        return `boolean or number expected, but parameter is of type ${type}`;
}

console.log(invert(true));
console.log(invert('6'));
console.log(invert(-2000));
console.log(invert('Hello'));