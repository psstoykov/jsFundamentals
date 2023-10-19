function solve(array) {

    //----------------SUPPORT FUNCTIONS---------------------
    let decrease = array => array.map((x) => x - 1);
    //------------------------------------------------------
    function swap(array, index1, index2) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return array;
    }
    //------------------------------------------------------
    function multiply(array, index1, index2) {
        array[index1] = array[index1] * array[index2]
        return array;
    }
    //------------------------------------------------------
    let numbers = array.shift().split(" ").map(Number); //////////numbers array

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ");

        let action = command.shift();

        if (action == "end") {
            break;
        } else if (action == "swap") {
            let index1 = command[0];
            let index2 = command[1];
            numbers = swap(numbers, index1, index2);

        } else if (action == "multiply") {
            let index1 = command[0];
            let index2 = command[1];
            numbers = multiply(numbers, index1, index2);

        } else if (action == "decrease") {
            numbers = decrease(numbers);
        }
    }
    console.log(numbers.join(", "))
};

solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);

solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);