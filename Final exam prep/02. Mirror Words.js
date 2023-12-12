function solve([input]) {

    let pattern = /(\@|\#)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g;
    let counter = 0;
    let pairArray = [];

    let match = pattern.exec(input);

    while (match != null) {
        counter++;
        let first = match.groups['first'];
        let second = match.groups['second'];
        let secondReversed = second.split("").reverse().join("");
        if (first == secondReversed) {
            pairArray.push(`${first} <=> ${second}`)
        }

        match = pattern.exec(input);
    }

    if (counter == 0) {
        console.log("No word pairs found!")
    } else {
        console.log(`${counter} word pairs found!`)
    }
    if (pairArray.length == 0) {
        console.log(`No mirror words!`)
    } else {
        console.log("The mirror words are:")
        console.log(pairArray.join(", "))
    }
};

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

// solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

// solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);