function tag(parts, ...values) {
    console.log(parts);
    console.log(values);
    return 'Another string';
}

const student = 'Abrão';
const status = 'Approved';
console.log(tag`${student} is ${status}.`);