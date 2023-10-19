function solve(array) {

    let totalStudents = Number(array.pop());

    let a = Number(array.pop());
    let b = Number(array.pop());
    let c = Number(array.pop());

    let sum = 0;
    let hrsNeeded = 0;
    for (let hour = 1; hour < totalStudents; hour++) {
        hrsNeeded = hour;
        if (hour % 4 == 0) {
            continue;
        } else {
            sum += (a + b + c);
        }

        if (sum >= totalStudents) {
            break;
        }
    }
    console.log(`Time needed: ${hrsNeeded}h.`)
};

solve(['5', '6', '4', '20']);
solve(['1', '2', '3', '45']);
solve(['3', '2', '5', '40']);