function solve(input) {

    let numberPieces = Number(input.shift());

    let piecesArray = [];
    let catalogue = {};

    for (let i = 0; i < numberPieces; i++) {
        piecesArray.push(input.shift());
        let [piece, composer, key] = piecesArray[i].split("|");
        catalogue[piece] = {};
        catalogue[piece][composer] = key;

    }
    let command = input.shift();

    while (command != "Stop") {

        let tokens = command.split("|")
        let operation = tokens.shift();
        let piece = tokens.shift();

        switch (operation) {
            case "Add":
                let composer = tokens.shift();
                let key = tokens.shift();

                if (catalogue.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`)
                    break;
                }
                catalogue[piece] = {};
                catalogue[piece][composer] = key;
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                break;
            case "Remove":
                if (!catalogue.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;
                }
                delete catalogue[piece];
                console.log(`Successfully removed ${piece}!`)
                break;
            case "ChangeKey":
                let newKey = tokens.shift();
                if (!catalogue.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;
                }
                let entries = Object.entries(catalogue[piece]);
                let c = entries[0][0];
                let k = entries[0][1];
                catalogue[piece][c] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`)
                break;
        }

        command = input.shift();
    }

    for ([piece, composer] of Object.entries(catalogue)) {
        let entries = Object.entries(composer);
        let name = entries[0][0];
        let key = entries[0][1];
        console.log(`${piece} -> Composer: ${name}, Key: ${key}`);

    }
};

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);

// solve([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ])