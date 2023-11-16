function solve([input]) {

    let pattern = /(?<day>\d{2})(?<sep>[-/.])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})/g;

    let validDate = pattern.exec(input);

    while (validDate != null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
        validDate = pattern.exec(input);
    }
};

solve(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);

// solve(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);