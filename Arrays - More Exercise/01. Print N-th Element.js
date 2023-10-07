function solve(array) {

    let n = Number(array[array.length - 1]);
    let result = "";

    for (let i = 0; i < array.length - 1; i++)
        if (i == 0) {
            result += array[i] + " ";
        } else if (i % n == 0) {
            result += array[i] + " ";
        }
    console.log(result)
};

solve(['5', '20', '31', '4', '20', '2']);
solve(['dsa', 'asd', 'test', 'test', '2']);
solve(['1', '2', '3', '4', '5', '6']);