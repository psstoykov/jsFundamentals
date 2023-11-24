function solve(input) {

    let n = Number(input.shift());

    let plants = {};

    for (let i = 0; i < n; i++) {
        let [name, rarity] = input.shift().split("<->");
        plants[name] = {};
        plants[name]['rarity'] = Number(rarity);
        plants[name]['rating'] = [];
    }

    let command = input.shift();

    while (command != "Exhibition") {

        let tokens = command.split(": ")
        let operation = tokens.shift();
        tokens = tokens.shift().split(" - ")
        let name = tokens[0];
        let num = Number(tokens[1]);

        switch (operation) {
            case "Rate":
                if (!plants.hasOwnProperty(name)) {
                    console.log("error");
                    break;
                }
                plants[name]['rating'].push(num)
                break;
            case "Update":
                if (!plants.hasOwnProperty(name)) {
                    console.log("error");
                    break;
                }
                plants[name]['rarity'] = num;
                break;
            case "Reset":
                if (!plants.hasOwnProperty(name)) {
                    console.log("error");
                    break;
                }
                plants[name]['rating'] = [];
                break;
        }

        command = input.shift();
    }

    console.log(`Plants for the exhibition:`)
    for (let [name, entriesObj] of Object.entries(plants)) {
        let [rarity, ratingArray] = Object.values(entriesObj);

        let averageRating = 0;
        if (ratingArray.length == 0) {
            console.log(`- ${name}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`)
            continue;
        }

        for (let value of ratingArray) {
            averageRating += value;
        }
        averageRating = averageRating / ratingArray.length;
        console.log(`- ${name}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`)
    }
};

solve((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]));

// solve((["2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"]));