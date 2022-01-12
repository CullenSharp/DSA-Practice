# Euclid's Algorithm

Euclid's algorithm is used to find the greatest common divisor (gcd) between two non-negative integers: {m,n}

> Derived from Knuth's _The Art of Computer Programming_

1. [Swap] If m < n, set m <-> n
1. [Find remainder] Set r <- m % n
1. [Is it zero?] If r = 0, terminate; n is the greatest common divisor.
1. [Reduce] Set m <- n, n <- r
