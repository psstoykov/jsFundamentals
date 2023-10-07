function ladyBugs(array) {
    let size = array[0]; // the lenght of the field as integer             
    let field = new Array(size); // the empty field array is created
    let positions = array[1].split(" "); //positions are formated in an array as !!strings!!

    for (let i = 0; i < field.length; i++) {     //filling field with 0s
        field[i] = 0;
    }

    for (let i = 0; i < positions.length; i++) {    //filling the field array with the bugs
        if (Number(positions[i] >= 0 && Number(positions[i]) < field.length) && field[Number(positions[i])] == 0) {

            field[Number(positions[i])]++;
        }
    }

    let commands = [];  //initialize the array for the fly commands
    for (let i = 2; i < array.length; i++) {
        commands.push(array[i]);
    }

    for (let i = 0; i < commands.length; i++) {
        let steps = commands[i].split(" ");
        let bug = Number(steps[0]);
        let direction = steps[1];
        let flyPath = Number(steps[2]);

        let newPosition = 0;

        if (flyPath == 0) { //if no flyPath, continue to next iteration
            continue;
        }
        if (field[bug] == 1) {// if we have a bug on the given command, then fly
            if (direction == "right") {
                newPosition = bug + flyPath;
                while (field[newPosition] == 1) {
                    newPosition += flyPath;
                }
                if (newPosition < field.length && newPosition >= 0) {
                    field[newPosition] = 1
                }
            } else if (direction == "left") {
                newPosition = bug - flyPath;
                while (field[newPosition] == 1 && newPosition >= 0) {
                    newPosition -= flyPath;
                }
                if (newPosition < field.length && newPosition >= 0) {
                    field[newPosition] = 1
                }
            }
            field[bug] = 0; //remove bug from it's initial position
        }

    };
    let result = field.join(" ")
    console.log(result)
};

ladyBugs([3, '1 2',
    '2 left 2',
    '1 left 1']);
ladyBugs([3, '0 1',
    '0 right 1',
    '2 right 1']);

ladyBugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']);

ladyBugs([5, '3',
    '3 left 2',
    '1 left -2']);