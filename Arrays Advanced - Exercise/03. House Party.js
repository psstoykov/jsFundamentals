function solve(array) {

    let list = [];

    for (let i = 0; i < array.length; i++) {

        let command = array[i].split(" ");

        command.splice(1, 1);
        command.pop();
        let name = command[0];

        if (command.length == 1) {
            //going
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                list.push(name);
            }
        } else if (command.length == 2) {
            //not going
            if (list.includes(name)) {
                let index = list.indexOf(name);
                list.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(list.join("\n"));
};

solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);
