function solve(input) {

    let damage = 0;
    let kills = 0;
    let bombBunnies = input.pop().split(" ");
    for (let i = 0; i < bombBunnies.length; i++) {
        bombBunnies[i] = bombBunnies[i].split(",").map(Number);
    }

    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split(" ").map(Number);
    }

    for (let bunny of bombBunnies) {
        let [row, col] = bunny; //bunny's coordinates
        let currentBombValue = input[row][col]; //bomb Value of current bunny
        if (currentBombValue == 0) {
            continue;
        }

        damage += currentBombValue; //added the damage from current bomb bunny
        kills++;    //number of bunnies killed
        input[row][col] = 0;    //set current bomb bunny to dead

        if (row - 1 >= 0 && col - 1 >= 0) {
            input[row - 1][col - 1] -= currentBombValue;
            if (input[row - 1][col - 1] < 0) {
                input[row - 1][col - 1] = 0;
            }
        }
        if (row - 1 >= 0) {
            input[row - 1][col] -= currentBombValue;
            if (input[row - 1][col] < 0) {
                input[row - 1][col] = 0;
            }
        }
        if (row - 1 >= 0 && col + 1 < input[row - 1].length) {
            input[row - 1][col + 1] -= currentBombValue;
            if (input[row - 1][col + 1] < 0) {
                input[row - 1][col + 1] = 0
            }
        }
        if (col + 1 < input[row].length) {
            input[row][col + 1] -= currentBombValue;
            if (input[row][col + 1] < 0) {
                input[row][col + 1] = 0;
            }
        }
        if (row + 1 < input.length && col + 1 < input[row + 1].length) {
            input[row + 1][col + 1] -= currentBombValue;
            if (input[row + 1][col + 1] < 0) {
                input[row + 1][col + 1] = 0;
            }
        }
        if (row + 1 < input.length) {
            input[row + 1][col] -= currentBombValue;
            if (input[row + 1][col] < 0) {
                input[row + 1][col] = 0;
            }
        }
        if (row + 1 < input.length && col - 1 >= 0) {
            input[row + 1][col - 1] -= currentBombValue;
            if (input[row + 1][col - 1] < 0) {
                input[row + 1][col - 1] = 0;
            }
        }
        if (col - 1 >= 0) {
            input[row][col - 1] -= currentBombValue;
            if (input[row][col - 1] < 0) {
                input[row][col - 1] = 0;
            }
        }
    }

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] > 0) {
                damage += input[i][j];
                kills++;
                input[i][j] = 0;
            }
        }
    }
    console.log(damage);
    console.log(kills);
};

solve(['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']);

// solve(['5 10 15 20',
//     '10 10 10 10',
//     '10 15 10 10',
//     '10 10 10 10',
//     '2,2 0,1']);