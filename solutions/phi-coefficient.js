// Phi coefficient measures the correlation between two variables using a frequency table
// This is the formula:
// ϕ = (n₀₀ * n₁₁) - (n₁₀ * n₀₁) / √(n₁· * n₀· * n·₁ * n·₀)

// n₁· indicates the sum of all measurements where the first variable was true
// n₁₁ indicates the number of measurements where both variable one and two were true

// We can represent a frequency table simply as an array with 4 values
// [n₀₀, n₁₁, n₁₀, n₀₁]
function phi([n00, n11, n10, n01]) {
  return (
    (n00 * n11 - n10 * n01) /
    Math.sqrt((n11 + n10) * (n00 + n01) * (n11 + n01) * (n00 + n10))
  );
}

const frequencyTable = {
  "n₀₀": 76,
  "n₁₁": 1,
  "n₁₀": 4,
  "n₀₁": 9,
};
console.table(frequencyTable);

// Expect: ϕ ≈ 0.069
console.log(`\n ϕ = ${phi([76, 1, 4, 9])} \n`);
