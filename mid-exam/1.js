function solve(input) {

    let numberCities = input.shift();

    numberCities = Number(numberCities);

    let totalProfit = 0;

    let city = 1;
    for (let i = 0; i < input.length; i += 3) {
        let name = input[i];
        let earning = Number(input[i + 1]);
        let expenses = Number(input[[i + 2]])

        if (city % 3 == 0 && city % 5 != 0) {
            expenses *= 1.5;
        } else if (city % 5 == 0) {
            earning *= 0.9;
        }

        earning -= expenses;
        totalProfit += earning;
        console.log(`In ${name} Burger Bus earned ${earning.toFixed(2)} leva.`)
        city++
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
};

solve((["3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"]));

// solve((["5",
//     "Lille",
//     "2226.00",
//     "1200.60",
//     "Rennes",
//     "6320.60",
//     "5460.20",
//     "Reims",
//     "600.20",
//     "452.32",
//     "Bordeaux",
//     "6925.30",
//     "2650.40",
//     "Montpellier",
//     "680.50",
//     "290.20"]));