function solve(n) {
    for (let i = 1; i <= n; i++) {
        let buff = "";
        for (let y = 1; y <= n; y++) {
            buff += n + " "
        }
        console.log(buff)
    }
};

solve(3);
solve(7);
solve(2);