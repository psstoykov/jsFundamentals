function solve(input) {

    let neighborhood = input.shift().split("@").map(Number);

    let position = 0;

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command == "Love!") {
            break;
        }
        let jumps = command.split(" ");
        let length = Number(jumps.pop());

        if (position + length >= neighborhood.length) {/// check if cupid can jump or has to go back to index 0
            position = 0;
        } else {
            position += length;
        }
        if (neighborhood[position] == 0) {
            console.log(`Place ${position} already had Valentine's day.`)
            continue;
        } else {
            neighborhood[position] -= 2;
            if (neighborhood[position] == 0) {
                console.log(`Place ${position} has Valentine's day.`);
                continue;
            }
        }
    };
    console.log(`Cupid's last position was ${position}.`)
    let yes = neighborhood.filter(x => x != 0)
    if (yes.length == 0) {
        console.log(`Mission was successful.`)
    } else {
        console.log(`Cupid has failed ${yes.length} places.`)
    }
};
// solve(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]);

solve(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);
