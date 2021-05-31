/*Make a function that receives an object with students and their grades. The grades of each student will be
in an array. You should calculate the average grade of each student and return an object with the attributes 
name and average, which indicates the student who had the best performance in grades.*/

const sum = array => array.reduce((accumulator, current) => accumulator + current, 0);
const average = array => sum(array) / array.length;

function bestStudent(students) {
    const studentsWithAverage = Object.entries(students).map(student => {
        const key = 0,
            value = 1
        return { name: student[key], average: average(student[value]) };
    });
    const sortedStudents = studentsWithAverage.sort((studentA, studentB) => studentB.average - studentA.average);
    const bestStudent = sortedStudents[0];
    return bestStudent;
}

const obj1 = {
    John: [8, 7.6, 8.9, 6],
    Mary: [9, 6.6, 7.9, 8],
    Peter: [7, 7, 8, 9]
}

console.log(bestStudent(obj1));