// operator ... rest(toJoin)/spread(toSpread)
// it is possible to use rest as a function parameter

//using spread with object
const employee = { name: 'Mary', salary: 12348.99 };
const clone = { active: true, ...employee };
console.log(clone);

// using spread with array
const groupA = ['John', 'George'];
const finalGroup = ['Paul', ...groupA, 'Ringo'];
console.log(finalGroup);