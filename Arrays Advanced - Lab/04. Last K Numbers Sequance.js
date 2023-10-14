function solve(n, k) {

    let array = [];
    let num = 1;
    for (let i = 1; i <= n; i++) {
        array.push(num)


        let newNum = 0;
        for (let j = ((k > i) ? 0 : i - k); j < i; j++) {
            newNum += array[j]

        }
        num = newNum
    }

    console.log(array.join(" "))
};

solve(6, 3);
solve(8, 2);