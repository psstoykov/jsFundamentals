function solve(arr) {

    let MaxSequence = [];
    let currentSequence = [];
    let count = 1;
    let maxcount = 1;
    for (i = 0; i < arr.length; i++) {
        if (count === 1) {
            currentSequence.push(arr[i]);
        }
        if (arr[i] === arr[i + 1]) {
            count++;
            currentSequence.push(arr[i]);
            if (count > maxcount) {
                MaxSequence = currentSequence;
                maxcount = count;
            }
        } else {
            currentSequence = [];
            count = 1;
        }
    }
    console.log(MaxSequence.join(" "));
}




solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);