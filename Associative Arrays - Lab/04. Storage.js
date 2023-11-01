function solve(input) {

    let storage = {};

    for (let product of input) {

        let [key, value] = product.split(" ");

        value = Number(value)

        if (storage.hasOwnProperty(key)) {

            storage[key] += value;
            continue;
        }
        storage[key] = value;
    }

    for (let [key, value] of Object.entries(storage)) {
        console.log(key, "->", value)
    }
};

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);

// solve(['apple 50',
// 'apple 61',
// 'coffee 115',
// 'coffee 40']);
