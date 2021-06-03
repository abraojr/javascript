const technologies = new Map();
technologies.set('react', { framework: false });
technologies.set('angular', { framework: true });

console.log(technologies.react);
console.log(technologies.get('react').framework);

const miscKeys = new Map([
    [function () { }, 'Function'],
    [{}, 'Object'],
    [123, 'Number'],
]);

miscKeys.forEach((value, key) => {
    console.log(key, value)
});

console.log(miscKeys.has(123));
miscKeys.delete(123);
console.log(miscKeys.has(123));
console.log(miscKeys.size);

miscKeys.set(123, 'a');
miscKeys.set(123, 'b');
miscKeys.set(456, 'b');
console.log(miscKeys);