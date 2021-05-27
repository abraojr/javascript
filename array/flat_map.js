const school = [{
    name: 'Class M1',
    students: [{
        name: 'Gustavo',
        grade: 8.1
    }, {
        name: 'Ana',
        grade: 9.3
    }]
}, {
    name: 'Class M2',
    students: [{
        name: 'Rebeca',
        grade: 8.9
    }, {
        name: 'Roberto',
        grade: 7.3
    }]
}];

const getStudentsGrade = students => students.grade;
const getClassGrade = classes => classes.students.map(getStudentsGrade);

const grades1 = school.map(getClassGrade);
console.log(grades1);

console.log([].concat([8.1, 9.3], [8.9, 7.3]));

// const grades2 = school.flatMap(getClassGrade);

//Implementing flatMap manually
Array.prototype.flatMap2 = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

const grades2 = school.flatMap2(getClassGrade);
console.log(grades2);