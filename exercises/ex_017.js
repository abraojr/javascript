/*Make a program that reads a number between 0 and 10, and writes this number in full. Use the switch command.
Create a default case that writes 'Number out of range.'*/

function numberInFull(number) {
    switch (number) {
        case 0:
            console.log('Zero');
            break;
        case 1:
            console.log('One');
            break;
        case 2:
            console.log('Two');
            break;
        case 3:
            console.log('Three');
            break;
        case 4:
            console.log('Four');
            break;
        case 5:
            console.log('Five');
            break;
        case 6:
            console.log('Six');
            break;
        case 7:
            console.log('Seven');
            break;
        case 8:
            console.log('Eight');
            break;
        case 9:
            console.log('Nine');
            break;
        case 10:
            console.log('Ten');
            break;
        default:
            console.log('Number out of range.');
    }
}

numberInFull(0);
numberInFull(1);
numberInFull(2);
numberInFull(3);
numberInFull(4);
numberInFull(5);
numberInFull(6);
numberInFull(7);
numberInFull(8);
numberInFull(9);
numberInFull(10);
numberInFull(11);