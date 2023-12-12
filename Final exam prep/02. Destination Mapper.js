function solve(input) {

    let pattern = /(\=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g;
    let travelPoints = 0;
    let destinationArray = [];

    let destination = pattern.exec(input);

    while (destination != null) {

        destinationArray.push(destination.groups["name"])
        travelPoints += Number(destination.groups['name'].length);
        destination = pattern.exec(input);
    }
    console.log(`Destinations: ${destinationArray.join(", ")}`)
    console.log(`Travel Points: ${travelPoints}`)
};

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

solve("ThisIs some InvalidInput");