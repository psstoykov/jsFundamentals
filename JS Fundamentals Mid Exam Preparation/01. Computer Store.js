function solve(array) {

    let totalPrice = 0;
    let tax = 1.2;
    let isValidPrice = price => price > 0;
    let isValidOrder = total => total > 0;

    let customer;

    for (let el of array) {

        if (el == "special" || el == 'regular') {
            customer = el;
            break;

        } else {
            let currentNum = Number(el);
            if (isValidPrice(currentNum)) {
                totalPrice += currentNum
            } else {
                console.log("Invalid price!");
                continue;
            }
        }
    }
    if (isValidOrder(totalPrice)) {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`)
        let taxes = totalPrice * 0.2
        totalPrice += taxes
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        if (customer == 'special') {
            totalPrice *= 0.9;
            console.log(`Total price: ${totalPrice.toFixed(2)}$`)
        } else {
            console.log(`Total price: ${totalPrice.toFixed(2)}$`);
        }
    } else {
        console.log('Invalid order!')
    }
};

// solve(([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ]));

// solve(([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30', 'regular'
// ]));

solve(([
    'regular'
]));