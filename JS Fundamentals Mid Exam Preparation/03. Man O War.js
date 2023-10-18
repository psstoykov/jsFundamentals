function solve(array) {
    //--------------------SUPPORT FUNCTIONS-----------------
    let fire = (ship, index, dmg) => ship[index] -= dmg;

    let pirateShip = array.shift().split(">").map(Number);
    let warShip = array.shift().split(">").map(Number);

    let maxCapacity = Number(array.shift());
    let minimumHealth = maxCapacity * 0.2;

    let count = 0;
    let pirateSum = 0;
    let warSum = 0;
    let stalemate = true;

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ");

        let action = command[0];

        if (action == "Retire") {
            break;

        } else if (action == "Fire") {
            let index = Number(command[1]);
            let damage = Number(command[2]);

            if (warShip[index] == undefined) {
                continue;
            } else {

                fire(warShip, index, damage);

                if (warShip[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    stalemate = false;
                    return;
                }
            }
        } else if (action == "Defend") {
            let start = Number(command[1]);
            let end = Number(command[2]);
            let damage = Number(command[3]);

            if (pirateShip[start] == undefined || pirateShip[end] == undefined) {
                continue;
            } else {

                for (let i = start; i <= end; i++) {
                    pirateShip[i] -= damage;

                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        stalemate = false;
                        return;
                    }
                }
            }
        } else if (action == "Repair") {
            let index = Number(command[1]);
            let heal = Number(command[2]);

            if (pirateShip[index] == undefined) {
                continue;
            } else {
                pirateShip[index] = (pirateShip[index] + heal > maxCapacity) ? maxCapacity : pirateShip[index] + heal;
            }

        } else if (action == "Status") {

            for (let i = 0; i < pirateShip.length; i++) {


                if (pirateShip[i] < minimumHealth) {
                    count++
                }
            }
            console.log(`${count} sections need repair.`)
        }
    }
    for (let i = 0; i < warShip.length; i++) {
        warSum += warShip[i]
    }
    for (let i = 0; i < pirateShip.length; i++) {
        pirateSum += pirateShip[i]
    }

    if (stalemate) {

        console.log(`Pirate ship status: ${pirateSum}`);
        console.log(`Warship status: ${warSum}`);
    }

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
