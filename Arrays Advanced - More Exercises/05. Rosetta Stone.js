function solve(input) {


    let n = Number(input.shift())
    let template = [];

    for (let i = 0; i < n; i++) {
        template[i] = input.shift().split(" ").map(Number);
    }

    let matrix = [];
    for (let i = 0; i < input.length; i++) {
        matrix[i] = input[i].split(" ").map(Number);
    }
    let templateArray = [];
    if (n < matrix.length || template[0].length < matrix[0].length) {
        let rowScale = Math.ceil(matrix.length / n);
        let colScale = Math.ceil(matrix[0].length / template[0].length);


        for (let i = 0; i < rowScale * n; i++) {
            templateArray[i] = [];
        }

        for (let row = 0; row < rowScale * n; row += n) {
            for (let col = 0; col < colScale * template[0].length; col += template[0].length) {

                for (let tempRow = 0; tempRow < n; tempRow++) {
                    for (let tempCol = 0; tempCol < template[0].length; tempCol++) {
                        let value = template[tempRow][tempCol];
                        templateArray[row + tempRow].push(value);
                    }
                }
            }
        }

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[0].length; col++) {
                matrix[row][col] += templateArray[row][col];
                if (matrix[row][col] % 27 == 0) {
                    matrix[row][col] = " ";
                } else {
                    matrix[row][col] = matrix[row][col] % 27 + 64   //convert to ascii code values
                    matrix[row][col] = String.fromCharCode(matrix[row][col]);
                }
            }
        }
    } else {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[0].length; col++) {
                matrix[row][col] += template[row][col];
                if (matrix[row][col] % 27 == 0) {
                    matrix[row][col] = " ";
                } else {
                    matrix[row][col] = matrix[row][col] % 27 + 64   //convert to ascii code values
                    matrix[row][col] = String.fromCharCode(matrix[row][col]);
                }
            }
        }
    }

    let buffer = "";
    for (let line of matrix) {
        buffer += line.join("");
    }
    console.log(buffer)

};

solve(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14']);

solve(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']);

solve(['2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22']);