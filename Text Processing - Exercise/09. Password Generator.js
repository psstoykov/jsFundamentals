function solve(input) {

    let password = input[0] + input[1];

    let key = input[2];
    // key = key.toUpperCase();
    key = key.split("");

    password = password.split("");
    let index = 0;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (/[aeiouAEIOU]/.test(char)) {
            password[i] = key[index];
            if (index == key.length - 1) {
                index = 0;
            } else {
                index++;
            }
        }
    }
    // console.log(`Your generated password is ${password.reverse().join("")}`)
    console.log(password.reverse().join(""))
};

solve([
    'ilovemandarines', 'petarstoykov@gmailcom',
    '!p@s$word#PeShY'
]);

// solve([
//     'marijekorenromp@hotmailcom', 'frenchhorn',
//     'p@$$word#MaHeKo'
// ]);

// solve([
//     'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
// ]);