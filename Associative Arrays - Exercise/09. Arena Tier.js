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
                    //create 2 arrays with each gladiators skills and points
                    let skills1 = Object.keys(arena[gladiator1]);
                    let skills2 = Object.keys(arena[gladiator2]);
                    let points1 = Object.values(arena[gladiator1]);
                    let points2 = Object.values(arena[gladiator2]);
                    console.log(points1, points2)
                    //find out if the gladiators have skill in common to figth


                    //if common skill/skills excist, remove gladiator with less total points

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
    // console.log(arena)
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