class Party {
  constructor(people) {
    this._people = people;
  }

  get range() {
    let low = 0;
    let high = 0;
    for (let person of this._people) {
      if (!low) low = person[1];
      if (person[1] < low) {
        low = person[1];
      }
      if (person[1] > high) {
        high = person[1];
      }
    }
    return `The range of ages in your party is ${low} to ${high} years old.`;
  }

  get size() {
    return `There are ${this._people.size} members in your party.`;
  }
}

const people = new Map();
people.set("Boris", 18);
people.set("Jean", 98);
people.set("Sean", 56);
people.set("Angel", 12);
people.set("Sarah", 36);
people.set("Sasha", 27);

const party = new Party(people);

console.log(party.range);
console.log(party.size);
