function solve(input) {

    let string = input.shift();

    let command = input.shift();

    while (command != "Done") {

        let tokens = command.split(" ");
        let operation = tokens.shift();
        let newArray = [];
        let stringArray = [];
        switch (operation) {
            case 'TakeOdd':
                stringArray = string.split("");

                for (let i = 1; i < stringArray.length; i += 2) {
                    newArray.push(stringArray[i])
                }
                string = newArray.join("");
                console.log(string)
                break;
            case 'Cut':
                let index = Number(tokens.shift());
                let length = Number(tokens.shift());
                stringArray = string.split("");
                stringArray.splice(index, length);
                string = stringArray.join("")
                console.log(string)
                break;
            case 'Substitute':
                let substring = tokens.shift();
                let replacement = tokens.shift();
                if (string.includes(substring)) {
                    string = string.split(substring).join(replacement);
                    console.log(string)
                } else {
                    console.log("Nothing to replace!")
                }
                break;
        }
        command = input.shift();
    }
    console.log(`Your password is: ${string}`);
};

// solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"]));

solve((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]));