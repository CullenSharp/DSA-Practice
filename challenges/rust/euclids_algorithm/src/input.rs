use std::env;

pub fn run() -> Vec<i32> {
  let args: Vec<String> = env::args().collect();
  let m: i32 = args[1].parse::<i32>().unwrap();
  let n: i32 = args[2].parse::<i32>().unwrap();

  return vec![m, n];
}
