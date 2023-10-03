function solve(arr1, arr2) {

    let arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
        let sum = 0;
        let buff = '';

        if (i % 2 == 0) {
            sum = Number(arr1[i]) + Number(arr2[i]);
            arr3.push(sum);
        } else {
            buff = arr1[i] + arr2[i];
            arr3.push(buff);
        }
    }
    console.log(arr3.join(' - '));
};

solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
solve(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);