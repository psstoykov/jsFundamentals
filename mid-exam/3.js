function solve(array, entry, type) {

    let leftSum = 0;
    let rightSum = 0;
    //if both sums are equal, print only the left
    //he never breaks the item at his entry point
    let entryValue = array[entry];

    if (type == "cheap") {

        for (let i = entry - 1; i >= 0; i--) { ///////////breaking to the left
            if (array[i] < entryValue) {
                leftSum += Math.abs(array[i]);
            }
        }
        for (let i = entry + 1; i < array.length; i++) {
            if (array[i] < entryValue) {
                rightSum += Math.abs(array[i]);
            }
        }
        if (rightSum == leftSum) {
            console.log(`Left - ${leftSum}`);
        } else if (rightSum > leftSum) {
            console.log(`Right - ${rightSum}`);
        } else {
            console.log(`Left - ${leftSum}`);
        }
        //////////////////////////////////////////////////////////////////
    } else if (type == "expensive") {

        for (let i = entry - 1; i >= 0; i--) { ///////////breaking to the left
            if (array[i] >= entryValue) {
                leftSum += array[i];
            }
        }
        for (let i = entry + 1; i < array.length; i++) {
            if (array[i] >= entryValue) {
                rightSum += array[i];
            }
        }

        if (rightSum == leftSum) {
            console.log(`Left - ${leftSum}`);
        } else if (rightSum > leftSum) {
            console.log(`Right - ${rightSum}`);
        } else {
            console.log(`Left - ${leftSum}`);
        }
    }
};

// solve([1, 5, 1],
//     1,
//     "cheap");

solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    'expensive')

// solve([-2, -1, -1, -1, -1, -1, -1, -1, -1, -1],
//     3,
//     "expensive");