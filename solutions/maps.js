/**
 * A map is a data structure that associates values (the keys) with other values
 */

const ages = {
  Boris: 55,
  Julia: 23,
  Ann: 56,
};

for (person in ages) {
  console.log(`${person} is ${ages[person]} years old.`);
}

// Javascript comes with a map class to make this easy
const newAges = new Map();
newAges.set("Jean", 65);
newAges.set("Sean", 34);
newAges.set("Gene", 21);

console.log("\n");

console.log(`Is Jean's age known? ${newAges.has("Jean") ? "Yes." : "No."}`);
console.log(`Sean is ${newAges.get("Sean")} years old.`);

console.log("\n");

for (guy of newAges) {
  console.log(`${guy[0]} is ${guy[1]} years old.`);
}
