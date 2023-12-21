function solve(input) {

    let numbers = [];

    for (let i = 0; i < input.length; i++) {
        let el = input[i]
        if (typeof el == "number") {
            numbers.push(el);
        } else {
            // if not enough numbers
            if (numbers.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }
            let sum = 0;
            switch (el) {
                case "+":
                    sum = numbers.pop() + numbers.pop();
                    numbers.push(sum);
                    break;
                case "-":
                    sum = numbers[numbers.length - 2] - numbers[numbers.length - 1];
                    numbers.pop();
                    numbers.pop();
                    numbers.push(sum);
                    break;
                case "*":
                    sum = numbers.pop() * numbers.pop();
                    numbers.push(sum);
                    break;
                case "/":
                    sum = numbers[numbers.length - 2] / numbers[numbers.length - 1];
                    numbers.pop();
                    numbers.pop();
                    numbers.push(sum);
                    break;
            }
        }
    }
    if (numbers.length > 1) {
        console.log("Error: too many operands!")
    } else {
        console.log(numbers[0])
    }
};

solve([3,
    4,
    '+']);

solve([5,
    3,
    4,
    '*',
    '-']);

solve([7,
    33,
    8,
    '-']);

solve([15,
    '/']);

solve([31,
    2,
    '+',
    11,
    '/']);

solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);