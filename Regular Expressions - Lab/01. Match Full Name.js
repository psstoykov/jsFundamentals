function solve(string) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validNames = [];

    let validName = pattern.exec(string);

    while (validName != null) {

        validNames.push(validName);
        validName = pattern.exec(string)
    }
    console.log(validNames.join(" "))
};

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");