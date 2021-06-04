for (let letter of 'Cod3r') {
    console.log(letter);
}
const ecmaTopics = ['Map', 'Set', 'Promise'];

for (let i in ecmaTopics) {
    console.log(i);
}

for (let topic of ecmaTopics) {
    console.log(topic);
}

const mapTopics = new Map([
    ['Map', { discussed: true }],
    ['Set', { discussed: true }],
    ['Promise', { discussed: false }]
]);

for (let topic of mapTopics) {
    console.log(topic);
}

for (let key of mapTopics.keys()) {
    console.log(key);
}

for (let value of mapTopics.values()) {
    console.log(value);
}

for (let [key, value] of mapTopics.entries()) {
    console.log(key, value);
}

const s = new Set(['a', 'b', 'c']);
for (let letter of s) {
    console.log(letter);
}