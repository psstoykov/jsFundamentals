function solve(n, ogArr) {

    let newArr = []
    for (let i = 0; i < n; i++) {
        newArr.push(ogArr[i])
    }
    let output = '';
    for (let i = newArr.length - 1; i >= 0; i--) {
        output += `${newArr[i]} `;
    }
    console.log(output)
};

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);