console.log(typeof Array, typeof new Array, typeof []);

let approved = new Array('Bob', 'Carl', 'Abrão');
console.log(approved);

approved = ['Bob', 'Carl', 'Abrão'];
console.log(approved[0]);
console.log(approved[1]);
console.log(approved[2]);
console.log(approved[3]);

approved[3] = 'Paul';
approved.push('Eva');
console.log(approved.length);

approved[9] = 'Rafael';
console.log(approved.length);
console.log(approved[8] === undefined);

console.log(approved);
approved.sort();
console.log(approved);

delete approved[1];
console.log(approved[1]);
console.log(approved[2]);

approved = ['Abrão', 'Bob', 'Carl'];
approved.splice(1, 1);
console.log(approved);