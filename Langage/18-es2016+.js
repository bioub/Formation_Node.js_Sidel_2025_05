// Class properties and private fields in ES2022
class Person {
  // Class properties
  name = 'John Doe';
  age = 30;

  // Private property (not yet widely supported)
  #privateInfo = 'This is private';

  // Method to display person info
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Private Info: ${this.#privateInfo}`);
  }
}

const person = new Person();
person.displayInfo(); // Name: John Doe, Age: 30, Private Info: This is private

console.log(person.name); // John Doe
console.log(person.age); // 30
// console.log(person.#privateInfo); // SyntaxError: Private field '#privateInfo' must be declared in an enclosing class


// .at
// const fullName = 'Romain Bohdanowicz';
console.log(fullName.at(0)); // R
console.log(fullName[fullName.length-1]); // z
console.log(fullName.at(-1)); // z
