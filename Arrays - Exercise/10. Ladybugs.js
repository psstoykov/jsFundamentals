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

    ////forloop defining the steps for the bugs
    for (let i = 0; i < commands.length; i++) {
        let steps = commands[i].split(" ");

        let bug = Number(steps[0]);
        let direction = steps[1]
        let distance = Number(steps[2]);

        ///////////////////////////////////////////////////////////////////////////////////////////////
        //if distance !=0, so we remove current bug from current position, else nothing
        if (distance > 0 && field[bug] > 0 && bug >= 0 && bug <= field.length) {
            field[bug] = 0;
            //if right, add 1 to field[bug+distance]
            if (direction == "right") {
                field[bug + distance]++
            } else if (direction == "left") {
                //if left, add 1 to field[bug-distance]
                field[bug - distance]++
            }
        } else if (distance < 0 && field[bug] > 0) {
            field[bug] = 0;
            if (direction == "left") {
                field[bug - distance]++
            } else if (direction == "right") {
                //if left, add 1 to field[bug-distance]
                field[bug + distance]--
            }
        }

    }
    //if element is >1, make it 1
    for (let i = 0; i < field.length; i++) {
        if (field[i] > 1) {
            field[i] = 1;
        }
    }
    //remove any NaN elements from field array
    let buff = "";

    for (let i = 0; i < field.length; i++) {
        if (field[i] == 0) {
            buff += field[i] + " ";
        } else if (field[i] == 1) {
            buff += field[i] + " ";
        }
    }
    console.log(buff)
}


solve([3, '0 1',
    '0 right 1',
    '2 right 1']);

solve([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']);

solve([5, '3',
    '3 left 2',
    '1 left -2']);