function solve(array) {

    let sequence = array.shift().split(" ");// the sequence of numbers
    let moves = 0

    for (let i = 0; i < array.length; i++) {
        moves++;
        let length = sequence.length; //length of sequence at each iteration
        let command = array[i].split(" ");
        if (command == 'end') {
            console.log(`Sorry you lose :(`)
            console.log(sequence.join(" "))
            break;
        }
        let index1 = Number(command[0]);
        let index2 = Number(command[1]);

        if (index1 >= 0 && index1 < length & index2 >= 0 && index2 < length) { //check if indexes are valid

            if (sequence[index1] == sequence[index2] && index1 != index2) { //check if indexes are equal
                console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`)
                if (index1 < index2) { ///splice logic a bit funky, needs reworking
                    sequence.splice(index1, 1);
                    sequence.splice(index2 - 1, 1);
                } else {
                    sequence.splice(index2, 1);
                    sequence.splice(index1 - 1, 1);
                }
            } else if (sequence[index1] != sequence[index2]) {
                console.log(`Try again!`);
            } else {
                sequence.splice(Math.floor(sequence.length / 2), 0, `-${moves}a`);
                sequence.splice(Math.floor(sequence.length / 2), 0, `-${moves}a`);
                console.log(`Invalid input! Adding additional elements to the board`)
            }

        } else {
            sequence.splice(Math.floor(sequence.length / 2), 0, `-${moves}a`);
            sequence.splice(Math.floor(sequence.length / 2), 0, `-${moves}a`);
            console.log(`Invalid input! Adding additional elements to the board`)
        }
        if (sequence.length == 0) {
            console.log(`You have won in ${moves} turns!`)
            return;
        }
    }
};

// solve(["0 0",
//     "0 0",
//     'end']);

// solve([
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
// ]);

// solve([
//     "a 2 4 a 2 4",
//     "0 3",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ]);

solve([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);