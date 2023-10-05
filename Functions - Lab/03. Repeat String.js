function solve(string, num) {

    let newString = "";

    for (let i = 1; i <= num; i++) {
        newString += string;
    }
    return newString;
};

solve("abc", 3);
solve("String", 2);