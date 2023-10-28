function solve(input) {

    for (let i = 0; i < input.length; i++) {
        let [name, latitude, longitude] = input[i].split(" | ");

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

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
