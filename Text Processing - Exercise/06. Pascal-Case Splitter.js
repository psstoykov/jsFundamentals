function solve(input) {

    let result = "";
    result += input[0];

    for (let i = 1; i < input.length; i++) {
        if (input[i] != input[i].toLowerCase()) {
            result += `, ${input[i]}`

        } else {
            result += input[i];
        }
    }
    console.log(result)
};

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');

solve('HoldTheDoor');

solve('ThisIsSoAnnoyingToDo');