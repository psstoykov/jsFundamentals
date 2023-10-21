function solve(input) {

    input = input.map(Number);

    let students = input.shift();
    let totalLectures = input.shift();
    let addBonus = input.shift();


    input.sort((a, b) => a - b);
    let bestStudent = input.pop();

    let totalBonus = (bestStudent / totalLectures) * (5 + addBonus);
    if (input.length == 0) {
        console.log(`Max Bonus: 0.`)
        console.log(`The student has attended 0 lectures.`);
    } else {
        console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`)
        console.log(`The student has attended ${Math.ceil(bestStudent)} lectures.`);
    }
};

solve(['0', '0', '0']);
solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);

// solve([
//     '10', '30', '14', '8',
//     '23', '27', '28', '15',
//     '17', '25', '26', '5',
//     '18'
// ]);