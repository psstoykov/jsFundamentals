function solve(input) {

    let n = Number(input.shift());

    let heroes = {};

    for (let i = 0; i < n; i++) {

        let [name, hp, mp] = input.shift().split(" ");
        heroes[name] = {};
        heroes[name]['hp'] = Number(hp);
        heroes[name]['mp'] = Number(mp);
    }

    let command = input.shift();

    while (command != 'End') {

        let tokens = command.split(" - ")
        let operation = tokens.shift();
        let hero = tokens.shift();
        let value = Number(tokens.shift());

        switch (operation) {
            case 'CastSpell':
                let spell = tokens.shift();
                if (value > heroes[hero]['mp']) {
                    console.log(`${hero} does not have enough MP to cast ${spell}!`);
                } else {
                    heroes[hero]['mp'] -= value;
                    console.log(`${hero} has successfully cast ${spell} and now has ${heroes[hero]['mp']} MP!`)
                }
                break;
            case 'TakeDamage':
                let attacker = tokens.shift();
                heroes[hero]['hp'] -= value;
                if (heroes[hero]['hp'] <= 0) {
                    console.log(`${hero} has been killed by ${attacker}!`);
                    delete heroes[hero]
                } else {
                    console.log(`${hero} was hit for ${value} HP by ${attacker} and now has ${heroes[hero]['hp']} HP left!`);
                }

                break;
            case 'Recharge':
                if ((heroes[hero]['mp'] + value) > 200) {
                    value = 200 - heroes[hero]['mp']
                    heroes[hero]['mp'] += value;
                } else {
                    heroes[hero]['mp'] += value;
                }
                console.log(`${hero} recharged for ${value} MP!`);
                break;
            case 'Heal':
                if ((heroes[hero]['hp'] + value) > 100) {
                    value = 100 - heroes[hero]['hp']
                    heroes[hero]['hp'] += value;
                } else {
                    heroes[hero]['hp'] += value;
                }
                console.log(`${hero} healed for ${value} HP!`)
                break;
        }
        command = input.shift();
    }
    for (let [hero, entries] of Object.entries(heroes)) {

        console.log(hero)
        console.log(`  HP: ${entries['hp']}`);
        console.log(`  MP: ${entries['mp']}`);
    }
};

// solve([
//     "2",
//     "Solmyr 85 120",
//     "Kyrre 99 50",
//     "Heal - Solmyr - 10",
//     "Recharge - Solmyr - 50",
//     "TakeDamage - Kyrre - 66 - Orc",
//     "CastSpell - Kyrre - 15 - ViewEarth",
//     "End"
// ]);

solve([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);