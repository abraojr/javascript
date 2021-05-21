/*Build a function that will take two Strings of varying lengths and return True or False if all characters 
(regardless of upper or lower case) are contained in both words.*/

function validateString(string1, string2) {
    let isContained = true;
    for (let i = 0; i < string1.length; i++) {
        let characterString1 = string1.charAt(i).toLowerCase();
        for (let j = 0; j < string2.length; j++) {
            let characterString2 = string2.charAt(j).toLowerCase();
            if (characterString1 == characterString2) {
                isContained = true;
                break;
            } else {
                isContained = false;
            }
        }
        if (!isContained) {
            return isContained;
        }
    }
    return isContained;
}

console.log(validateString('abc', 'cba'));
console.log(validateString('fra', 'bra'));
console.log(validateString('JavaScript', 'TpircSavaj'));