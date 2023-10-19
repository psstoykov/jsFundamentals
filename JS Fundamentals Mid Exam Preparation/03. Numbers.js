function solve(string) {

    let array = string.split(" ").map(Number).sort((a, b) => b - a);

    let sum = 0;
    let average = 0;
    let count = 0;
    for (let num of array) {
        count++
        sum += num
    }
    average = sum / count;
    let buff = "";
    for (let i = 0; i < 5; i++) {
        if (array[i] > average) {
            buff += array[i] + " ";
        }
    }

    if (buff == "") {
        console.log("No")
    } else {

        console.log(buff)
    }

};

solve('10 20 30 40 50');
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('1');
solve('-1 -2 -3 -4 -5 -6');