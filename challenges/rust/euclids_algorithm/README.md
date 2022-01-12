# Euclid's Algorithm

Euclid's algorithm is used to find the greates common divisor (gcd) between two non-negative integers {m,n}

> Dereived from Knuth's *The Art of Computer Programming*

E1. [Swap] If m < n, set m <-> n
E2. [Find remainder] Set r <- m % n
E3. [Is it zero?] If r = 0, terminate; n is the greatest common divisor.
E4. [Reduce] Set m <- n, n <- r  

