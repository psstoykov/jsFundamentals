function solve(arr) {

    let index = arr.shift();

    console.log(arr.slice(0, index).join(" "));
    console.log(arr.slice(-index).join(" "));
}

solve([2,
    7, 8, 9]);
solve([3,
    6, 7, 8, 9]);