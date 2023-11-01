function solve(input) {

    let planner = {};

    for (let appointment of input) {

        [day, name] = appointment.split(" ");

        if (planner.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        }
        planner[day] = name;
        console.log(`Scheduled for ${day}`);

    }

    for (let [day, name] of Object.entries(planner)) {
        console.log(day, "->", name)
    }

};

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);

// solve(['Friday Bob',
//     'Saturday Ted',
//     'Monday Bill',
//     'Monday John',
//     'Wednesday George']);
