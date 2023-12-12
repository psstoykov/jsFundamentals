function solve(array) {

    let diagonalOne = 0;
    let diagonalTwo = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split(" ").map(Number);
        diagonalOne += array[i][i];
        diagonalTwo += array[i][array.length - 1 - i]
    }
    if (diagonalOne == diagonalTwo) {
        // array = array.join(",").split(",").map(Number);

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (i == j || (i + j == array.length - 1)) {
                    continue;
                }
                array[i][j] = diagonalOne;
            }
        }
    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(" "))
    }
};

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

// solve(['1 1 1 1',
//     '1 1 1 1',
//     '1 1 1 1',
//     '1 1 1 1'])


// 0   1   1   1   0       1   0   1   0   1       1   1   0   1   1       1   0   1   0   1       0   1   1   1   0