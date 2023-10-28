function solve(input) {

    let catalogue = [];

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        if (tokens.includes("addMovie")) {
            tokens.shift();
            let movie = tokens.join(" ");
            // catalogue.push('name')
            catalogue.push({ name: movie })

        } else if (tokens.includes("directedBy")) {
            let directorIndex = tokens.indexOf('directedBy') ///define the position of move name
            let movie = tokens.splice(0, directorIndex).join(" ");// get the movie name
            tokens.shift();//delete the dierectedBy command
            let directName = tokens.join(" ");

            for (let i = 0; i < catalogue.length; i++) {
                let film = Object.values(catalogue[i])
                if (film.includes(movie)) {
                    catalogue[i].director = directName;
                }
            }
        } else if (tokens.includes('onDate')) {
            let dateIndex = tokens.indexOf('onDate');
            let movie = tokens.splice(0, dateIndex).join(" ");
            tokens.shift();
            let date = tokens.join();

            for (let i = 0; i < catalogue.length; i++) {
                let film = Object.values(catalogue[i])
                if (film.includes(movie)) {
                    catalogue[i].date = date;
                }
            }

        }
    }

    for (let i = 0; i < catalogue.length; i++) {
        let keys = Object.keys(catalogue[i])    // check which movie has all the info included and print it
        if (keys.includes('name') && keys.includes('date') && keys.includes('director')) {
            console.log(JSON.stringify(catalogue[i]));
        }
    }
};

// solve([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);


solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);
