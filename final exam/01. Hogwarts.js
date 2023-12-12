function solve(input) {

    let spell = input.shift();

    let command = input.shift();

    while (command != "Abracadabra") {

        let tokens = command.split(" ");
        let action = tokens.shift();
        let spellArray = [];

        switch (action) {
            case 'Abjuration':
                spell = spell.toUpperCase();
                console.log(spell)
                break;
            case 'Necromancy':
                spell = spell.toLowerCase();
                console.log(spell)
                break;
            case 'Illusion':
                let index = Number(tokens.shift());
                let letter = tokens.shift();
                if (index >= 0 && index < spell.length) {
                    spellArray = spell.split("");
                    spellArray.splice(index, 1, letter);
                    spell = spellArray.join("");
                    console.log(`Done!`);
                } else {
                    console.log(`The spell was too weak.`)
                }
                break;
            case 'Divination':
                let first = tokens.shift();
                let second = tokens.shift();
                if (!spell.includes(first)) {////////////////////////////
                    break;
                }
                spell = spell.split(first).join(second);
                console.log(spell)
                break;
            case 'Alteration':
                let subString = tokens.shift();
                if (!spell.includes(subString)) {
                    break;
                }
                spell = spell.split(subString).join("");
                console.log(spell);
                break;
            default:
                console.log(`The spell did not work!`);
        }
        command = input.shift();
    }
};

// solve((["A7ci0",

//     "Illusion 1 c",

//     "Illusion 4 o",

//     "Abjuration",

//     "Abracadabra"]));

// solve((["TR1GG3R",

//     "Necromancy",

//     "Illusion 8 m",

//     "Illusion 9 n",

//     "Abracadabra"]));

solve((["SwordMaster",

    "Target Target Target",

    "Abjuration",

    "Necromancy",

    "Alteration master",

    "Abracadabra"]))