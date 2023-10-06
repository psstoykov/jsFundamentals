function solve(a, b) {

    let start = a.charCodeAt(0);
    let finish = b.charCodeAt(0);

    let minCode = Math.min(start, finish);
    let maxCode = Math.max(start, finish);
    let buff = "";

    for (let i = minCode + 1; i < maxCode; i++) {
        let char = String.fromCharCode(i);
        buff += char + " ";
    }

    console.log(buff)
};

solve('a',
    'd');
solve('#',
    ':');
solve('C',
    '#');