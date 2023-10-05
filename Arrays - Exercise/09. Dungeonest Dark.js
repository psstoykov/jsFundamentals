function solve(arr) {

    let string = arr[0];
    let floor = string.split("|")
    let health = 100;
    let coins = 0;
    let counter = 0;

    for (let i = 0; i < floor.length; i++) {
        let room = floor[i].split(" ");
        counter++;

        let item = room[0];
        let num = Number(room[1]);
        if (item == "potion") {
            let healHp = (health + num > 100) ? 100 - health : num;
            health += healHp;
            console.log(`You healed for ${healHp} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (item == "chest") {
            coins += num;
            console.log(`You found ${num} coins.`)
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${item}.`)
            } else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${counter}`)
                break;
            }
        }
    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
};

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);