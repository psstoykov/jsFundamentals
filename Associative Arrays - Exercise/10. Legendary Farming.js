function solve(input) {

    input = input.split(" ");

    let key = {
        "shards": 0,
        "fragments": 0,
        "motes": 0
    };
    let junk = {};


    for (let i = 0; i < input.length; i += 2) {
        let amount = Number(input[i]);
        let material = (input[i + 1]).toLowerCase();

        if (material == 'shards' || material == 'fragments' || material == 'motes') {

            key[material] += amount;

            if (key[material] >= 250) {
                key[material] -= 250;
                switch (material) {
                    case 'shards':
                        console.log(`Shadowmourne obtained!`);
                        break;
                    case 'fragments':
                        console.log(`Valanyr obtained!`);
                        break;
                    case 'motes':
                        console.log(`Dragonwrath obtained!`);
                        break;
                }
                break;
            }
        } else {
            if (material in junk) {
                junk[material] += amount;
            } else {
                junk[material] = amount;
            }
        }
    }
    let keyEntries = Object.entries(key);
    let junkEntries = Object.entries(junk);

    let sortedKeys = keyEntries.sort((a, b) => a[1] - b[1] != 0 ? b[1] - a[1] : a[0].localeCompare(b[0]));
    let sortedJunk = junkEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for ([material, amount] of sortedKeys) {
        console.log(`${material}: ${amount}`);
    }
    for ([material, amount] of sortedJunk) {
        console.log(`${material}: ${amount}`);
    }
};

// solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');

solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');