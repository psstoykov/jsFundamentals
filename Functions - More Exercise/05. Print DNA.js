function solve(num) {

    let string = "ATCGTTAGGG";

    let stringArr = string.split("");
    let length = 4;
    let index = 0;
    for (let i = 1; i <= num; i++) {
        if (i % length == 1) {
            console.log(`**${stringArr[index]}${stringArr[index + 1]}**`);
        } else if (i % length == 2) {
            console.log(`*${stringArr[index]}--${stringArr[index + 1]}*`);
        } else if (i % length == 3) {
            console.log(`${stringArr[index]}----${stringArr[index + 1]}`);
        } else {
            console.log(`*${stringArr[index]}--${stringArr[index + 1]}*`);

        }
        index += 2;
        if (index == stringArr.length) {
            index = 0;
        }
    }
};

// solve(4);
solve(10);


