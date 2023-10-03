function solve(arr, count) {

    for (let rotation = 1; rotation <= count; rotation++) {
        let currentEl = arr.shift();
        arr.push(currentEl);
    }

    console.log(arr.join(' '))
};

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);