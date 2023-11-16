function solve(input) {

    //create object with the participants
    let participantsArray = input.shift().split(", ");
    //remove the end of race command
    input.pop();
    //initialize the raceObj
    let raceObj = {};
    //fill the obj with the participants names;
    for (let participant of participantsArray) {
        raceObj[participant] = 0;
    }

    //create the letter and points regexp
    let letterPattern = /[A-Za-z]/g;
    let pointsPattern = /[0-9]/g;

    //loop over the input array
    for (let command of input) {
        //find current name from command
        let name = command.match(letterPattern).join("");
        //find the sum of points
        let pointsArray = command.match(pointsPattern).map(a => a = Number(a));
        let sum = 0;
        for (let point of pointsArray) {
            sum += point
        }
        //if participant isn't on the list
        if (!participantsArray.includes(name)) {
            continue;
        }
        //if participant is on the list
        if (!raceObj.hasOwnProperty(name)) {
            raceObj[name] = sum;
        } else {
            raceObj[name] += sum
        }

    }
    //parse raceObj into an array and sort it by points
    let raceArray = Object.entries(raceObj);
    raceArray = raceArray.sort((a, b) => b[1] - a[1]);

    let placeArray = ['1st', '2nd', '3rd'];
    for (let i = 0; i < 3; i++) {

        let [name] = raceArray[i];
        console.log(`${placeArray[i]} place: ${name}`);
    }
};

solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);

// solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
//     'Mi*&^%$ch123o!#$%#nne787) ',
//     '%$$B(*&&)i89ll)*&) ',
//     'R**(on%^&ald992) ',
//     'T(*^^%immy77) ',
//     'Ma10**$#g0g0g0i0e',
//     'end of race']
// );