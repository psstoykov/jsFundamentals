function solve(input) {


    //----support functions-------------
    function collect(array, item) {
        if (!array.includes(item)) {
            array.push(item);
        }
    }
    //----------------------------------
    function drop(array, item) {
        if (array.includes(item)) {
            let index = array.indexOf(item);
            array.splice(index, 1);
        }
    }
    //-----------------------------------
    function combineItems(array, oldItem, newItem) {
        if (array.includes(oldItem)) {
            let index = array.indexOf(oldItem);
            array.splice((index + 1), 0, newItem);
        }
    }
    //-------------------------------------
    function renew(array, item) {
        if (array.includes(item)) {
            let index = array.indexOf(item);
            array.push(array.splice(index, 1));
        }
    }
    //---------------------------------------------
    //---------------------------------------------
    let inventory = input.shift().split(", ");

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(" - ");

        let action = commands.shift();

        if (action == "Craft!") {
            break;
        } else if (action == "Collect") {
            let item = commands[0];
            collect(inventory, item);
        } else if (action == "Drop") {
            let item = commands[0];
            drop(inventory, item);
        } else if (action == "Combine Items") {
            let items = commands[0].split(":");
            let oldItem = items[0];
            let newItem = items[1];
            combineItems(inventory, oldItem, newItem);
        } else if (action == "Renew") {
            let item = commands[0];
            renew(inventory, item);
        }

    }
    console.log(inventory.join(", "))
};

solve([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);