/*Build a function that takes as parameters the heights and the annual growth rates of two children and 
calculate whether there is a smaller child, if so whether the smaller child will outgrow the older one, and in
how many years this will happen. Use centimeters for the units of measurement.*/

function calculateGrowth(height1, tax1, height2, tax2) {
    if (height1 == height2) {
        if (tax1 > tax2) {
            return 'Child 1 will outgrow Child 2 in 1 year.';
        } else if (tax1 < tax2) {
            return 'Child 2 will outgrow Child 1 in 1 year.';
        } else {
            return 'The children are of equal height and growth.';
        }
    } else {
        if (height1 > height2) {
            if (tax1 >= tax2) {
                return 'The smaller child will not overtake the larger one.';
            } else {
                return calculateTime(height2, tax2, height1, tax1);
            }
        } else {
            if (tax2 >= tax1) {
                return 'The smaller child will not overtake the larger one.';
            } else {
                return calculateTime(height1, tax1, height2, tax2);
            }
        }
    }
}

function calculateTime(lowerHeight, taxLowerHeight, greaterHeight, taxGreaterHeight) {
    let qntyYears = 0;
    while (lowerHeight < greaterHeight) {
        lowerHeight += taxLowerHeight;
        greaterHeight += taxGreaterHeight;
        qntyYears++;
    }
    console.log(qntyYears);
    return qntyYears;
}

console.log(calculateGrowth(150, 2, 130, 4));