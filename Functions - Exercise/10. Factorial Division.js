function solve(a, b) {

    function factorial(num) {
        let result = num;
        for (let i = num - 1; i > 0; i--) {
            result *= i;
        }
        return result;
    };

    let resultA = factorial(a);
    let resultB = factorial(b);
    let result = resultA / resultB;

    console.log(result.toFixed(2))

};

solve(5, 2);
solve(6, 2);