function solve(array) {

    //function to calculate points
    let points = (x1, x2, y1, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];
    let zero = 0;

    let first = points(x1, 0, y1, 0);
    let second = points(0, x2, 0, y2);
    let third = points(x1, x2, y1, y2);

    if (Math.trunc(first) != first) {
        console.log(`{${x1}, ${y1}} to {${zero}, ${zero}} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${zero}, ${zero}} is valid`);
    }
    if (Math.trunc(second) != second) {
        console.log(`{${x2}, ${y2}} to {${zero}, ${zero}} is invalid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${zero}, ${zero}} is valid`);
    }
    if (Math.trunc(third) != third) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }

};

// solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);