/**
 * A map is a data structure that associates values (the keys) with other values
 */

const ages = {
  boris: 55,
  julia: 23,
  ann: 56,
};

for (person in ages) {
  console.log(`${person} is ${ages[person]} years old.`);
}
