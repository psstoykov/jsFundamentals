function solve(input) {

    let stringArray = input.split(" ");

    let resultArray = [];

    for (let word of stringArray) {
        if (word[0] == "#" && word.length > 1) {

            let isValid = true;
            for (let i = 1; i < word.length; i++) {
                if (word[i].toUpperCase() == word[i].toLowerCase()) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                resultArray.push(word)
            }
        } else {
            continue;
        }
    }
    for (let word of resultArray) {
        console.log(word.slice(1))
    }
};

solve('#aa');

// solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
