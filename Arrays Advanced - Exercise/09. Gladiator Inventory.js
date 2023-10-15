function solve(array) {

    //Inventory array
    let inventory = array.shift().split(" ");

    //for of loop over the commands
    for (let commands of array) {
        let operations = commands.split(" ");
        let action = operations[0];

        if (action == 'Buy') {
            let item = operations[1];
            if (!inventory.includes(item)) {
                inventory.push(item)
            }

        } else if (action == 'Trash') {
            let item = operations[1];
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
            }

        } else if (action == 'Repair') {
            let item = operations[1];
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                let toRepair = inventory.splice(index, 1);
                inventory.push(toRepair);
            }
        } else if (action == 'Upgrade') {
            let upgrade = operations[1].split("-");
            let item = upgrade[0];
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                let upgraded = `${item}:${upgrade[1]}`;
                inventory.splice(index + 1, 0, upgraded);
            }

        }
    }
    console.log(inventory.join(" "))
};

solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);

solve(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);