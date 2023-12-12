function solve(input) {

    let trip = input.shift();
    let command = input.shift();

    while (command != "Travel") {
        let tokens = command.split(":");
        let operation = tokens.shift();

        switch (operation) {
            case 'Add Stop':
                let index = Number(tokens.shift());
                let string = tokens.shift();
                if (trip[index] != undefined) {
                    let tripArray = trip.split("");
                    tripArray.splice(index, 0, string);
                    trip = tripArray.join("")
                }
                console.log(trip)
                break;
            case 'Remove Stop':
                let startIndex = Number(tokens.shift());
                let endIndex = Number(tokens.shift());
                if (startIndex >= 0 && endIndex < trip.length) {
                    let range = endIndex - startIndex + 1;
                    let tripArray = trip.split("");
                    tripArray.splice(startIndex, range);
                    trip = tripArray.join("")
                }
                console.log(trip)
                break;
            case 'Switch':
                let oldString = tokens.shift();
                let newString = tokens.shift();
                if (trip.includes(oldString)) {
                    let tripArray = trip.split(oldString)
                    trip = tripArray.join(newString);
                }
                console.log(trip)
                break;
        }
        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${trip}`)
};

// solve(["Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"]);

solve(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]);