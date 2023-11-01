function solve(input) {

    let obj = {};

    for (let element of input) {
        if (obj.hasOwnProperty(element)) {
            obj[element] += 1;
        } else {
            obj[element] = 1;
        }
    }
    console.log(obj)
};

solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);

// solve(["dog", "bye", "city", "dog", "dad",
//     "boys", "ginger"]);