function solve(input) {

    let heroes = [];

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" / ");
        let heroName = tokens.shift();
        let heroLevel = Number(tokens.shift());
        let items = tokens.join("")

        if (items.length > 0) {

            heroes.push({
                Hero: heroName,
                level: heroLevel,
                items: items
            });

        } else {

            heroes.push({
                Hero: heroName,
                level: heroLevel,
            });
        };

    };
    //create the new sorted array by hero level
    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

    for (let i = 0; i < sortedHeroes.length; i++) {
        for (let [key, value] of Object.entries(sortedHeroes[i])) {
            if (key == 'Hero') {
                console.log(`Hero: ${value}`)
            } else if (key == 'level') {
                console.log(`level => ${value}`)
            } else if (key == 'items') {
                console.log(`items => ${value}`)

            }
        }
    }
};

// solve([
//     'Petar / 1',
//     'Nikolay / 5'
// ]);

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
    'Petar / 3 / destroyer',
]);

// solve([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
// ]);
