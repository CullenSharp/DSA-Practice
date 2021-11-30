/**
 * Implement a vector type
 *
 * Write a class Vec that represents a vector in 2D space
 * It takes x and y params
 */

class Vec {
  /**
   * Constructs and instance of class Vec
   * @param {num} x
   * @param {num} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Takes a vector subtracts it to the current instance
   * @param {vec} param0
   */
  minus({ x, y }) {
    this.x -= x;
    this.y -= y;
  }

  /**
   * Takes a vector adds it to the current instance
   * @param {vec} param0
   */
  plus({ x, y }) {
    this.x += x;
    this.y += y;
  }

  /**
   * Computes the distance from 0,0 to x,y
   * @returns {num} distance
   */
  get length() {
    // distance = √((x₂ - x₁)² + (y₂ - y₁)²)
    return Math.sqrt(Math.pow(this.x - 0, 2) + Math.pow(this.y - 0, 2));
  }
}

// Expect myVec.length -> 5
const myVec = new Vec(3, 4);
console.log(myVec.length);

// Expect myVec -> {x: 6, y: 7}
myVec.plus(new Vec(3, 3));
console.log(myVec);

// Expect myVec -> {x: 3, y: 4}
myVec.minus(new Vec(3, 3));
console.log(myVec);
