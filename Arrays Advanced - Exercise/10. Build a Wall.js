function solve(wall) {
    let costPerYard = 1900;
    //array for concrete used each day
    let concreteArray = [];
    //concrete needed for each section each day
    let dailyConcrete = 195;


    ///find how many total iterations I need to make
    let sorted = wall.sort((a, b) => a - b);
    let iterations = 30 - sorted[0];


    for (let i = 1; i <= iterations; i++) { ////each day
        let currentConcrete = 0;
        for (let j = 0; j < wall.length; j++) { ///each section
            if (wall[j] < 30) {
                currentConcrete += dailyConcrete;
                wall[j]++;
            }
        }
        concreteArray.push(currentConcrete)
    }
    let sum = 0;
    for (let el of concreteArray) {
        sum += el
    }
    console.log(concreteArray.join(", "))
    console.log(`${sum * costPerYard} pesos`)
};

// solve([17]);
// solve([21, 25, 28]);
solve([17, 22, 17, 19, 17]);
