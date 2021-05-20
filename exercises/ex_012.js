/*Create a program that displays whether a day is a working day, weekend day, or invalid day given the number 
for the day. Consider that Sunday is day 1 and Saturday is day 7. Use the Switch structure.*/

function classifiesDay(x) {
    switch (x) {
        case 1: case 7:
            console.log('Weekend.');
            break;
        case 2: case 3: case 4: case 5: case 6:
            console.log('Week day.');
            break;
        default:
            console.log('Invalid day');
    }
}

classifiesDay(1);
classifiesDay(2);
classifiesDay(3);
classifiesDay(4);
classifiesDay(5);
classifiesDay(6);
classifiesDay(7);
classifiesDay(0);
classifiesDay('a');