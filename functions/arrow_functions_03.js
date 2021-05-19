let compareWithThis = function (param) {
    console.log(this === param);
}

compareWithThis(global); //true

const obj = {};
compareWithThis = compareWithThis.bind(obj);
compareWithThis(global); //false
compareWithThis(obj); //true

let compareWithThisArrow = param => console.log(this === param);
compareWithThisArrow(global); //false
compareWithThisArrow(module.exports); //true

compareWithThisArrow = compareWithThisArrow.bind(obj);
compareWithThisArrow(obj); //false
compareWithThisArrow(module.exports); //true