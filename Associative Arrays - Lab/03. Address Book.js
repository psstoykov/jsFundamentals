function solve(input) {

    let addressBook = {};

    for (let contact of input) {
        [name, address] = contact.split(":")

        addressBook[name] = address;

    }

    let sortedArr = [];

    for (let entry of Object.entries(addressBook)) {
        sortedArr.push(entry);
    }
    sortedArr = sortedArr.sort((a, b) => a[0].localeCompare(b[0]));

    let output = {};

    for (let [name, address] of sortedArr) {

        output[name] = address;
    }

    for (let [key, value] of Object.entries(output)) {
        console.log(key, "->", value)
    }
};

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);

// solve(['Bob:Huxley Rd',
//     'John:Milwaukee Crossing',
//     'Peter:Fordem Ave',
//     'Bob:Redwing Ave',
//     'George:Mesta Crossing',
//     'Ted:Gateway Way',
//     'Bill:Gateway Way',
//     'John:Grover Rd',
//     'Peter:Huxley Rd',
//     'Jeff:Gateway Way',
//     'Jeff:Huxley Rd']);