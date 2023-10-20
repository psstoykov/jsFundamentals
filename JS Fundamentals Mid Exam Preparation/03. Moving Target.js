function solve(input) {

    //--------------SUPPORT FUNCTION--------------------
    function shoot(array, index, power) {
        if (array[index] != undefined) {    //shoot at the target with the given power if index is valid;
            array[index] -= power;
            if (array[index] <= 0) { ///remove target if it reaches 0
                array.splice(index, 1);
            }
        }
    }
    //--------------------------------------------------
    function add(array, index, value) {
        if (index >= 0 && index < array.length) {//add value if index is valid
            array.splice(index, 0, value);
        } else {
            console.log(`Invalid placement!`);
        }
    }
    //---------------------------------------------------
    function strike(array, index, radius) {
        if (index < 0 || index > array.length - 1 || index - radius < 0 || index + radius > array.length - 1) { // check this condition
            console.log(`Strike missed!`)
        } else {
            array.splice(index - radius, (radius * 2) + 1)
        }
    }

    let targets = input.shift().split(" ");

    for (let i = 0; i < input.length; i++) {

        let command = input[i];

        if (command == "End") {
            console.log(targets.join("|"));
            return;
        }
        let actions = command.split(" ");

        let operation = actions.shift(); //type operation

        if (operation == "Shoot") {

            let index = Number(actions[0]);
            let power = Number(actions[1]);
            shoot(targets, index, power);
        } else if (operation == "Add") {
            let index = Number(actions[0]);
            let value = Number(actions[1]);
            add(targets, index, value);

        } else if (operation == "Strike") {

            let index = Number(actions[0]);
            let radius = Number(actions[1]);
            strike(targets, index, radius);

        }
    }
};

// solve((["52 74 23 44 96 110",
//     "Shoot 5 10",
//     "Shoot 1 80",
//     "Strike 2 1",
//     "Add 22 3",
//     "End"]));

solve((["1 2 3 4 5",
    "Strike 0 1",
    "End"]));