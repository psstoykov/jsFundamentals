function solve(arr, num) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let y = i + 1; y < arr.length; y++) {
            let magicSum = [];
            if (arr[i] + arr[y] == num) {
                magicSum.push(arr[i], arr[y]);
                console.log(magicSum.join(" "))
            }
        }
    }
};

// solve([1, 7, 6, 2, 19, 23],
//     8);
solve([14, 20, 60, 13, 7, 19, 8],
    27);
// solve([1, 2, 3, 4, 5, 6],
//     6);