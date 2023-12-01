function solve(string) {

    //letter before number
    //  - UpperCase = devide number by letter position in alphabet
    //  - LowerCase = multiply number by letter position in alphabet
    //------------------------------------------------------------------
    //letter after number
    //  - UpperCase = subtract its position from resulted number
    //  - LowerCase = add its position to resulted number
    //-------------------------------------------------------------
    //for muplitple strings devided by space/s, sum the result of each string for the total result

    //split string into array of strings
    let array = string.split(" ");
    let total = 0;

    for (let command of array) {
        let sum = 0;
        if (command.length == 0) {//if command is empty space, continue
            continue;
        }
        command = command.split("");

        let first = command.shift();
        let second = command.pop();
        let num = Number(command.join(""));
        //finding the alphabet position of each character
        let firstPosition = (first.toLowerCase()).charCodeAt() - 96;
        let secondPosition = (second.toLowerCase()).charCodeAt() - 96;

        if (first === first.toLowerCase()) {
            sum += num * firstPosition;
        } else {
            sum += num / firstPosition;
        }

        if (second === second.toLowerCase()) {
            sum += secondPosition
        } else {
            sum -= secondPosition;
        }
        total += sum;
    }

    console.log(total.toFixed(2))
};

// solve('A12b   s17G');

// solve('P34562Z q2576f   H456z');

solve('a1A');