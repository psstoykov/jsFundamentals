function triples(nAsString) {
    let num = Number(nAsString);
    let chars = 'abcdefghijklmnopqrstuvwxyz';


    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                console.log(chars[i] + chars[j] + chars[k])
            }
        }
    }
};

triples('3');
