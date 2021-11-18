function countBs(string) {
  	let bS = 0;
	for (let i = 0; i < string.length; i++) {
      if (string[i] == "B") {
        bS += 1;
		}
    }
  return bS;
}

function countChar(string, char) {
  	let charCount = 0; 
	for (let i = 0; i < string.length; i++) {
      if (string[i] == char) {
        charCount += 1;
		}
	}
  return charCount;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

