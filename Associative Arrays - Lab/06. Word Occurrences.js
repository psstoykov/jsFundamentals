function solve(text) {

    let splitted = text[0].split(" ");

    for (let i = 0; i < splitted.length; i++) {
        let word = splitted[i];
        let wordArr = word.split("")

        for (let j = 0; j < wordArr.length; j++) {
            let char = wordArr[j]

            if (char == "." ||
                char == "," ||
                char == "!" ||
                char == "?" ||
                char == "/" ||
                char == "(" ||
                char == ")" ||
                char == "[" ||
                char == "]" ||
                char == "{" ||
                char == "}" ||
                char == " " ||
                char == ":" ||
                char == ";" ||
                char == "-" ||
                char == "=" ||
                char == "+") {
                let index = wordArr.indexOf(char)

                wordArr.splice(index, 1);
                word = wordArr.join("")
                splitted.splice(i, 1, word)
            }
        }
    }

    let wordsMap = new Map();

    for (let element of splitted) {
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
}
solve(["Wha the heck ssssss sssss ssss sssss ssssss"])

// solve(["dog", "bye", "city", "dog", "dad",
//     "boys", "ginger"]);