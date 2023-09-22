function solve(currentYield) {

    let days = 0;
    let storage = 0

    while (currentYield >= 100) {
        days++;
        storage += currentYield;
        storage -= 26;
        currentYield -= 10;
    }

    if (storage >= 26) {
        storage -= 26;
    }

    console.log(days);
    console.log(storage);
};

solve(111);
solve(450);