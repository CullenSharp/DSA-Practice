// Famously, man's not hot
interface BigShaq {
  name: String,
  gender: String,
  hot: boolean,
  jacket: boolean,
  skats: Array<String>,
  takeOffYourJacket(): void,
  quickMaths(m: number, n: number): void,
  skat(): void
}

const bigShaq: BigShaq = {
  name: "Big Shaq",
  gender: "mans",
  hot: false,
  jacket: true,
  skats: [
    "skidi-kat-kat", "skrrat", "skrrrahh",
    "Pap", "ka-ka-ka", "skidiki-pap-pap",
    "ka-ka", "pu-pu-pudrrrr-boom", "boom",
    "skya", "ah", "du-du-ku-ku-dun-dun",
    "dun", "poom"
  ],
  takeOffYourJacket(): void {
    if (this.hot == false) {
      console.log("Babes, man's not hot (never hot)");
    }
  },
  // Computes m + n and reduces by one
  quickMaths(m, n): void {
    const sum = m + n;
    const minusOne = sum - 1;
    console.log(`${m} plus ${n} is ${sum}. Minus 1 that's ${minusOne}, Quick maths`);
  },
  // Dynamically builds a "skat" string
  skat(): void {
    // Get random int between 0 and n-1
    const randLen: number = ~~(Math.random() * (this.skats.length - 1));
    let i = 0;
    let skat: String = "";

    do {
      let randSkat: number = ~~(Math.random() * (this.skats.length - 1));
      // Add random skat to string
      skat += ` ${this.skats[randSkat]}`;
      // Update counter
      i++;
    } while (i < randLen);
    console.log(skat);
  }
}

bigShaq.skat();
bigShaq.quickMaths(2, 2);
