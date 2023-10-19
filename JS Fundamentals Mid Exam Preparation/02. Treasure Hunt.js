function solve(array) {
    let chest = array.shift().split("|");

    //---------------SUPPORT FUNCTIONS-----------------------
    function Loot(chest, loot) {
        for (let i = 0; i < loot.length; i++) {
            if (chest.includes(loot[i])) {
                continue;
            } else {
                chest.unshift(loot[i])
            }
        }
    }
    //---------------------------------------------------------
    function Drop(chest, index) {
        let loot = chest.splice(index, 1);
        let result = loot[0];
        chest.push(result);
    }
    //---------------------------------------------------------
    function Steal(chest, count) {
        if (count > chest.length) {
            count = chest.length
        }
        let stolen = chest.splice(chest.length - count, count);
        console.log(stolen.join(", "))
    }
    //-----------------------------------------------------------

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ");
        let action = command.shift();

        if (action == 'Yohoho!') {
            break;
        } else if (action == 'Loot') {
            Loot(chest, command)
        } else if (action == 'Drop') {
            let index = Number(command[0]);
            if (index < 0 || index >= chest.length) {
                continue;
            } else {
                Drop(chest, index)
            }
        } else if (action == 'Steal') {
            let count = Number(command[0]);
            Steal(chest, count);
        }
    }
    let sum = 0;

    for (let i = 0; i < chest.length; i++) {
        sum += chest[i].length;
    }
    let average = (sum / chest.length).toFixed(2);
    if (chest.length == 0) {
        console.log(`Failed treasure hunt.`)
    } else {
        console.log(`Average treasure gain: ${average} pirate credits.`)
    }

};

solve((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]));
console.log('----------------------------------')
solve((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]));