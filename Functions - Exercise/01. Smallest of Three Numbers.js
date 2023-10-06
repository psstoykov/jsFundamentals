function solve(one, two, three) {

    let buff;
    (one < two) ? buff = one : buff = two;
    (three < buff) ? console.log(three) : console.log(buff);
};

solve(2,
    5,
    3);
solve(600,
    342,
    123);
solve(25,
    21,
    4);
solve(2,
    2,
    2);