function errorHandling(error) {
    throw new Error('Error...');
}
function printName(obj) {
    try {
        console.log(obj.name.toUpperCase() + ' !!!!');
    } catch (error) {
        errorHandling();
    } finally {
        console.log('final...');
    }
}
const obj = { name: 'Harry' };
printName(obj)