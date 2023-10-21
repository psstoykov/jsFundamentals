function solve(input) {

    input = input.map(Number);

    let days = input.shift();
    let perDay = input.shift();
    let expected = input.shift();
    let total = 0;
    let extraPlunder = perDay * 1.5

    for (let current = 1; current <= days; current++) {

        if (current % 3 == 0 && current % 5 == 0) {
            total += extraPlunder;
            total *= 0.7;
        } else if (current % 3 == 0) {
            total += extraPlunder;
        } else if (current % 5 == 0) {
            total += perDay;
            total *= 0.7
        } else {
            total += perDay;
        }
    }
    if (total >= expected) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else if (expected > total) {
        let percent = (total / expected) * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`)
    }
};

solve((["5",
    "40",
    "100"]));

solve((["10",
    "20",
    "380"]));