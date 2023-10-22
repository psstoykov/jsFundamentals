function solve(input) {

    let stock = input.shift().split(' ');

    //////////////////////////
    function include(array, coffee) {
        array.push(coffee);
    }
    ////////////////////////////////////
    function remove(array, firstLast, number) {
        if (firstLast == "first") {
            array.splice(0, number);
        } else if (firstLast == 'last') {
            let last = number;
            array.splice(-number, number)
        }
    }
    ///////////////////////////////////////////////////
    function prefer(array, index1, index2) {
        if (index1 != undefined && index2 != undefined) {
            let temp = array[index1];
            array[index1] = array[index2];
            array[index2] = temp;
        }
    }
    //////////////////////////////////////////////////
    function reverse(array) {
        array.reverse();
    }
    /////////////////////////////////////////////////
    let count = Number(input.shift());

    for (let i = 0; i < count; i++) {
        let tokens = input[i].split(" ");
        let command = tokens.shift();
        if (command == "Include") {
            let coffee = tokens[0];
            include(stock, coffee);
        } else if (command == "Remove") {
            let type = tokens[0];
            let num = Number(tokens[1]);
            remove(stock, type, num);
        } else if (command == "Prefer") {
            let index1 = Number(tokens[0]);
            let index2 = Number(tokens[1]);
            prefer(stock, index1, index2);
        } else if (command == "Reverse") {
            reverse(stock);
        }
    }
    console.log(`Coffees:\n${stock.join(" ")}`)
};

solve((["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"]));

// solve((["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",

//     "5",

//     "Include OrdinaryCoffee",

//     "Remove first 1",

//     "Prefer 0 1",

//     "Prefer 3 1",

//     "Reverse"]));