function solve(input) {

    let book = {};

    //cycle the input array for each student
    for (let student of input) {

        //create string array of all grades
        let sum = "";
        let tokens = student.split(' ');

        //extract the student name from array
        let name = tokens.shift();

        //iterate to add all grades of each student
        for (let grade of tokens) {

            sum += `${grade}`;
        }

        //if student already excist, just add the new grades next to the previous ones. still in a string form
        if (book.hasOwnProperty(name)) {
            book[name] += `${sum}`
        } else {
            book[name] = sum;
        }
    };

    let sortedArr = []; //not yet sorted
    for (let entry of Object.entries(book)) {
        sortedArr.push(entry);

        let grades = entry[1].split("");
        let average = 0;
        for (let grade of grades) {
            average += Number(grade);
        }
        average = average / grades.length
        entry[1] = average.toFixed(2);
    }
    //sort the students by name in the array
    sortedArr.sort((a, b) => a[0].localeCompare(b[0]))

    for (let [name, grade] of sortedArr) {
        console.log(`${name}: ${grade}`)
    }
}

// solve(['Lilly 4 6 6 5',
//     'Tim 5 6',
//     'Tammy 2 4 3',
//     'Tim 6 6']);

solve(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);