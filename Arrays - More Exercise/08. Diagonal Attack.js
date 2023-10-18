function solve(array) {
    let size = array.length;
    let newArray = [];

    //create a nested array(matrix);
    for (let row of array) {
        newArray.push(row.split(" "))
    }
    array = newArray;

    //function for 1st diagonal
    function diagonal1(array, size) {
        let col = size - 1;
        let sum = 0;

        for (let row = 0; row < size; row++) {
            let num = Number(array[col][row])
            sum += num
            col--;
        }
        return sum;
    }
    //function for 2nd diagonal
    function diagonal2(array, size) {
        let row = 0;
        let sum = 0;

        for (let col = 0; col < size; col++) {
            let num = Number(array[col][row])
            sum += num
            row++;
        }
        return sum;
    }

    //diagonals calculated
    let diagonalOne = diagonal1(array, size);
    let diagonalTwo = diagonal2(array, size);

    //if diagonals are equal
    if (diagonalOne == diagonalTwo) {


        for (let row = 0; row < size; row++) {
            let indexUp = row;
            let indexDown = size - 1;
            for (let col = 0; col < size; col++) {

                let diagonalUp = array[indexUp][indexUp];
                let diagonalDown = array[indexDown][indexUp];
                indexDown--;

                console.log(diagonalDown)
            }
            // console.log(array[row].join(" "))

        }
    }
};

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
// solve(['1 1 1',
//     '1 1 1',
//     '1 1 0']);
