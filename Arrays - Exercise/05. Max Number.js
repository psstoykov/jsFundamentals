function solve(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let isTop = true;
        let num = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (nextNum >= num) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            newArr.push(num);
        }
    }
    console.log(newArr.join(' '))
};


solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);