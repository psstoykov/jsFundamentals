function solve(product, quantity) {


    let orders = {
        "coffee": 1.50 * quantity,
        "water": 1.00 * quantity,
        "coke": 1.40 * quantity,
        "snacks": 2.00 * quantity
    }

    let result = orders[product];
    console.log(result.toFixed(2))
};

solve("water", 5);
solve("coffee", 2);