function solve([input]) {

    let pattern = /(\||#)(?<itemName>[a-zA-Z ]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let totalCalories = 0;
    let match = pattern.exec(input)
    let items = [];

    while (match != null) {

        totalCalories += Number(match.groups['calories']);
        let productString = `Item: ${match.groups['itemName']}, Best before: ${match.groups['expDate']}, Nutrition: ${match.groups['calories']}`;
        items.push(productString)
        match = pattern.exec(input);
    }
    let totalDays = totalCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(totalDays)} days!`)
    console.log(items.join("\n"))
};

// solve([
//     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
// ]
// );

// solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']
// );

solve(['Hello|#Invalid food#19/03/20#450|$5*(@']);