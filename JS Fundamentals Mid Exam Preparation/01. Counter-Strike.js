function solve(array) {

    let energy = Number(array.shift());
    let countWon = 0;

    for (let i = 0; i < array.length; i++) {

        let command = array[i];
        if (command == "End of battle") {
            console.log(`Won battles: ${countWon}. Energy left: ${energy}`);
            return;
        }
        let enemy = Number(command);
        if (energy >= enemy) {
            countWon++;
            energy -= enemy;
            if (countWon % 3 == 0 && countWon != 0) {
                energy += countWon;
            }
        } else {
            // energy = 0;
            console.log(`Not enough energy! Game ends with ${countWon} won battles and ${energy} energy`);
            return;
        }
    }
};

solve((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]));

solve((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]));
