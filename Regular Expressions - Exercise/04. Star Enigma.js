function solve(input) {

    let planetCount = Number(input.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];

    let keyPattern = /[starSTAR]/g;
    let planetPattern = /@(?<name>[A-Za-z]+)(?<filling>[^@\-!:>])*?:(?<population>[\d]+)\k<filling>*?!(?<attackType>[AD])!\k<filling>*?-.(?<soldierCount>[\d]+)/g;

    for (let i = 0; i < planetCount; i++) {

        let command = input[i];

        //find the current planet's key value
        let matchedLetters = command.match(keyPattern);
        if (matchedLetters == null) {
            continue;
        }
        let key = matchedLetters.length;

        //decrypt the current planet with it's key
        let planetArray = command.split("");

        for (let j = 0; j < planetArray.length; j++) {
            let charValue = planetArray[j].charCodeAt();

            let newChar = String.fromCharCode(charValue - key);
            planetArray[j] = newChar;
        }
        //check if decrypted planet is valid
        let planetString = planetArray.join("")
        let matchArray = planetString.match(planetPattern);
        let match = planetPattern.exec(matchArray);


        if (match == null) {
            continue;
        }
        //define current planet information
        let name = match.groups['name'];
        let attackType = match.groups['attackType'];

        if (attackType == "A") {
            attackedPlanets.push(name)
        } else if (attackType == "D") {
            destroyedPlanets.push(name)
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));

    if (attackedPlanets.length > 0) {
        for (let planet of attackedPlanets) {
            console.log(`-> ${planet}`)
        }
    }

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets = destroyedPlanets.sort((a, b) => a.localeCompare(b));

    if (destroyedPlanets.length > 0) {
        for (let planet of destroyedPlanets) {
            console.log(`-> ${planet}`)
        }
    }
};

// solve(['2',
//     'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR']);


solve(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C96555SR'
]);