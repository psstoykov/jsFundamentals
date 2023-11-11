function solve(words, text) {

    let wordsArray = words.split(", ");
    let textArray = text.split(" ");
    let char = "*";

    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i].includes('*')) {
            for (let word of wordsArray) {
                if (word.length == textArray[i].length) {
                    textArray[i] = word;
                }
            }
        }
    }
    console.log(textArray.join(" "))
};

solve('great',
    'softuni is ***** place for learning new programming languages');

solve('great, learning',
    'softuni is ***** place for ******** new programming languages');

