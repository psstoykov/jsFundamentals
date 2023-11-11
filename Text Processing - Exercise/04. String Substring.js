function solve(word, text) {

    let capText = text.split("").map(a => a.toUpperCase()).join("");

    let cap = word.toUpperCase();
    if (capText.includes(cap)) {
        console.log(word);
        return;
    } else {
        console.log(`${word} not found!`);
        return;
    }
};

solve('a',
    'A$');

solve('python',
    'JavaScript is the best programming language');
