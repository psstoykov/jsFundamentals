function solve(password) {

    let isCorrect = true;
    let digits = 0;

    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isCorrect = false;
    };
    for (let i = 0; i < password.length; i++) {
        let code = password[i].charCodeAt(0);
        if (code > 47 && code < 58) {
            digits++;
        }
        if ((code < 48) ||
            (code > 57 && code < 65) ||
            (code > 90 && code < 97) ||
            (code > 122)) {
            console.log("Password must consist only of letters and digits");
            isCorrect = false;
            break;
        }
    }

    if (digits < 2) {
        console.log("Password must have at least 2 digits");
        isCorrect = false;
    }
    if (isCorrect) {
        console.log("Password is valid");
    }
};


solve('logIn');
solve('MyPass123');
solve('Pa$s$s');