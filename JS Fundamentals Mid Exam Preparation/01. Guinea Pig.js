function solve(array) {

    //Kg to Grams function
    let kgToGrams = item => item * 1000;

    let food = kgToGrams(array[0]);
    let hay = kgToGrams(array[1]);
    let cover = kgToGrams(array[2]);
    let weight = kgToGrams(array[3]);

    let foodPerDay = 300; //in grams
    let coverPerDays = 0.3333;
    let enoughFood = true;

    for (let day = 1; day <= 30; day++) {
        food -= foodPerDay;
        if (day % 2 == 0) {
            hay -= food * 0.05;
        }
        if (day % 3 == 0) {
            cover -= weight * coverPerDays
        }
        if (food < 0 || hay < 0 || cover < 0) {
            enoughFood = false;
        }

    }

    if (enoughFood) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`)
    } else {
        console.log(`Merry must go to the pet store!`)
    }

};

solve([10,
    5,
    5.2,
    1]);
