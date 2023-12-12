function solve(input) {

    let pattern = /(?<user>^[a-z0-9]+[\.\-\_]*[a-z0-9]+)@(?<host>[a-z]+[\-]?[a-z]\.[a-z]+[\-]?[a-z](\.[a-z]+[\-]?[a-z])*)/g;


    let matchArray = [];

    let match = pattern.exec(input);

    while (match != null) {
        matchArray.push(match[0])
        match = pattern.exec(input);
    }
    console.log(matchArray.join("\n"))
};

solve("Please contact us at: support@github.com.");

solve("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.");

solve("Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de.");