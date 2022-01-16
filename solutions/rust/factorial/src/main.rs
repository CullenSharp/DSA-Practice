use std::env;
mod factorial;

// Computes n factorial
fn main() {
    let args: Vec<String> = env::args().collect();
    let n = &args[1].parse::<i64>().unwrap();
    
    println!("{}! = {}", n, factorial::run(*n));
}
