function solve(arr) {

    let notEqual = true;

    for (let i = 0; i < arr.length; i++) {

        let rightSum = 0;
        let leftSum = 0;

        for (r = i + 1; r < arr.length; r++) {
            rightSum += arr[r];
        }
        for (let l = i - 1; l >= 0; l--) {
            leftSum += arr[l];
        }
        if (rightSum == leftSum) {
            notEqual = false;
            console.log(i);
        }
    }
    if (notEqual) {
        console.log("no")
    }
};

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);