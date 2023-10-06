function solve(array) {
    let size = array[0]; // the lenght of the field as integer             
    let field = new Array(size); // the empty field array is created
    let positions = array[1].split(" "); //positions are formated in an array as !!strings!!

    //filling field with 0s
    for (let i = 0; i < field.length; i++) {
        field[i] = 0;
    }

    //filling the field array with the bugs
    for (let i = 0; i < positions.length; i++) {
        field[Number(positions[i])]++;
    }

    //initialize the array for the fly commands
    let commands = [];
    for (let i = 2; i < array.length; i++) {
        commands.push(array[i]);
    }

    let index = 0;
    ////forloop defining the steps for the bugs
    for (let i = 0; i < commands.length; i++) {
        let steps = commands[i].split(" ");

        let bug = Number(steps[0]);
        let direction = steps[1]
        let distance = Number(steps[2]);

    }
}

solve([7, '0 2 4',
    '0 right 2',
    '2 right 1']);

// solve([3, '0 1 2',
//     '0 right 1',
//     '1 right 1',
//     '2 right 1']);

// solve([5, '3',
//     '3 left 2',
//     '1 left -2']);