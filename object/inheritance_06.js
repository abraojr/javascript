function Class(name, videoId) {
    this.name = name;
    this.videoId = videoId;
}

const class1 = new Class('Welcome', 123);
const class2 = new Class('See you soon', 456);
console.log(class1, class2);

// simulating 'new'
function new1(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

const class3 = new1(Class, 'Welcome', 123);
const class4 = new1(Class, 'See you soon', 456);
console.log(class3, class4);