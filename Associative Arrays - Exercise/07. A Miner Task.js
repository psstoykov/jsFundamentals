function solve(input) {

    let inventory = {};

    for (let i = 0; i < input.length; i = i + 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (inventory.hasOwnProperty(resource)) {
            inventory[resource] += quantity;
        } else {
            inventory[resource] = quantity;
        }
    }
    for (let [key, value] of Object.entries(inventory)) {
        console.log(`${key} -> ${value}`)
    }
};

// solve(['Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17']);

solve(['gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);