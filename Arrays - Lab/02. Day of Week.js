function solve(n) {

    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", " Sunday"];

    if (n >= 1 && n <= 7) {
        console.log(week[n - 1]);
    } else {
        console.log("Invalid day!")
    }
};

solve(3);
solve(6);
solve(11);
