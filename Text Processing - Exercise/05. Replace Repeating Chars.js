function solve(input) {

    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] == input[i + 1]) {
            continue;
        } else {
            result.push(input[i])
        }
    }
    console.log(result.join(""));
};

solve('aaaaabbbbbcdddeeeedssaa');

solve('qqqwerqwecccwd');