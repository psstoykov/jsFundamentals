function solve(input) {

    let parking = {};

    for (let car of input) {
        [action, number] = car.split(", ")

        if (action == 'IN') {
            parking[number] = 1
        } else if (action == 'OUT') {
            delete parking[number]
        }
    };

    let result = [];

    for (let key of Object.keys(parking)) {
        result.push(key);
    }

    result.sort((a, b) => a.localeCompare(b))

    for (let car of result) {

        console.log(car)
    }
};

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

// solve(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA']);