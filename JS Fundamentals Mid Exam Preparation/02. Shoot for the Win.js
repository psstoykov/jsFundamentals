function solve(array) {

    let targets = array.shift().split(" ").map(Number);
    let targetsShot = 0;

    for (let i = 0; i < array.length; i++) {

        let command = array[i];

        if (command == "End") { ///check if "End"
            console.log(`Shot targets: ${targetsShot} -> ${targets.join(" ")}`);
        }

        let index = Number(array[i]); ///reading the index input

        if (index >= 0 && index < targets.length) { //check if index is valid and make operations in the logic construction;
            targetsShot++
            let target = targets[index];
            targets[index] = -1;

            for (let j = 0; j < targets.length; j++) {
                if (targets[j] != -1 && targets[j] > target) {
                    targets[j] -= target;
                } else if (targets[j] != -1 && targets[j] <= target) {
                    targets[j] += target;
                }
            }

        }

    }
}



// solve((["24 50 36 70",
//     "0",
//     "4",
//     "3",
//     "1",
//     "End"]));

solve((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]));