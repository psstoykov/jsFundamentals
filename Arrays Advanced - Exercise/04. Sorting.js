function solve(array) {

    let sorted = array.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < sorted.length; i++) {
        result.push(sorted.pop());
        result.push(sorted.shift());
        i--;
    }
    console.log(result.join(" "))
};

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
solve([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
