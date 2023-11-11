function solve(word, text) {

    text = text.toLowerCase();

    let textArray = text.split(" ");

    if (textArray.includes(word)) {
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
