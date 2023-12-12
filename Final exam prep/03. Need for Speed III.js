function solve(input) {

    let n = Number(input.shift());
    let cars = {};


    for (let i = 0; i < n; i++) {
        let [model, milage, fuel] = input.shift().split("|");
        cars[model] = {};
        cars[model]['milage'] = Number(milage);
        cars[model]['fuel'] = Number(fuel);
    }

    let command = input.shift();

    while (command != "Stop") {
        let tokens = command.split(" : ")
        let operation = tokens.shift();
        let car, milage, fuel, distance;
        switch (operation) {
            case 'Drive':
                car = tokens.shift();
                distance = Number(tokens.shift());
                fuel = Number(tokens.shift());
                if (cars[car]['fuel'] < fuel) {
                    console.log("Not enough fuel to make that ride")
                } else {
                    cars[car]['milage'] += distance;
                    cars[car]['fuel'] -= fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
                }
                if (cars[car]['milage'] >= 100000) {
                    delete cars[car];
                    console.log(`Time to sell the ${car}!`)
                }
                break;
            case 'Refuel':
                car = tokens.shift();
                fuel = Number(tokens.shift());
                if (cars[car]['fuel'] + fuel > 75) {
                    fuel = 75 - cars[car]['fuel']
                    cars[car]['fuel'] = 75;
                } else {
                    cars[car]['fuel'] += fuel;
                }
                console.log(`${car} refueled with ${fuel} liters`)
                break;
            case 'Revert':
                car = tokens.shift();
                milage = Number(tokens.shift());
                cars[car]['milage'] -= milage;
                if (cars[car]['milage'] < 10000) {
                    cars[car]['milage'] = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${milage} kilometers`)
                }
                break;
        }
        command = input.shift();
    }
    for (let [car, data] of Object.entries(cars)) {
        console.log(`${car} -> Mileage: ${data['milage']} kms, Fuel in the tank: ${data['fuel']} lt.`)
    }
};

// solve([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);