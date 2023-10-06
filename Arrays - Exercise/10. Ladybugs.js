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
        if (Number(positions[i] >= 0 && Number(positions[i]) < field.length) && field[Number(positions[i])] == 0) {

            field[Number(positions[i])]++;
        }
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
        let direction = steps[1];
        let distance = Number(steps[2]);


        //if we have a bug on given position, move it to a new position
        if (field[bug] == 1 && distance != 0) {
            //if direction is right/left
            if (direction == "right") {
                while (field[bug + distance] != 0 && (bug + distance <= field.length) && (bug + distance >= 0)) {
                    distance += Number(steps[2]);
                }
                if ((bug + distance >= 0) && (bug + distance <= field.length)) {
                    field[bug + distance] = 1;  //place the bug at the new location
                }
                field[bug] = 0; //removed the bug from starting position
            } else if (direction == "left") {
                while (field[bug - distance] != 0 && (bug - distance >= 0) && (bug - distance <= field.length)) {
                    distance += Number(steps[2]);
                }
                if ((bug - distance >= 0) && (bug - distance <= field.length)) {

                    field[bug - distance] = 1;
                }
                field[bug] = 0;
            }
        }
    }
    let result = field.join(" ")
    console.log(result)

}


// solve([3, '0 1',
//     '0 right 1',
//     '2 right 1']);

// solve([3, '0 1 2',
//     '0 right 1',
//     '1 right 1',
//     '2 right 1']);

// solve([5, '3',
//     '3 left 2',
//     '1 left -2']);