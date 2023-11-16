function solve(input) {

    let pattern = />>(?<product>[A-Z][A-Za-z]+)<<(?<price>[0-9]+[.]?\d+)!(?<quantity>\d+)/g;
    let totalSpent = 0;
    let shoppingString = input.join(" ");

    console.log("Bought furniture:");

    let validPurchase = pattern.exec(shoppingString);

    while (validPurchase != null) {

        let price = Number(validPurchase.groups["price"]);
        let quantity = Number(validPurchase.groups["quantity"]);
        let currentPurchase = price * quantity;

        totalSpent += currentPurchase;
        console.log(validPurchase.groups["product"]);

        validPurchase = pattern.exec(shoppingString);
    }

    console.log(`Total money spend: ${totalSpent.toFixed(2)}`);
};

// solve(['>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase']
// );

solve(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
);
