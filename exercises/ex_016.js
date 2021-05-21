/*Make a function that reads the work schedule and current salary of an employee and calculates and prints his
new salary. Use the switch structure and make a default case that indicates that the plan is invalid.*/

function calculateAdjustment(plan, currentSalary) {
    switch (plan) {
        case 'A':
            return currentSalary * 1.1
        case 'B':
            return currentSalary * 1.15
        case 'C':
            return currentSalary * 1.2
        default:
            return 'Invalid plan.'
    }
}

console.log(calculateAdjustment('A', 1000));
console.log(calculateAdjustment('B', 1000));
console.log(calculateAdjustment('C', 1000));
console.log(calculateAdjustment('D', 1000));
