function solve(array) {

    let train = array.shift().split(" ").map(Number);
    let maxCapacity = array.shift();

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ");

        if (command[0] == "Add") {
            train.push(Number(command[1]));
        } else {
            let num = Number(command[0]);
            for (let j = 0; j < train.length; j++) {
                if (train[j] + num <= maxCapacity) {
                    train[j] += num;
                    break;
                }
            }
        }
    }
    console.log(train.join(" "))
};

solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
solve(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);