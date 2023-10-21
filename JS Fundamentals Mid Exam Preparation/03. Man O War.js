function solve(input) {

    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxHealth = Number(input.shift());
    let minimumHealth = maxHealth * 0.2;

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let command = tokens.shift();

        if (command == "Retire") {
            break;
        } else if (command == "Fire") {
            let index = Number(tokens[0]);
            let damage = Number(tokens[1]);

            let section = warShip[index]
            if (section != undefined) {
                section -= damage;
                if (section <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                } else {
                    warShip[index] = section;
                }
            }
        } else if (command == "Defend") {
            let start = Number(tokens[0]);
            let end = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if (start < 0 || start >= pirateShip.length || end < 0 | end >= pirateShip.length) {
                continue;
            }

            for (let i = start; i <= end; i++) {
                pirateShip[i] -= damage;
                if (pirateShip[i] <= 0) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    return;
                }
            }

        } else if (command == "Repair") {
            let index = Number(tokens[0]);
            let health = Number(tokens[1]);

            if (index < 0 || index >= pirateShip.length) {
                continue;
            }

            pirateShip[index] += health;
            if (pirateShip[index] > maxHealth) {
                pirateShip[index] = maxHealth;
            }
        } else if (command == "Status") {
            let count = pirateShip.filter(section => section < minimumHealth);
            console.log(`${count.length} sections need repair.`);
        }
    }
    let pirateSum = 0;
    let warSum = 0;
    for (let section of pirateShip) {
        pirateSum += section;
    }

    for (let section of warShip) {
        warSum += section;
    }
    console.log(`Pirate ship status: ${pirateSum}\nWarship status: ${warSum}`);

};



solve((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]));

// solve((["2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"]));
