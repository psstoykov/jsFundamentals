function solve(input) {

    let orderPattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*?<(?<product>[\w]+)>[^|$%.]*?\|(?<counter>[\d]+)\|[^|$%.]*?(?<price>[\d]+[.]?[\d]+)[$]/g;

    let inputString = input.join("");
    let totalIncome = 0;

    let match = orderPattern.exec(inputString);

    while (match != null) {

        let price = Number(match.groups["price"]);
        let counter = Number(match.groups["counter"]);
        totalIncome += price * counter;

        console.log(`${match.groups["name"]}: ${match.groups["product"]} - ${(price * counter).toFixed(2)}`);
        match = orderPattern.exec(inputString);
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`)

};

solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);

// solve(['%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift']
// );