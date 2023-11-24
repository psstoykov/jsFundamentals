function solve(input) {

    let message = input.shift();

    let command = input.shift();

    while (command != "Reveal") {

        let messageArray = []
        let tokens = command.split(":|:");
        let operation = tokens.shift();
        switch (operation) {
            case 'InsertSpace':
                let index = Number(tokens.shift());
                messageArray = message.split("");
                messageArray.splice(index, 0, " ");
                message = messageArray.join("");
                console.log(message)
                break;
            case 'Reverse':
                let substring = tokens.shift();
                if (message.includes(substring)) {
                    messageArray = message.split(substring);
                    substring = substring.split("").reverse().join("")
                    message = messageArray.join("") + substring;
                    console.log(message)
                } else {
                    console.log("error");
                }
                break;
            case 'ChangeAll':
                let subStr = tokens.shift();
                let replacement = tokens.shift();
                messageArray = message.split(subStr);
                message = messageArray.join(replacement)
                console.log(message)
                break;
        }

        command = input.shift();
    }
    console.log(`You have a new text message: ${message}`)
};

// solve([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);