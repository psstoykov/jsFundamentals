function solve(input) {

    //empty catalogue array
    let objectArray = [];

    for (let product of input) {
        let tokens = product.split(" : ")
        let productName = tokens[0];
        let productPrice = Number(tokens[1]);


        let obj = {
            name: productName,
            price: productPrice
        }
        //push the produt objects into catalogue array
        objectArray.push(obj);
    }
    //sort the object array by product name
    objectArray.sort((a, b) => (a.name.localeCompare(b.name)));

    //Create indexing letter
    let index = "";

    //iterate and print all products
    for (let product of objectArray) {
        if (product.name[0] != index) {
            index = product.name[0];
            console.log(index)
        }
        console.log(`  ${product.name}: ${product.price}`)
    }

};

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);
