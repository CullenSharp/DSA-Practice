pub fn run(mut m: i32, mut n: i32) {
  if m <= n {
    let t = m;
    m = n;
    n = t;
  }
  while n <= m {
    let rem = m % n;
    if rem == 0 {
      println!("The greatest common divisor is {}", n);
      break;
    } else {
      m = n;
      n = rem;
    }
  }
}
