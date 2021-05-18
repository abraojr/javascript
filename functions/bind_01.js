const person = {
    greeting: 'Good morning!',
    speak() {
        console.log(this.greeting);
    }
}

person.speak();
const speak = person.speak;
speak(); //paradigm conflict: functional and OO

const speakFromPerson = person.speak.bind(person);
speakFromPerson();