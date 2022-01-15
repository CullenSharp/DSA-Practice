var bigShaq = {
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
    takeOffYourJacket: function () {
        if (this.hot == false) {
            console.log("Babes, man's not hot (never hot)");
        }
    },
    // Computes m + n and reduces by one
    quickMaths: function (m, n) {
        var sum = m + n;
        var minusOne = sum - 1;
        console.log(m + " plus " + n + " is " + sum + ". Minus 1 that's " + minusOne + ", Quick maths");
    },
    // Dynamically builds a "skat" string
    skat: function () {
        // Get random int between 0 and n-1
        var randLen = ~~(Math.random() * (this.skats.length - 1));
        var i = 0;
        var skat = "The ting goes";
        do {
            var randSkat = ~~(Math.random() * (this.skats.length - 1));
            // Add random skat to string
            skat += " " + this.skats[randSkat];
            // Update counter
            i++;
        } while (i < randLen);
        console.log(skat);
    }
};
bigShaq.skat();
