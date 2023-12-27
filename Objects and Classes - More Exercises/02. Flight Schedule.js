function solve([flights, changes, [status]]) {

    let object = {};

    for (let tokens of flights) {
        let [id, destination] = tokens.split(" ");
        object[id] = {};
        object[id]['Destination'] = destination;
        object[id]['Status'] = "Ready to fly";

    };
    for (let tokens of changes) {
        let [id, status] = tokens.split(" ");
        if (object.hasOwnProperty(id)) {
            object[id]['Status'] = status;
        }
    }

    for (let [id, stats] of Object.entries(object)) {
        switch (status) {
            case "Cancelled":
                if (stats["Status"] == status) {
                    console.log(stats)
                }
                break;
            case "Ready to fly":
                if (stats["Status"] == status) {
                    console.log(stats)
                }
                break;
        }
    }
};

solve([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]);

// solve([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK330 Cancelled'],
// ['Ready to fly']
// ]);