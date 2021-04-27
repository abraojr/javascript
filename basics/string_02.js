const myName = 'Daniel';
const concatenation = 'Hello ' + myName + '!';
const template = `
    Hello
    ${myName}`;
console.log(concatenation, template);

//expressions...
console.log(`1 + 1 = ${1 + 1}`);

const up = text => text.toUpperCase();
console.log(`Hey... ${up('be careful!!')}`);