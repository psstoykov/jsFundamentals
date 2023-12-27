function solve(input) {

    let students = {};

    //parse the input data
    for (let student of input) {
        let tokens = student.split(", ");
        let [name, grade, score] = tokens;
        name = name.split(": ");
        grade = grade.split(": ");
        score = score.split(": ");

        if (Number(score[1]) >= 3) {
            grade[1]++;
            if (!students.hasOwnProperty(grade[1])) {
                students[grade[1]] = {};
                students[grade[1]][name[1]] = Number(score[1]);
            } else {
                students[grade[1]][name[1]] = Number(score[1]);
            }
        }
    };
    for (let [grade, student] of Object.entries(students)) {
        console.log(`${grade} Grade`);
        let sum = 0;
        let count = 0;

        console.log(`List of students: ${Object.keys(student).join(", ")}`);
        for (let [names, scores] of Object.entries(student)) {
            sum += scores;
            count++;
        }
        let result = sum / count;
        console.log(`Average annual score from last year: ${result.toFixed(2)}`);
        console.log("")
    }
};

solve([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);

// solve([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
// ]);