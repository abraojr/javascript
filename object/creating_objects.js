// using literal notation
const obj1 = {};
console.log(obj1);

// Object in JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

//constructor functions
function Product(name, price, discount) {
    this.name = name;
    this.getPriceWithDiscount = () => {
        return price * (1 - discount);
    }
}

const p1 = new Product('Pen', 7.99, 0.15);
const p2 = new Product('Notebook', 2998.99, 0.25);
console.log(p1.getPriceWithDiscount(), p2.getPriceWithDiscount());


// factory function
function createEmployee(name, baseSalary, absences) {
    return {
        name,
        baseSalary,
        absences,
        getSalary() {
            return (baseSalary / 30) * (30 - absences);
        }
    }
}

const emp1 = createEmployee('John', 7980, 4);
const emp2 = createEmployee('Mary', 11400, 1);
console.log(emp1.getSalary(), emp2.getSalary());

//Object.create
const daughter = Object.create(null);
daughter.name = 'Ana';
console.log(daughter);

//JSON.parse
const fromJSON = JSON.parse('{"info":"I am a JSON"}');
console.log(fromJSON.info);

