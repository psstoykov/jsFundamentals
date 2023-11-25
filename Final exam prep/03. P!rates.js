function solve(input) {

    let cities = {};

    let command = input.shift();

    while (command != "Sail") {

        let [city, population, gold] = command.split("||");

        population = Number(population);
        gold = Number(gold);

        if (city in cities) {
            cities[city].population += population;
            cities[city].gold += gold;
        } else {
            cities[city] = { population, gold };
        }
        command = input.shift();
    }
    command = input.shift();

    while (command != 'End') {

        let tokens = command.split("=>");
        let operation = tokens.shift();

        if (operation == 'Plunder') {

            let [town, population, gold] = tokens;
            population = Number(population);
            gold = Number(gold);
            cities[town]['population'] -= population;
            cities[town]['gold'] -= gold;

            console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`);
            if (cities[town]['population'] <= 0 || cities[town]['gold'] <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            }

        } else if (operation == 'Prosper') {

            let [town, gold] = tokens;
            gold = Number(gold);
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`)
                command = input.shift();
                continue;
            }
            cities[town].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town]['gold']} gold.`)

        }
        command = input.shift();
    };

    let entries = Object.entries(cities);

    if (entries.length == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!"`);
    } else {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        entries.forEach(([city, info]) => console.log(`${city} -> Population: ${info.population} citizens, Gold: ${info.gold} kg`));
    }
};
// solve((["Tortuga||1||1",
//     "Sail",
//     "Plunder=>Tortuga=>0=>0",
//     "End"]));

// solve((["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"]));

solve((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]));