function solve(input) {


    let namePattern = /[^, ]+/g;
    let damagePattern = /[+-]*[\d]+[.]?[\d]*[+-]*/g;
    let healthPattern = /[^0-9*+-?. ]*/g;
    let operatorsPattern = /[*\/]/g;
    let demons = {};
    let finalArray = [];

    namesArray = input.match(namePattern);

    for (let demon of namesArray) {


        demons['name'] = demon;

        let demonHealth = 0;
        let demonDamage = 0;

        let healthLetters = demon.match(healthPattern);
        let damageArray = demon.match(damagePattern);

        if (healthLetters == null) {
            demonHealth = 0;
        } else {

            healthLetters = healthLetters.join("");
            let code = 0;
            for (let char of healthLetters) {
                code = char.charCodeAt();
                demonHealth += code;
            }
            demons['health'] = demonHealth;
        }
        if (damageArray == null) {
            demonDamage = 0;
        } else {
            for (let damage of damageArray) {
                demonDamage += Number(damage)
            }
            let operatorArray = demon.match(operatorsPattern);

            if (operatorArray != null) {
                for (let operator of operatorArray) {
                    if (operator == "*") {
                        demonDamage *= 2;
                    } else if (operator == "/") {
                        demonDamage /= 2;
                    }
                }
            }
        }
        demons["damage"] = demonDamage;
        finalArray.push(Object.entries(demons));
    }
    finalArray = finalArray.sort((a, b) => b[1][1] - a[1][1]);

    for (let [name, health, damage] of finalArray) {
        console.log(`${name[1]} - ${health[1]} health, ${damage[1].toFixed(2)} damage`)
    }

};

solve("M3ph-0.5s-0.5t0.0**");

solve("M3ph1st0**, Azazel");