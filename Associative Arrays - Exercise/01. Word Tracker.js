function solve(input) {

    let tokensArr = input.shift().split(" ");

    let tracker = {};

    for (let word of tokensArr) {

        tracker[word] = 0;
    }

    for (let word of input) {
        if (tracker.hasOwnProperty(word)) {
            tracker[word] += 1
        }
    }

    let result = [];
    for (let entry of Object.entries(tracker)) {
        result.push(entry);
    }

    result.sort((a, b) => b[1] - a[1]);

    for (let [key, value] of result) {
        console.log(`${key} - ${value}`)
    }
};

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);

// solve([
//     'is the',
//     'first', 'sentence', 'Here', 'is',
//     'another', 'the', 'And', 'finally', 'the',
//     'the', 'sentence']);