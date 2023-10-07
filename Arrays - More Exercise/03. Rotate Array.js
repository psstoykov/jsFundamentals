function solve(array) {

    let rotations = array[array.length - 1];
    array.pop(array[array.length - 1]);



    for (let i = 1; i <= rotations; i++) {
        let temp = array.pop(array[array.length - 1])
        array.unshift(temp);
    }
    let result = array.join(" ");
    console.log(result)
};

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);