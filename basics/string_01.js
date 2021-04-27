const school = "Cod3r";

console.log(school.charAt(4));  //OUTPUT: r
console.log(school.charAt(5));  //OUTPUT: 
console.log(school.charCodeAt(3));  //OUTPUT: 51 (Unicode)
console.log(school.indexOf('3'));  //OUTPUT: 3

console.log(school.substring(1)); //OUTPUT: od3r
console.log(school.substring(0, 3));  //OUTPUT: Cod

console.log("School ".concat(school).concat(" !"));  //OUTPUT: School Cod3r !
console.log("School " + school + " !");  //OUTPUT: School Cod3r !
console.log(school.replace(3, 'e'));  //OUTPUT: Coder

console.log("Ana,Maria,Pedro".split(','));  //OUTPUT: [ 'Ana', 'Maria', 'Pedro' ]