function solve(num1, num2) {

    let sum = num1 * num2;
    let array =
        [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]; //hard coded
    let resultArray = []

    //letters are the 4 corner indexes
    let a = 0;
    let b = num1;
    let c = num1;
    let d = 0;

    let digit = 1;

    resultArray.splice((0, 0), 0, 1);
    resultArray.splice((0, 1), 0, 2);
    resultArray.splice((0, 2), 0, 3);
    resultArray.splice((1, 2), 0, 4);
    resultArray.splice((2, 2), 0, 5);
    resultArray.splice((2, 1), 0, 6);
    resultArray.splice((2, 0), 0, 7);
    resultArray.splice((1, 0), 0, 8);
    resultArray.splice((1, 1), 0, 9);

    let buff = '';



    console.log(resultArray)

}

solve(3, 3);
// solve(5, 5);



// [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]