function solve(arr) {

    let result = (a, b) => Number(a) + Number(b);

    console.log(result(arr[0], arr[arr.length - 1]));

};

solve(['20', '30', '40']);
solve(['5', '10']);
