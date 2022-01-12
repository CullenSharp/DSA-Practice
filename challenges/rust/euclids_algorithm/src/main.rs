mod euclid;
mod input;

fn main() {
  let input: Vec<i32> = input::run();
  let m = input[0];
  let n = input[1];
  euclid::run(m, n);
}
