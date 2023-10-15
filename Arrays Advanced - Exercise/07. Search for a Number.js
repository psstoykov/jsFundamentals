function solve(array, inputs) {

    [elTake, elDelete, specialNum] = inputs;

    let newArray = array.splice(0, elTake);

    let count = 0;
    for (let remove = 1; remove <= elDelete; remove++) {
        newArray.shift();
    }


    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] == specialNum) {
            count++;
        }
    }
    console.log(`Number ${specialNum} occurs ${count} times.`)
};

solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
solve([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);