/*Build a function for a grading system at an institution that has the following grading policy: Every student
receives a grade from 0 to 100. Students with a grade below 40 fail. The grades have the following rounding 
rule: If the difference between the grade and the next multiple of 5 is less than 3, round the grade to this 
next multiple of 5. If the grade is below 38, no rounding is done because this grade results in the student 
failing. For example, the grade 84 will be rounded to 85, but the grade 29 will not be rounded because it is 
below 40 and no efficient rounding is possible, i.e., preventing the student from failing. In the case where 
the grade is 38, rounding is possible because it will reach 40 and the student will pass.*/

function evaluateStudent(grade) {
    let finalGrade = roundUp(grade);
    if (finalGrade >= 40) {
        console.log(`Approved with ${finalGrade}`);
    } else {
        console.log(`Reproved with ${finalGrade}`);
    }
}

function roundUp(grade) {
    if (grade % 5 > 2) {
        return grade + (5 - (grade % 5));
    } else {
        return grade;
    }
}

evaluateStudent(100);
evaluateStudent(30);
evaluateStudent(38);
evaluateStudent(88);
evaluateStudent(61);