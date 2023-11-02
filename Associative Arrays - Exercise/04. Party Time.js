function solve(input) {

    let partyIndex = input.indexOf("PARTY")
    let guestList = input.slice(0, partyIndex)
    let arrivals = input.slice(partyIndex + 1)

    let counter = 0; //people arriving at the party
    let guestObj = {};

    for (let guest of guestList) {
        guestObj[guest] = 1
    }
    for (let guest of arrivals) {

        if (guestObj.hasOwnProperty(guest)) {
            delete guestObj[guest];
        }
    }

    counter = Object.entries(guestObj).length;
    console.log(counter)

    for (let entry of Object.entries(guestObj)) {

        console.log(entry[0])
    }
};


// solve(['7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc']);

solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ']);