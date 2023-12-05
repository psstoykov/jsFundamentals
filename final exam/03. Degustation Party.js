function solve(input) {

    let guests = {};
    let disliked = 0;

    let command = input.shift();

    while (command != "Stop") {

        let tokens = command.split("-");
        let action = tokens.shift();
        let name = tokens.shift();
        let meal = tokens.shift();

        if (action == "Like") {
            if (name in guests) {
                if (!guests[name]['meal'].includes(meal)) {
                    guests[name]['meal'].push(meal)
                }
            } else {
                guests[name] = {};
                guests[name]['meal'] = [];
                guests[name]['meal'].push(meal);
            }

        } else if (action == "Dislike") {
            if (!guests.hasOwnProperty(name)) {
                console.log(`${name} is not at the party.`);
                command = input.shift();
                continue;
            }
            if (guests[name]['meal'].includes(meal)) {

                disliked++;
                let index = guests[name]['meal'].indexOf(meal);
                guests[name]['meal'].splice(index, 1);
                console.log(`${name} doesn't like the ${meal}.`)
            } else {
                console.log(`${name} doesn't have the ${meal} in his/her collection.`)
            }

        }

        command = input.shift();
    }
    let entries = Object.entries(guests);

    for (let [guest, meals] of entries) {
        let values = Object.values(meals);
        console.log(`${guest}: ${values[0].join(", ")}`)
    }
    console.log(`Unliked meals: ${disliked}`)
};

solve((["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"]));

// solve((["Like-Krisi-shrimps",

//     "Dislike-Vili-carp",

//     "Dislike-Krisi-salad",

//     "Stop"]));

// solve((["Like-Katy-fish",

//     "Dislike-Katy-fish",

//     "Stop"]));