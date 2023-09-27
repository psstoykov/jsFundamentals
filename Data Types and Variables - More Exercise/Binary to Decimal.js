function solve(binary) {

    // let decimal = parseInt(binary, 2);
    let decimal = 0;
    let l = binary.length

    for (let i = l - 1; i >= 0; i--) {
        if (binary[i] == '1') {
            decimal += Math.pow(2, l - 1 - i) //(number, power)
            // number − It is a number for which users want to calculate the power.In our case, it is fixed which is 2.

            // power − It is the power of the first parameter.We will pass different values using for loop to get different powers of 2.
            //whenever we have a '1' we increase decimal += 2**binary[i]
        }
    }
    console.log(decimal)
};

// solve('00001001');
solve('11110000');