function solve(array) {

    //create variable current biggest = array[0];
    //create a buff = "" variable to collect the result numbers
    //loop over the array
    //extract any number, bigger than or equal the current biggest num

    let biggest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] >= biggest) {
            biggest = array[i];
        } else {
            array.splice(i, 1);
            i--;
        }
    }
    let result = array.join(" ");
    console.log(result)
};

solve([1, 3, 8, 4, 10, 12, 3, 2, 24,]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);