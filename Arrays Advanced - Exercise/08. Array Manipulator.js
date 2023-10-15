function solve(array, commands) {

    for (let i = 0; i < commands.length; i++) {
        let action = commands[i].split(" ");
        let operation = action[0]; ////operation to perform

        let shift = Number(action[1]);
        if (operation == "add") { ///add element at specific index
            let index = Number(action[1]);
            let element = Number(action[2]);
            array.splice(index, 0, element);

        } else if (operation == "addMany") { ////addMany at specific index
            let index = Number(action[1]);
            let numsToAdd = action.slice(2,).map(Number); // convert to Numbers!!!!!!!!

            for (let num of numsToAdd) {
                array.splice(index, 0, num);
                index++;
            }

        } else if (operation == "contains") { //check if element exist and which index
            let element = Number(action[1]);
            console.log(array.indexOf(element))

        } else if (operation == "remove") {
            let index = Number(action[1]);
            array.splice(index, 1);

        } else if (operation == "shift") { ///shifting element to the left(rotation)
            let rotations = Number(action[1]);
            for (let i = 1; i <= rotations; i++) {
                let firstEl = array.shift();
                array.push(firstEl);
            }

        } else if (operation == "sumPairs") {
            let result = [];
            for (let i = 0; i < array.length; i += 2) {
                if (i + 1 < array.length) {

                    result.push(array[i] + array[i + 1]);
                } else {
                    result.push(array[i]);
                }
            }
            array = result;

        } else if (operation == "print") {
            console.log(`[ ${array.join(", ")} ]`)
        }
    }
};

solve([1, 1, 1], ["addMany 1 3 4 5 6", "print"]);

// solve([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
//     ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
// solve([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']);

// solve([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

// solve([2, 2, 4, 2, 4],
//     ["add 1 4", "sumPairs", "print"]);
