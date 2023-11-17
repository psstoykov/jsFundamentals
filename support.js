
let planetPattern = /@(?<name>[A-Za-z]+)(?<filling>.+)?:(?<population>[\d]+)!(?<attackType>[AD])!->(?<soldierCount>[\d]+)/g;

// let planetString = "PQ@Alderaa1:30000!A!->20000";
let planetString = "@Cantonica:3000!D!->4000NM"

let match = planetPattern.exec(planetString);

console.log(match)


