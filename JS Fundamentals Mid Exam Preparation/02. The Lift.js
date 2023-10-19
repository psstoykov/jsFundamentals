function solve(input) {

    let tourists = Number(input.shift());

    let elevator = input.pop().split(" ").map(Number)

    for (let i = 0; i < elevator.length; i++) {
        let available = 0;
        available = 4 - elevator[i];
        let toBoard = tourists >= available ? available : tourists;
        elevator[i] += toBoard;
        tourists -= toBoard;
        if (tourists == 0) {
            if (elevator[elevator.length - 1] == 4) {
                console.log(elevator.join(" "))
                return;
            } else {
                console.log(`The lift has empty spots!`);
                console.log(elevator.join(" "));
                return;
            }
        }
        if (elevator[i] == 4 && elevator[i + 1] == undefined && tourists > 0) {
            console.log(`There isn't enough space! ${tourists} people in a queue!`);
            console.log(elevator.join(" "));
        }
    }
};

solve([
    "15",
    "0 0 0 0 0"
]);
console.log('------------------')
solve([
    "20",
    "0 2 0"
]);

