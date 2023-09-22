function solve(lost, helmet, sword, shield, armor) {

    let trashHelmet = 0;
    let trashSword = 0;
    let trashShield = 0;
    let trashArmor = 0;

    for (let days = 1; days <= lost; days++) {
        if (days % 2 === 0) {
            trashHelmet++;
        }
        if (days % 3 === 0) {
            trashSword++;
        }
        if (days % 2 === 0 && days % 3 === 0) {
            trashShield++;
            if (trashShield % 2 === 0) {
                trashArmor++;
            }
        }
    }
    let total = trashHelmet * helmet + trashSword * sword + trashShield * shield + trashArmor * armor
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);

};

// solve(7,
//     2,
//     3,
//     4,
//     5);
solve(23,
    12.50,
    21.50,
    40,
    200);