function solve(a, b, c) {

    let sum = (a, b) => a + b;
    let subtract = (c) => sum(a, b) - c;

    console.log(subtract(c))
};

solve(23,
    6,
    10);
solve(1,
    17,
    30);
solve(42,
    58,
    100);

