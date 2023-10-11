function solve(array) {

    //make a boolean variable
    //calculate first column to find the desired number
    //make 2x2 nested loops, one calculating the rows, the other the collumns
    //check inside everyloop if the sum == magicSum
    //if isMagic => return true, otherwise false;

    let magicSum = 0;
    let isMagical = true;
    let size = array.length;

    //find the desired magic number
    for (let c = 0; c < array.length; c++) {
        magicSum += array[0][c];
    }

    for (let row = 0; row < size; row++) {
        let sumR = 0;
        for (let col = 0; col < size; col++) {
            sumR += array[row][col]
        }
        if (sumR != magicSum) {
            isMagical = false
        }

    }

    for (let col = 0; col < size; col++) {
        let sumC = 0;
        for (let row = 0; row < size; row++) {
            sumC += array[col][row]
        }
        if (sumC != magicSum) {
            isMagical = false
        }

    }
    console.log(isMagical)



};

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);
// solve([[11, 32, 45],
// [21, 0, 1],
// [21, 1, 1]]);
// solve([[1, 0, 0],
// [0, 0, 1],
// [0, 1, 0]]);
// solve([[1, 1, 1], [1, 1, 1], [1, 1, 1]]);