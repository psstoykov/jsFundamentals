function solve(input) {

    //---------------------
    function urgent(array, item) {
        if (!array.includes(item)) {
            array.unshift(item);
        }
    }
    //----------------------------
    function unnecessary(array, item) {
        if (array.includes(item)) {
            let index = array.indexOf(item);
            array.splice(index, 1);
        }

    }
    //-------------------------------
    function correct(array, oldItem, newItem) {
        if (array.includes(oldItem)) {
            let index = array.indexOf(oldItem);
            array[index] = newItem;
        }
    }
    //--------------------------------------
    function rearrange(array, item) {
        if (array.includes(item)) {
            let index = array.indexOf(item);
            array.push(array.splice(index, 1))
        }
    }

    let shoppingList = input.shift().split("!");

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command == "Go Shopping!") {
            console.log(shoppingList.join(", "));
            return;
        }
        let operations = command.split(" ");
        let action = operations.shift();
        let item = operations.shift();


        if (action == "Urgent") {
            urgent(shoppingList, item);
        } else if (action == "Unnecessary") {
            unnecessary(shoppingList, item);
        } else if (action == "Correct") {
            let newItem = operations.shift();

            correct(shoppingList, item, newItem);
        } else if (action == "Rearrange") {
            rearrange(shoppingList, item);
        }
    }
    console.log(shoppingList.join(", "))
};

// solve((["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"]));

solve((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]));
