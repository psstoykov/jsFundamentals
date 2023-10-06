function solve(n) {

    let numAsString = String(n);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let num = Number(numAsString[i]);

        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    };

    return ` Odd sum = ${oddSum}, Even sum = ${evenSum}`;
};

solve(1000435);
solve(3495892137259234);

