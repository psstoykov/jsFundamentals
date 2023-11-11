function solve(text, searched) {

    let counter = 0;

    let textArr = text.split(" ");

    for (let word of textArr) {
        if (word == searched) {
            counter++
        }
    }

    console.log(counter)
};

solve('This is a word and it also is a sentence',
    'is');

solve('softuni is great place for learning new programming languages',
    'softuni');