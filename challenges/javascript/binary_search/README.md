# Binary Search Algorithm

September ／2️⃣ 7️⃣ ／ 2️⃣ 0️⃣ 2️⃣ 1️⃣

## Overview

The goal of this challenge is to write an algorithm that takes a sorted list of numbers and a target number. The algorithm will run a binary search on the list and return the index of the target if found, otherwise the algorithm returns -1.

My final solution must have a time complexity of O(logN).

## Examples

inputs:

- list: [-10, 10, 13, 50, 200, 50000, 50001]
- target: 13

returns: 2

inputs:

- list: [-9, 0, 1, 90, 92, 93, 111]
- target: 13

returns: -1

## Solution

Two approaches are readily apparent for this problem an iterative one and a recursive one. The latter is the more elegant and efficient as it uses less memory, but I chose an iterative solution at first. Both have a time complexity of O(logN) anyways.

A binary search has a clue in its name. Binary is the means by which the algorithm creates finer branches in the data. This movement is logarithmic, hence the logarithmic time complexity described earlier.

![helpful gif explaining the action of our algorithm by creating branches on a tree](https://blog.penjee.com/wp-content/uploads/2015/11/binary-search-tree-sorted-array-animation.gif)

In essence we write an algorithm that decides which path to take: left or right. We divide the pool in half and compare the value in the middle to our target. If the value is less, we look to the right. In the other case (the middle being more), look left. Because the numbers are sorted we can assume that if or target is less than the middle, then we can rule anything greater than that value.You create descending forks either until the pool is exhausted or the number is found.

A bit of pseudocode, lets try out an iterative solution first. Start by defining the low and upper bounds.

```JS
  ALGORITHM search(nums, target) 
    lower ⬅ 0
    upper ⬅ nums.size - 1
```

Then we write our loop next. Since we don't know how many iterations our algorithm needs (anything between 1 and logN), we use a while loop. Our loop ends when the lower and upper bounds are the same (i.e. our algorithm has divided into the smallest unit).

```JS
    WHILE lower is less than or equal to upper
```

Each iteration of the loop defines the middle. The index of the middle can be calculated by adding the lower and upper bounds, then dividing by 2. Doing so ensures that the middle is accurate to our segment and dynamic. You'll need to round the resulting number to the lowest integer.

```JS
      middle ⬅ (lower + upper) / 2
```

The middle is important because it forms the nexus for our branch.

```JS
      IF value at middle is less than target
        lower ⬅ middle + 1
      IF ELSE value at middle is greater than target 
        upper ⬅ middle - 1 
```

Nearly done, we check the value for equivalency with our target. At any point the two are equivalent, our algorithm returns the index of that value.

```
      IF ELSE value at middle is equivalent to target
        return middle index
```

At last, if our search is exhausted, return -1.

```JS
  return -1
```

## Big O

Here's the full code:

```JS
ALGORITHM search(nums, target, low, high)
  IF low is greater than high
    Return -1

  Mid <- low + ((high - low) / 2)

  IF value at middle index equals target
    Return middle index

  IF target is less than value at middle
    Continue search on the low half
  IF target is greater than value at middle
    Continue search on the higher half
```

There are two easy ways to discover the time complexity of this algorithm. The easiest is to infer the *meaning* of the problem. If we're familiar with the principles of a binary search, we can assume that it iteratively, or recursively, divides the search area in half each iteration. This is the inverse of exponentiation, which is logarithm. From this we get O(logN) where n is the size of the search area.

Binaries are base 2, so the equation goes ㏒₂n = x, and 2ˣ = n. For example, ㏒₂100 ≈ 7 so 2⁷ ≈ 100. From this we get O(logN). Don't worry about the 2; it's constant, so we drop it.

## Notes

I need to get better at describing this...
## Resources
