function solve(arr) {

    let result = arr.sort();

    for (let i = 0; i < result.length; i++) {
        console.log(`${i + 1}.${result[i]}`)
    }

};

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
solve(['Watermelon', 'Banana', 'Apples']);
