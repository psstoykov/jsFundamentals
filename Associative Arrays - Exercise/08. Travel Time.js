function solve(inputArray) {

    //orders object
    let orders = {};

    for (let command of inputArray) {
        let [country, town, cost] = command.split(" > ");

        //if country already excist, just push another town
        if (orders.hasOwnProperty(country)) {
            //if current town already excists, check for the price
            if (orders[country].hasOwnProperty(town)) {
                //if cost is lower at the specific town, overwrite it
                if (orders[country][town] >= cost) {
                    orders[country][town] = Number(cost);
                }
            } else {
                orders[country][town] = Number(cost);
            }
        } else {
            orders[country] = {};
            orders[country][town] = Number(cost);
        }
    };

    let resultArray = []
    //the sorting part
    for (let [country, towns] of Object.entries(orders)) {
        resultArray.push([country, Object.entries(towns)]);

    }
    resultArray.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, towns] of resultArray) {

        towns.sort((a, b) => a[1] - b[1]);
        let buff = "";
        for (let town of towns) {
            buff += " " + town.join(" -> ")
        }
        console.log(`${country} ->${buff}`);
    }

};

// solve([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]);

solve([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);