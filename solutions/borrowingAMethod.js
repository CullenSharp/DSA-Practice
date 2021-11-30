let map = { one: true, two: true, [Symbol("hasOwnProperty")]: true };

// Fix this call
console.log(map.hasOwnProperty("one"));
// -> true
