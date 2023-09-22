function solve(n1, op, n2) {

    let total = 0;
    if (op == "+") {
        total = n1 + n2;
    } else if (op == "-") {
        total = n1 - n2;
    } else if (op == "/") {
        total = n1 / n2;
    } else if (op == "*") {
        total = n1 * n2
    }
    console.log(total.toFixed(2))
};

solve(5,
    '+',
    10);
solve(25.5,
    '-',
    3);