function solve(num) {

    //convert num to String
    let numToString = String(num);

    //convert string in array
    let numArray = numToString.split("");
    //function find average of current number
    function average(array) {
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            result += Number(array[i]);
        }
        result = result / array.length;
        return result;
    }

    let value = average(numArray); //the initial average value

    //while loop while average <=5
    while (value <= 5) {
        numArray.push(9);
        value = average(numArray);
    }

    // convert array to Num
    let resultNum = Number(numArray.join(""));
    console.log(resultNum)

};

solve(101);
solve(5835);