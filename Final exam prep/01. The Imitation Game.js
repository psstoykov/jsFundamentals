function solve(input) {

    let message = input.shift();

    let command = input.shift();

    while (command != "Decode") {

        let tokens = command.split("|");

        let operation = tokens.shift();
        let messageArray = [];

        switch (operation) {
            case "Move":
                let numLetters = Number(tokens);
                messageArray = message.split("");
                let subString = messageArray.splice(0, numLetters);
                message = messageArray.join("") + subString.join("");


                break;
            case "Insert":
                let index = Number(tokens.shift());
                let value = tokens.shift();
                messageArray = message.split("");
                messageArray.splice(index, 0, value);
                message = messageArray.join("")



                break;
            case "ChangeAll":
                let toReplace = tokens.shift();
                let replacement = tokens.shift();
                message = message.split(toReplace).join(replacement);

                break;

        }
        command = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
};

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);