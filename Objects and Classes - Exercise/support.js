let heroes = [];

heroes.push({
    name: 'Petar',
    level: 3,
})
heroes.push({
    name: 'Petar',
    level: 5,
})
heroes.push({
    name: 'Petar',
    level: 1,
})
heroes.push({
    name: 'Petar',
    level: 7,
})
heroes.push({
    name: 'Petar',
    level: 2,
})
heroes.push({
    name: 'Petar',
    level: 9,
})

console.log(heroes)

let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

console.log(sortedHeroes)