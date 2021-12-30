const climbStairs = function (n: number, memo: Array<number> = new Array()): number {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }

  let res = climbStairs(n - 1) + climbStairs(n - 2);
  memo[n] = res;
  return res;
}
