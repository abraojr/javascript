/*Write an algorithm that reads the code of a student and his three grades. Calculate the weighted average of 
the student, considering that the weight for the highest grade is 4 and for the remaining two, 3. Show the 
student's code, the student's three grades, the calculated average, and a message "PASS" if the average is
greater than or equal to 5 and "FAIL" if the average is less than 5. "Repeat the operation until the code read
is negative. */

function calculateFinalGrade(code, grade1, grade2, grade3) {
    let grades = [];
    grades.push(grade1);
    grades.push(grade2);
    grades.push(grade3);
    grades.sort((a, b) => a < b ? 1 : -1);

    let finalAvg = (grades[0] * 4 + grades[1] * 3 + grades[2] * 3) / 10;
    console.log(`Student code: ${code}. Grades: ${grade1}, ${grade2}, ${grade3}. ${finalAvg < 5 ? 'Reproved.' : 'Approved.'}`);
}

calculateFinalGrade(123, 2.8, 6, 3.5);
calculateFinalGrade(321, 7.5, 8.0, 6.0);