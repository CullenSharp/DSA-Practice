pub fn run(mut n: i64) -> i64 {
  let mut res: i64 = n;
  n -= 1;

  while n > 0 {
    res *= n;
    n -= 1;
  }
  return res;
}
