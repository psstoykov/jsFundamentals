function solve(array, bomb) {

    [num, power] = bomb; //destructuring the bomb array
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            let index = (i - power < 0) ? 0 : i - power;
            array.splice(index, power * 2 + 1, 0); //add zeros at the removed elements;
        }
    }

    let sum = 0;
    for (let el of array) {
        sum += el;
    }
    console.log(sum)
};

solve([1, 2, 2, 4, 2, 2,
    2, 9],
    [4, 2]);
solve([1, 4, 4, 2, 8, 9,
    1],
    [9, 3]);
solve([1, 7, 7, 1, 2, 3],
    [7, 1]);
solve([1, 1, 2, 1, 1, 1,
    2, 1, 1, 1],
    [2, 1]);
