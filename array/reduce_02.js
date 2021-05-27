const students = [
    { name: 'John', grade: 7.3, scholarship: false },
    { name: 'Mary', grade: 9.2, scholarship: true },
    { name: 'Peter', grade: 9.8, scholarship: false },
    { name: 'Ana', grade: 8.7, scholarship: true }
];

//Challenge 1 : Are all students on scholarship?
const allOnScholarship = (result, scholarship) => result && scholarship;
console.log(students.map(a => a.scholarship).reduce(allOnScholarship));

//Challenge 2: Are any students on scholarship?
const anyOnScholarship = (result, scholarship) => result || scholarship;
console.log(students.map(a => a.scholarship).reduce(anyOnScholarship));