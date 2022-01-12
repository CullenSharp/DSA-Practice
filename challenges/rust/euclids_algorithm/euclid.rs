pub fn run(mut m: i32, mut n: i32) {
  let mut i = 0;
  while i < m {
    let r = m % n;
    
    if r == 0 {
      println!("The greatest common divisor is {}", n);
      break;
    } else {
      m = n;
      n = r;
    }
    i = i + 1;
  }
}