// name/value pair
const st1 = 'Hello'; //lexical context 1

function exec() {
    const st1 = 'Hey';
    return st1;
}

// const st1 = 'Hi'; Error, Indentifier has already been declared

//Objects are nested groups of name/value pairs
const client = {
    name: 'Abrão',
    age: 21,
    weight: 60,
    addres: {
        street: "1st Street",
        number: 123
    }
};
console.log(st1);
console.log(exec());
console.log(client);