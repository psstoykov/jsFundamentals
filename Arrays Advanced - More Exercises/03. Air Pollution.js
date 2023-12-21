function solve(matrix, tokens) {

    //create and parse the matrix
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(" ").map(Number);
    }

    //parse the commands
    for (let i = 0; i < tokens.length; i++) {
        let [command, value] = tokens[i].split(" ");
        let index;

        switch (command) {
            case "breeze":
                index = Number(value);
                // index is the row where all column’s value drops by 15 PM
                for (let col = 0; col < matrix[index].length; col++) {
                    matrix[index][col] -= 15;
                    if (matrix[index][col] < 0) {
                        matrix[index][col] = 0;
                    }
                }
                break;
            case "gale":
                index = Number(value);
                // index is the column in all rows where value drops by 20 PM
                for (let row = 0; row < matrix.length; row++) {
                    matrix[row][index] -= 20;
                    if (matrix[row][index] < 0) {
                        matrix[row][index] = 0;
                    }
                }
                break;
            case "smog":
                value = Number(value);
                // all blocks in the map increase equally by the given value’s PM
                for (let row = 0; row < matrix.length; row++) {
                    for (let col = 0; col < matrix[row].length; col++) {
                        matrix[row][col] += value;
                        if (matrix[row][col] < 0) {
                            matrix[row][col] = 0;
                        }
                    }
                }
                break;
        }
    }
    let polluted = [];  //store the poluted fields here

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (matrix[row][col] >= 50) {
                let coordinates = `[${row}-${col}]`;
                polluted.push(coordinates);
            }
        }
    }
    if (polluted.length == 0) {
        console.log("No polluted areas")
    } else {
        console.log(`Polluted areas: ${polluted.join(", ")}`)
    }
};

solve(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);

solve(['5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24'],
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']);

solve(['5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
    ['breeze 1', 'gale 2', 'smog 35']);