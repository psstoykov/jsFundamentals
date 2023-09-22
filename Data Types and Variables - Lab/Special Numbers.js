function specialNumbers(n) {

    //print every number 1-n
    for (let num = 1; num <= n; num++) {

        let char = String(num);
        let sum = 0;
        for (let i = 0; i < char.length; i++) {
            let chAsNum = Number(char[i]);
            sum += chAsNum;
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${num} -> True`);
        } else {
            console.log(`${num} -> False`);
        }
    }
    //check if sum of current number digits is 5,7, or 11;
};

specialNumbers(15);
// specialNumbers(20);