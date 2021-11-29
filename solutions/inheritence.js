/**
 * Super - provides a way to access properties/methods on the superclass from the subclass
 */

const Matrix = require("./matrix");

// The "extends" keyword indicates SymmetricMatrix is a subclass of the Matrix superclass
class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    // Calls the superclass' constructor
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  // Redefines set for the subclass
  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(matrix.get(2, 3));
