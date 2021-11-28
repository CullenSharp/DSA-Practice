/** Oop -> object oriented programming
 *
 * Interfaces are the exposed surface of a data structure or class
 * It outlines the public methods and properties
 * Public props and methods are bindings that are externally accessible
 * Private props and methods are only accessible internally
 *
 * Encapsulation is the practice of separating interface from implementation
 */

// An old constructor function
function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

const hungryRabbit = new Rabbit("hungry");

// A class declaration
class Dog {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} dog says '${line}'`);
  }
}

const passiveDog = new Dog("passive");
passiveDog.speak("I would never.");
