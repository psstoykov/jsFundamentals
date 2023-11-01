function solve(input) {

    let wordsMap = new Map();

    for (let element of input) {
        if (wordsMap.has(element)) {
            let counter = wordsMap.get(element);
            wordsMap.set(element, counter + 1)

        } else {
            wordsMap.set(element, 1);
        }
    }

    let sorted = Array.from(wordsMap).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`)
    }
};

solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);

// solve(["dog", "bye", "city", "dog", "dad",
//     "boys", "ginger"]);