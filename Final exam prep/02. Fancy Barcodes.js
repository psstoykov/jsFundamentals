function solve(input) {

    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let pattern = /@[#]+(?<product>[A-Z][A-Za-z\d]{4,}[A-Z])@[#]+/g;
        let digitPattern = /[\d]/g;

        let match = pattern.exec(input[i]);

        if (match == null) {
            console.log("Invalid barcode");
            continue;
        }
        let product = match.groups['product'];
        let digits = product.match(digitPattern);

        if (digits == null) {
            console.log(`Product group: 00`);
        } else {
            console.log(`Product group: ${digits.join("")}`)
        }
    }
};

// solve((["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"]));

solve((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]));