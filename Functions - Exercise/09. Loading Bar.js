function solve(percent) {

    let bar = percent / 10;
    let loadingBar = [];
    loadingBar.push('[');

    for (let i = 0; i < bar; i++) {
        loadingBar.push('%')
    }
    let rest = 10 - bar;

    for (let i = 0; i < rest; i++) {
        loadingBar.push('.')
    }
    loadingBar.push(']');
    let result = loadingBar.join("")

    if (percent < 100) {

        console.log(`${percent}% ${result}`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log(result)
    }
};


// solve(30);
// solve(50);
solve(100);