function solve(string) {

    let arr = string.split(" ").map(a => a.toLowerCase());

    let trackMap = new Map();

    for (let word of arr) {

        if (trackMap.has(word)) {
            let counter = trackMap.get(word)
            trackMap.set(word, counter + 1)

            continue;
        } else {
            trackMap.set(word, 1)
        }
    }

    let buff = "";

    for (let [key, value] of trackMap.entries()) {

        if (value % 2 == 1) {
            buff += key + " "
        }
    }
    console.log(buff)

};

// solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

solve('Cake IS SWEET is Soft CAKE sweet Food');