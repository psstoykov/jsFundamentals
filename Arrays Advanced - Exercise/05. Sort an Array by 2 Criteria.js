function solve(array) {

    let result = array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(result.join("\n"));
};

solve(['alpha',
    'beta',
    'gamma']);
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);