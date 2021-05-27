/*Make a function that receives two parameters, one is the amount of hours worked by an employee in a month, 
and how much he is paid per hour. The function should calculate the employee's net monthly salary, which is the
amount of hours worked in the month multiplied by his hourly rate. From this value, 30% should be subtracted,
related to taxes.The function return should be the string "Salary is equal to R$ X", where X is the 
employee's net salary in the month.*/

function calculateNetSalary(hoursWorked, salaryPerHour) {
    const grossSalary = hoursWorked * salaryPerHour;
    const netSalary = grossSalary - grossSalary * 30 / 100;
    return `Salary equal R$ ${netSalary}`;
}

console.log(calculateNetSalary(180, 60));