function solve(input) {

    let arena = {};

    for (let gladitor of input) {
        let tokens = gladitor.split(" -> ")

        //if end command is received, brake
        if (tokens.length == 1) {
            let figth = tokens[0].split(" vs ");

            if (figth.length == 1) {
                break;
                //if there is a duel
            } else {
                let [gladiator1, gladiator2] = figth;
                //check if both gladiators excist
                if (arena.hasOwnProperty(gladiator1) && arena.hasOwnProperty(gladiator2)) {
                    //create 2 arrays for each gladiators skills and points
                    let skills1 = Object.keys(arena[gladiator1]);
                    let points1 = Object.values(arena[gladiator1]);
                    let skills2 = Object.keys(arena[gladiator2]);
                    let points2 = Object.values(arena[gladiator2]);

                    //find out if the gladiators have skill in common to figth
                    for (let skill of skills1) {
                        if (skills2.includes(skill)) {
                            let total1 = 0;
                            let total2 = 0;
                            for (let points of points1) {
                                total1 += points
                            }
                            for (let points of points2) {
                                total2 += points
                            }
                            //if common skill/skills excist, remove gladiator with less total points
                            if (total1 > total2) {
                                delete arena[gladiator2];
                            } else if (total2 > total1) {
                                delete arena[gladiator1];
                            }
                        }
                    }
                }
                continue;
            }
        }
        let points = Number(tokens.pop());
        let skill = tokens.pop();
        let name = tokens.pop();

        //if name doesn't excist
        if (!arena.hasOwnProperty(name)) {
            arena[name] = {};
            arena[name][skill] = points;
            //if name already excist
        } else {
            //if skill doesn't excist
            if (!arena[name].hasOwnProperty(skill)) {
                arena[name][skill] = points;
                //if skill already excists
            } else {
                //if current skill is lower than new value, replace it
                if (arena[name][skill] < points) {
                    arena[name][skill] = points;

                }
            }
        }
    };
    //sorting the object
    let arenaArray = [];

    let i = 0;
    for (let gladiator of Object.entries(arena)) {
        //calculate total points of each gladiator
        let gladiatorPoints = 0;

        let pointsArray = Object.values(gladiator[1]);
        for (let value of pointsArray) {
            gladiatorPoints += value;
        }
        let gladiatorName = gladiator[0];
        let skillsArray = gladiator[1]
        // console.log(skillsArray)
        arenaArray[i] = [];
        arenaArray[i].push(gladiatorName);
        arenaArray[i].push(gladiatorPoints);
        arenaArray[i].push(skillsArray);

        i++;
    }
    let sortedArray = arenaArray.sort((a, b) => ((a[1] - b[1] != 0) ? b[1] - a[1] : a[0].localeCompare(b[0])));

    //sorting by skill each gladiator
    for (let gladiator of sortedArray) {

        let skillsArray = Object.entries(gladiator[2]);
        let name = gladiator[0];
        let points = gladiator[1];
        skillsArray = skillsArray.sort((a, b) => ((a[1] - b[1] != 0) ? b[1] - a[1] : a[0].localeCompare(b[0])));

        console.log(`${name}: ${points} skill`);
        for (let [skill, points] of skillsArray) {
            console.log(`- ${skill} <!> ${points}`);
        }
    }
};


solve([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);

// solve([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Peter -> BattleCry -> 200',
//     'Ave Cesar'
// ]);