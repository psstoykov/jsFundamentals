function solve(input) {

    let players = [];
    let obj = {}
    for (let player of input) {
        [name, cards] = player.split(": ")

        let cardsArr = cards.split(",");
        if (obj.hasOwnProperty(name)) {
            obj[name] += " " + cardsArr.join("");
            continue;
        }
        obj[name] = cardsArr.join("");

    }

    for (let entry of Object.entries(obj)) {
        players.push(entry)
    }


    for (let i = 0; i < players.length; i++) {

        let [player, cards] = players[i];

        let cardsArray = cards.split(" ")

        let newSet = new Set;

        for (let card of cardsArray) {
            newSet.add(card)
        }

        let newCards = Array.from(newSet).join(" ");
        players[i][1] = newCards;
    }

    let powers = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };

    let types = {
        'S': 4, 'H': 3, 'D': 2, 'C': 1
    };

    for (let i = 0; i < players.length; i++) {
        let cards = players[i][1];
        let cardsArr = cards.split(" ")

        let sum = 0;
        for (let card of cardsArr) {
            let a, b;
            if (card.length == 3) {
                a = `${card[0]}${card[1]}`;
                b = card[2];
            } else {
                [a, b] = card;
            }
            let current = 0;
            current = powers[a] * types[b];
            sum += current
        }
        players[i][1] = sum;

        console.log(players[i][0] + ": " + players[i][1]);
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD,'
]);

// solve([
//     'John: 2C, 4H, 9H, AS, QS',
//     'Slav: 3H, 10S, JC, KD, 5S, 10S',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Slav: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'John: JD, JD, JD, JD'
// ]);

