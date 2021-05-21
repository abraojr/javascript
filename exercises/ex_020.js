/*Create a program to identify the amount to be paid by a health plan given the age of the insured considering
that everyone pays R$100 plus an additional one according to the following table: 1) children under 10 years
pay R$80; 2) members between 10 and 30 years pay R$50; 3) members above 30 and up to 60 years pay R$95; 
and 4) members above 60 years pay R$130*/

function calculatePrice(age) {
    if (age < 10) {
        return 180;
    } else if (age < 30) {
        return 150;
    } else if (age < 60) {
        return 195;
    } else {
        return 230;
    }
}

console.log(calculatePrice(8));
console.log(calculatePrice(15));
console.log(calculatePrice(35));
console.log(calculatePrice(52));
console.log(calculatePrice(80));