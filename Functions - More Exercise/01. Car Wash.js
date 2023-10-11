function solve(array) {

    let score = 0;

    function soap() {
        score += 10
    }
    function water(value) {
        score *= 1.2;
    }
    function vacuum(value) {
        score *= 1.25;
    }
    function mud(value) {
        score *= 0.9;
    }

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        switch (command) {
            case "soap": soap(); break;
            case "water": water(score); break;
            case "vacuum cleaner": vacuum(score); break;
            case "mud": mud(score); break;
        }
    }
    console.log(`The car is ${score.toFixed(2)}% clean.`)
};

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',
    'water']);
solve(["soap", "water", "mud", "mud", "water", "mud",
    "vacuum cleaner"]);