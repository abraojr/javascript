const students = [
    { name: 'John', grade: 7.3, scholarship: false },
    { name: 'Mary', grade: 9.2, scholarship: true },
    { name: 'Peter', grade: 9.8, scholarship: false },
    { name: 'Ana', grade: 8.7, scholarship: true }
];

console.log(students.map(a => a.grade));
const result = students.map(a => a.grade).reduce(function (accumulator, current) {
    console.log(accumulator, current);
    return accumulator + current;
}, 0);

console.log(result);