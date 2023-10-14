function solve(arr) {

    let array = arr.shift().split(" ");

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");
        let action = command[0];
        let num = command[1];
        let index = command[2];

        if (action == "Add") {
            array.push(num)
        } else if (action == "Remove") {
            for (let j = 0; j < array.length; j++) {
                if (array[j] == num) {
                    array.splice(j, 1);
                }
            }
        } else if (action == "RemoveAt") {
            array.splice(num, 1)
        } else if (action == "Insert") {
            array.splice(index, 0, num);
        }
    }
    console.log(array.join(" "))
};

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);
solve(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
);
