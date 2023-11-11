function solve(input) {


    let inputArray = input.split("");

    let string1 = inputArray.splice(0, input.length / 2).join("");
    let string2 = inputArray.join("");

    let length = input.length / 2;

    let a = "";
    let b = "";

    for (let i = length - 1; i >= 0; i--) {
        a += string1[i];
        b += string2[i];
    }
    console.log(a);
    console.log(b);

};

solve('tluciffiDsIsihTgnizamAoSsIsihT');

// solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');