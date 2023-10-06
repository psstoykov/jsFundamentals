function solve(arr) {

    for (let i = 0; i < arr.length; i++) {
        let forward = "";
        let backward = "";

        let numAsString = String(arr[i]);

        for (let f = 0; f < numAsString.length; f++) {
            forward += numAsString[f]
        }
        for (let b = numAsString.length - 1; b >= 0; b--) {
            backward += numAsString[b]
        }
        (forward == backward) ? console.log(true) : console.log(false)
    }
}


solve([123, 323, 421, 121]);
solve([32, 2, 232, 1010]);