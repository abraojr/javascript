let isActive = false;
console.log(isActive);  //OUTPUT: false

isActive = true;
console.log(isActive);  //OUTPUT: true

isActive = 1;
console.log(!!isActive); //OUTPUT: true

console.log('The true ones...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'test');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log('The false ones...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log('Last but not least...');
console.log(!!('' || null || 0 || ' '));

let myName = '';
console.log(myName || 'Unknown'); //OUTPUT: Unknown