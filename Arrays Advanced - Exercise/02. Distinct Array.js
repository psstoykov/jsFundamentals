function solve(array) {

    for (let i = 0; i < array.length; i++) {
        let temp = []
        let num = array[i]
        for (let j = 0; j < i; j++) {
            temp.push(array[j])
        }
        if (temp.includes(num)) {
            array.splice(i, 1)
            i--; //reduce the index, becase of the splice operation
        }
    }
    console.log(array.join(" "))
};

solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);