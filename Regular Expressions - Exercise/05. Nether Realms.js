function solve(input) {

    let damagePattern = /[+\-]*[\d]+[.]?[\d]*/g;
    let healthPattern = /[^0-9*\/+\-?.]+/g;
    let operatorsPattern = /[*\/]/g;
    let finalArray = [];

    input = input.split(",");

    input = input.map(a => a.trim());
    // console.log(input)

    for (let demon of input) {
        let demons = {};
        let namePattern = /^[^\s]+$/g;
        if (!namePattern.test(demon)) {
            continue;
        }

        demon = demon.replace(/[ ]/g, "");
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
        finalArray.push(demons);
    }
    finalArray = finalArray.sort((a, b) => a.name.localeCompare(b.name));
    // console.log(finalArray)
    for (let { name, health, damage } of finalArray) {
        console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`)
    }
};

solve(",M3ph1st0**,, Azazel,, ,");