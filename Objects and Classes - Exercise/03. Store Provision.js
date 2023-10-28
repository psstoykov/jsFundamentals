function solve(inventory, ordered) {

    let stock = {};

    for (let i = 0; i < inventory.length; i += 2) {
        let product = inventory[i];
        let quantiy = Number(inventory[i + 1]);
        stock[product] = quantiy;
    }
    for (let i = 0; i < ordered.length; i += 2) {
        let newOrder = ordered[i];
        let quantiy = Number(ordered[i + 1]);
        if (stock[`${newOrder}`]) {
            stock[`${newOrder}`] += quantiy;
        } else {
            stock[`${newOrder}`] = quantiy;
        }
    }

    for (let [key, value] of Object.entries(stock)) {

        console.log(`${key} -> ${value}`);
    }
};

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]
);

// solve([
//     'Salt', '2', 'Fanta', '4', 'Apple', '14',
//     'Water', '4', 'Juice', '5'
// ],
//     [
//         'Sugar', '44', 'Oil', '12', 'Apple', '7',
//         'Tomatoes', '7', 'Bananas', '30'
//     ]
// );