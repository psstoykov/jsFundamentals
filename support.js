let pattern = /(\@\#+)[A-Z][A-Za-z\d]{4,}[A-Z]\1/g;

let string = "@###Brea0D@###";

let match = pattern.exec(string);

console.log(match)