function solve(input) {

    let objectArray = [];
    let dictionaryArray = [];
    //parse JSON string to object array
    for (let i = 0; i < input.length; i++) {
        objectArray.push(JSON.parse(input[i]))
    }
    //fill the dictionary with the words from the object array, for of loop
    for (let i = 0; i < objectArray.length; i++) {
        let currentObject = objectArray[i];

        let entries = Object.entries(currentObject)

        let [key, value] = entries[0];////////WHYYYYYYYYYYYYYYYYYYYYYYYYYYY

        //check if word already excist in dictionary
        let included = false;
        for (let j = 0; j < dictionaryArray.length; j++) {
            if (dictionaryArray[j].term == key) {
                dictionaryArray[j].description = value;
                included = true;
                break;
            }
        }
        //if word doesn't excist yet, add it as a new object in dictionary
        if (!included) {
            dictionaryArray.push({
                term: key,
                description: value
            })
        }
    }
    //sort the dictionary by alphabet
    dictionaryArray.sort((a, b) => a.term.localeCompare(b.term));

    //printing the dictionary
    for (let i = 0; i < dictionaryArray.length; i++) {
        [key, value] = Object.entries(dictionaryArray[i])
        console.log(`Term: ${key[1]} => Definition: ${value[1]}`)
    }

}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds(coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Boiler":"A true boiler."}'
]);

