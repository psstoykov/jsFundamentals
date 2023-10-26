function solve(input) {

    // class Town {
    //     constructor(town, latitude, longitude) {
    //         this.town = town;
    //         this.latitude = latitude;
    //         this.longitude = longitude;
    //     }
    // }

    for (let i = 0; i < input.length; i++) {
        let townArray = input[i].split(" | ");
        let name = townArray.shift();
        let latitude = Number(townArray.shift()).toFixed(2);
        let longitude = Number(townArray.shift()).toFixed(2);

        let townObject = {};
        townObject.town = name;
        townObject.latitude = latitude;
        townObject.longitude = longitude;

        console.log(townObject)
    }
};

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);

// solve(['Plovdiv | 136.45 | 812.575']);
