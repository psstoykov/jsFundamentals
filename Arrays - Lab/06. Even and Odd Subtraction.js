function solve(arr) {

    let odd = 0;
    let even = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even += arr[i]
        } else {
            odd += arr[i]
        }
    }

    let diff = even - odd;
    console.log(diff);
};

solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);