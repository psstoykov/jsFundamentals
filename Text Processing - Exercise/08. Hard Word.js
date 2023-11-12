function solve(input) {

    let text = input.shift();
    let wordsArray = input.shift();
    text = text.split(" ");

    let specialChar = "_";

    for (let i = 0; i < text.length; i++) {

        let current = text[i];
        let counter = 0
        let endChar = "";
        if (current.includes(specialChar)) {

            for (let word of wordsArray) {
                if (!current.endsWith(specialChar)) {
                    counter = current.length - 1;
                    endChar = current.slice(-1);
                    current = current.slice(0, -1)
                } else {
                    counter = current.length;
                }
                if (word.length == counter) {
                    text[i] = word + endChar;
                    break;
                }
            }
        }
    }

    console.log(text.join(" "))
};

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);

