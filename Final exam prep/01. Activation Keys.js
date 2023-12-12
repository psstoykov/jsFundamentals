function solve(input) {

    let key = input.shift();

    let command = input.shift();

    while (command != "Generate") {

        let tokens = command.split(">>>");

        let operation = tokens.shift();
        let startIndex, endIndex;
        let keyArray = [];
        switch (operation) {
            case 'Contains':
                let substring = tokens.shift();
                if (key.includes(substring)) {
                    console.log(`${key} contains ${substring}`)
                } else {
                    console.log("Substring not found!")
                }
                break;

            case 'Flip':
                let type = tokens.shift();
                startIndex = Number(tokens.shift());
                endIndex = Number(tokens.shift());
                keyArray = key.split("");

                for (let i = startIndex; i < endIndex; i++) {
                    if (type == "Upper") {
                        keyArray[i] = keyArray[i].toUpperCase();
                    } else {
                        keyArray[i] = keyArray[i].toLowerCase();
                    }
                }
                key = keyArray.join("");
                console.log(key)
                break;

            case 'Slice':
                startIndex = Number(tokens.shift());
                endIndex = Number(tokens.shift());
                keyArray = key.split("");
                keyArray.splice(startIndex, endIndex - startIndex);
                key = keyArray.join("");
                console.log(key)
                break;
        }
        command = input.shift();
    }
    console.log(`Your activation key is: ${key}`)
};

// solve((["abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"]));

solve((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]));
