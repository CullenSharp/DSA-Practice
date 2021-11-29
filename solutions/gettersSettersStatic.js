// A getter is a property that gets a value
// They are defined by writing "get" in front of the method name in the object expression/class declaration
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};

console.log(varyingSize.size);

// Writing or "setting" is very similar
// Use the "set" keyword instead
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    // Gets the temperature in fahrenheit
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    // Converts a given value in fahrenheit and sets it to this.celsius
    this.celsius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    // Creates an instance using fahrenheit instead of celsius
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.celsius);

temp.fahrenheit = 86;
console.log(temp.celsius);

// Providing "static" before a method makes it only accessible in the constructor
let tempFahrenheit = Temperature.fromFahrenheit(100);

console.log(tempFahrenheit.fahrenheit);
