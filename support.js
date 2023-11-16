function solve(input) {

    let letterPattern = /[A-Za-z]/g;
    let name = input.match(letterPattern).join("");

    console.log(name)

}


solve('Mi*&^%$ch123o!#$%#nne787) ');