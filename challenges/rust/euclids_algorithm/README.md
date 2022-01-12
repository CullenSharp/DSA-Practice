# Euclid's Algorithm

Euclid's algorithm is for finds the greatest common divisor between two non-negative integers m, n

Derieved from Knuth's *The Art of Computer Programming*

E1. [Swap m and n if m < n] Set m <-> n
E2. [Find remainder] Divide m by n and let r be the remainder 
E3. [Is it zero?] If r = 0, the algorithm terminates; n is the answer;
E4. [Reduce] Set  m <- n, n <- r

