function solve(a, b) {

    let start = a.charCodeAt(0);
    let finish = b.charCodeAt(0);

    let buff = "";
    if (start <= finish) {

        for (let i = start + 1; i < finish; i++) {
            let char = String.fromCharCode(i);
            buff += char + " ";
        }
    } else {
        for (let i = finish + 1; i < start; i++) {
            let char = String.fromCharCode(i);
            buff += char + " ";
        }
    }
    console.log(buff)
};

solve('a',
    'd');
solve('#',
    ':');
solve('C',
    '#');