function solve(input) {


    let companies = {};
    for (let command of input) {
        let [company, id] = command.split(" -> ")
        if (companies.hasOwnProperty(company)) {
            companies[company] += " " + id;
        } else {
            companies[company] = id;
        }
    }

    let listArray = [];
    for (let entry of Object.entries(companies)) {
        listArray.push(entry)
    }

    for (let i = 0; i < listArray.length; i++) {
        let name = listArray[i][0];
        let id = listArray[i][1]
        let idArray = id.split(" ");

        let uniqIds = [...new Set(idArray)];
        listArray[i][1] = uniqIds;

    }
    listArray.sort((a, b) => a[0].localeCompare(b[0]))

    for (let [name, ids] of listArray) {

        console.log(name)
        for (let el of ids) {
            console.log(`-- ${el}`)
        }
    }
};

solve([
    'SoftUni -> BB12345',
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);

// solve([
//     'SoftUni ->  AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo ->  XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111']);
